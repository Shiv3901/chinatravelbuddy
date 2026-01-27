import { matchDestinations } from "@/lib/matchDestinations";
import { TravelerType, City, UserPreferences } from "@/lib/types";
import VPNWarning from "@/components/VPNWarning";
import DestinationCard from "@/components/DestinationCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Personalized China Itinerary - China Travel Assistant",
  description:
    "A personalized travel itinerary for Beijing and Shanghai based on your preferences.",
};

const travelerLabels: Record<string, string> = {
  "budget-backpacker": "Budget Backpacker",
  foodie: "Foodie Explorer",
  "culture-buff": "Culture & History Buff",
  "first-timer": "First-Time Visitor",
  business: "Business Trip + Exploring",
};

const cityLabels: Record<string, string> = {
  beijing: "Beijing",
  shanghai: "Shanghai",
  both: "Beijing & Shanghai",
};

export default async function ItineraryPage({
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedParams = await searchParams;

  const travelerType = (resolvedParams.type as TravelerType) || "first-timer";
  const city = (resolvedParams.city as City) || "beijing";
  const hasVPN = resolvedParams.vpn === "true";

  const answers: Record<string, string> = {};
  for (const [key, value] of Object.entries(resolvedParams)) {
    if (!["type", "city", "vpn"].includes(key) && typeof value === "string") {
      answers[key] = value;
    }
  }

  const preferences: UserPreferences = {
    travelerType,
    city,
    answers,
    hasVPN,
  };

  const recommendations = matchDestinations(preferences);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="section-container py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Your {cityLabels[city]} Itinerary
          </h1>
          <p className="text-gray-600">
            Personalized for you:{" "}
            <span className="font-medium text-primary-600">
              {travelerLabels[travelerType]}
            </span>
            {answers.days && (
              <>
                {" "}
                &middot;{" "}
                <span className="font-medium">{answers.days} days</span>
              </>
            )}
          </p>
        </div>

        {/* VPN Warning */}
        {!hasVPN && <VPNWarning />}

        {/* Essential Setup Banner */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-primary-800 mb-3">
            Essential Setup Checklist
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/guides/vpn-setup"
              className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-900"
            >
              <span>🔒</span> VPN Setup Guide
            </Link>
            <Link
              href="/guides/esim-guide"
              className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-900"
            >
              <span>📱</span> eSIM Activation
            </Link>
            <Link
              href="/guides/alipay-setup"
              className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-900"
            >
              <span>💳</span> Payment Setup
            </Link>
          </div>
        </div>

        {/* Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Your Top {recommendations.length} Picks
          </h2>

          {recommendations.map((dest, i) => (
            <DestinationCard key={dest.id} destination={dest} index={i} />
          ))}
        </section>

        {/* Practical Info */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <h3 className="text-lg font-bold mb-3">🚇 Getting Around</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>Metro:</strong> Fast, cheap, and covers most tourist areas.
                Download Amap or Baidu Maps.
              </li>
              <li>
                <strong>Didi:</strong> China&apos;s Uber. Download the app and link a
                payment method.
              </li>
              <li>
                <strong>Taxis:</strong> Show your destination in Chinese characters.
                Always use the meter.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold mb-3">🗣️ Language Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>Hello:</strong> Nǐ hǎo (你好)
              </li>
              <li>
                <strong>Thank you:</strong> Xiè xie (谢谢)
              </li>
              <li>
                <strong>How much?:</strong> Duōshǎo qián? (多少钱?)
              </li>
              <li>
                <strong>Tip:</strong> Download Google Translate offline Chinese
                pack before you go.
              </li>
            </ul>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="card mb-12">
          <h3 className="text-lg font-bold mb-3">💡 Pro Tips for Your Trip</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              Download your VPN and eSIM before arriving - you can&apos;t access
              the App Store/Play Store for many apps once in China.
            </li>
            <li>
              Carry a small amount of cash (¥200-500) as backup, but most places
              accept Alipay or WeChat Pay.
            </li>
            <li>
              Save your hotel address in Chinese characters on your phone to show
              taxi drivers.
            </li>
            <li>
              Book popular attractions (Forbidden City, Great Wall) online in
              advance - many require passport-linked reservations.
            </li>
            <li>
              Peak seasons: Chinese New Year (Jan/Feb), National Day (Oct 1-7),
              and summer holidays have massive crowds.
            </li>
          </ul>
        </section>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/plan" className="btn-secondary">
            Start Over
          </Link>
          <Link href="/guides" className="btn-primary">
            View All Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
