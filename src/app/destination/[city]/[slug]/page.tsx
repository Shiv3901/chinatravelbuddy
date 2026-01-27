import {
  getDestinationBySlug,
  getNearbyDestinations,
} from "@/lib/matchDestinations";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ city: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, slug } = await params;
  const destination = getDestinationBySlug(city, slug);
  if (!destination) return { title: "Not Found" };

  return {
    title: `${destination.name} - ${city.charAt(0).toUpperCase() + city.slice(1)} Travel Guide`,
    description: destination.description.slice(0, 160),
  };
}

const typeEmojis: Record<string, string> = {
  historical: "🏛️",
  culture: "🎨",
  neighborhood: "🏘️",
  religious: "🛕",
  outdoor: "🌳",
  food: "🍜",
  landmark: "🌆",
  garden: "🌿",
  viewpoint: "🔭",
  museum: "🖼️",
  park: "🌳",
};

export default async function DestinationPage({ params }: PageProps) {
  const { city, slug } = await params;
  const destination = getDestinationBySlug(city, slug);

  if (!destination) {
    notFound();
  }

  const nearby = getNearbyDestinations(city, slug);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const emoji = typeEmojis[destination.type] || "📍";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="section-container py-12 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-200 text-sm mb-3">
              <Link href="/guides" className="hover:text-white">
                Guides
              </Link>
              <span>/</span>
              <Link
                href={`/plan`}
                className="hover:text-white"
              >
                {cityName}
              </Link>
              <span>/</span>
              <span className="text-white">{destination.name}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {emoji} {destination.name}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-primary-100">
              <span>📍 {destination.neighborhood}</span>
              <span>⏱️ {destination.timeNeeded}</span>
              <span>💰 {destination.cost}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-8 md:py-12">
        <div className="max-w-3xl">
          {/* Overview */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {destination.description}
            </p>
          </section>

          {/* Why Visit */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Visit</h2>
            <div className="space-y-3">
              {Object.entries(destination.whyPick).map(([profile, reason]) => (
                <div
                  key={profile}
                  className="bg-accent-50 border border-accent-200 rounded-lg p-4"
                >
                  <span className="text-xs font-medium text-accent-600 uppercase">
                    {profile.replace("-", " ")}
                  </span>
                  <p className="text-accent-800 mt-1">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Info */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Practical Information</h2>
            <div className="card">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-900">Hours:</strong>
                  <p className="text-gray-600">{destination.hours}</p>
                </div>
                <div>
                  <strong className="text-gray-900">Cost:</strong>
                  <p className="text-gray-600">{destination.cost}</p>
                </div>
                <div>
                  <strong className="text-gray-900">Best Time:</strong>
                  <p className="text-gray-600">{destination.bestTime}</p>
                </div>
                <div>
                  <strong className="text-gray-900">How to Get There:</strong>
                  <p className="text-gray-600">{destination.howToGetThere}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pro Tips */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
            <div className="space-y-3">
              {destination.proTips.map((tip, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-secondary-500 font-bold mt-0.5">
                    💡
                  </span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tags */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-2">
              {destination.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Nearby */}
          {nearby.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Nearby in {cityName}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {nearby.map((dest) => (
                  <Link
                    key={dest.id}
                    href={`/destination/${city}/${dest.id}`}
                    className="card block hover:border-primary-300 group"
                  >
                    <h3 className="font-bold group-hover:text-primary-600 transition-colors mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {dest.timeNeeded} &middot; {dest.cost}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Link href="/plan" className="btn-primary">
              Plan Your Trip
            </Link>
            <Link href="/guides" className="btn-secondary">
              Travel Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
