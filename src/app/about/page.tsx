import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - China Travel Assistant",
  description:
    "Learn about China Travel Assistant and our mission to help independent Western travelers navigate Beijing and Shanghai.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="section-container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            About China Travel Assistant
          </h1>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Traveling independently in China is one of the most rewarding
                experiences you can have - but it also comes with unique
                challenges. From the Great Firewall blocking your go-to apps, to
                a cashless society running on platforms you&apos;ve never heard of,
                China requires more preparation than most destinations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We built China Travel Assistant to cut through the noise. Instead
                of overwhelming you with a database of every tourist attraction,
                we ask a few simple questions and give you a personalized
                itinerary that matches your travel style, budget, and interests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">What Makes Us Different</h2>
              <div className="space-y-4">
                <div className="card">
                  <h3 className="font-bold mb-1">Personalized, Not Generic</h3>
                  <p className="text-sm text-gray-600">
                    A budget backpacker and a business traveler need completely
                    different recommendations. Our matching algorithm tailors
                    everything to your specific profile.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold mb-1">Practical First</h3>
                  <p className="text-sm text-gray-600">
                    We lead with what you actually need: VPN setup, mobile
                    payments, and connectivity. The prettiest itinerary is useless
                    if you can&apos;t access Google Maps.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold mb-1">No Information Overload</h3>
                  <p className="text-sm text-gray-600">
                    We give you 5-7 curated recommendations, not 200. Every
                    suggestion comes with a reason why it&apos;s right for you.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Affiliate Disclosure</h2>
              <p className="text-gray-700 leading-relaxed">
                Some links on this site are affiliate links. When you sign up for
                a VPN, eSIM, or book a hotel through our links, we may earn a
                small commission at no extra cost to you. This helps us keep the
                site running and free to use. We only recommend products and
                services we genuinely believe are the best options for travelers
                to China.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Start Planning</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ready to plan your trip? Our AI-powered questionnaire takes just
                a couple of minutes and gives you a personalized itinerary you
                can actually use.
              </p>
              <Link href="/plan" className="btn-primary">
                Plan Your Trip
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
