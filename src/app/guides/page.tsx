import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essential China Travel Guides - China Travel Assistant",
  description:
    "Step-by-step guides for VPN setup, eSIM activation, Alipay & WeChat Pay, and more. Everything you need before traveling to China.",
};

const guides = [
  {
    slug: "vpn-setup",
    emoji: "🔒",
    title: "VPN Setup Guide",
    description:
      "Access Google, WhatsApp, Instagram, and social media while in China. Step-by-step setup instructions.",
    tag: "Critical",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    slug: "esim-guide",
    emoji: "📱",
    title: "eSIM Activation Guide",
    description:
      "Get instant mobile data on arrival in China. Activate before you board your flight.",
    tag: "Recommended",
    tagColor: "bg-secondary-100 text-secondary-700",
  },
  {
    slug: "alipay-setup",
    emoji: "💳",
    title: "Alipay & WeChat Pay Setup",
    description:
      "Set up mobile payments before your trip. Cash is rarely accepted in modern China.",
    tag: "Essential",
    tagColor: "bg-primary-100 text-primary-700",
  },
];

export default function GuidesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="section-container py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Essential China Travel Guides
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            China&apos;s internet, payment systems, and travel logistics work
            differently than what you&apos;re used to. These guides will get you
            prepared.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card flex items-start gap-4 group block"
            >
              <span className="text-3xl flex-shrink-0">{guide.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold group-hover:text-primary-600 transition-colors">
                    {guide.title}
                  </h2>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${guide.tagColor}`}
                  >
                    {guide.tag}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{guide.description}</p>
              </div>
              <span className="text-gray-400 group-hover:text-primary-500 transition-colors">
                &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/plan" className="btn-primary">
            Plan Your Trip Now
          </Link>
        </div>
      </div>
    </div>
  );
}
