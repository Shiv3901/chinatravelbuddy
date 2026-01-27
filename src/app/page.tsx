import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="section-container relative py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Smart Travel Assistant for{" "}
              <span className="text-secondary-400">Beijing & Shanghai</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed">
              AI-powered recommendations. No information overload. Just the
              places, food, and experiences that match{" "}
              <em>your</em> travel style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/plan"
                className="btn-primary text-lg !px-8 !py-4 text-center"
              >
                Start Planning Your Trip
              </Link>
              <Link
                href="/guides"
                className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Essential Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Three simple steps to a personalized China itinerary tailored to
            your interests, budget, and schedule.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Tell Us About You</h3>
              <p className="text-gray-600">
                Answer a few quick questions about your travel style, interests,
                and schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Get Your Itinerary</h3>
              <p className="text-gray-600">
                We match you with the best destinations, restaurants, and
                experiences for your trip.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Travel with Confidence</h3>
              <p className="text-gray-600">
                Follow our setup guides for VPN, eSIM, and payments so
                you&apos;re ready before you land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Two Incredible Cities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card group">
              <div className="text-4xl mb-4">🏯</div>
              <h3 className="text-2xl font-bold mb-2">Beijing</h3>
              <p className="text-gray-600 mb-4">
                Ancient imperial capital. Home to the Forbidden City, Great
                Wall, incredible street food, and centuries of history waiting
                to be explored.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>10+ curated destinations</li>
                <li>Must-try Peking duck spots</li>
                <li>Hutong neighborhood walks</li>
              </ul>
              <Link href="/plan" className="text-primary-600 font-semibold">
                Plan Beijing Trip &rarr;
              </Link>
            </div>

            <div className="card group">
              <div className="text-4xl mb-4">🌆</div>
              <h3 className="text-2xl font-bold mb-2">Shanghai</h3>
              <p className="text-gray-600 mb-4">
                China&apos;s most cosmopolitan city. Colonial architecture meets
                futuristic skyline, world-class food scene, and vibrant
                neighborhoods.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>10+ curated destinations</li>
                <li>Best soup dumpling spots</li>
                <li>French Concession walks</li>
              </ul>
              <Link href="/plan" className="text-primary-600 font-semibold">
                Plan Shanghai Trip &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Setup */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Essential Setup Before You Go
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            China&apos;s internet and payment systems are different. Get these
            set up before your flight.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/guides/vpn-setup" className="card block group">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                VPN Setup
              </h3>
              <p className="text-sm text-gray-600">
                Access Google, WhatsApp, and social media in China. Set up
                before you leave.
              </p>
            </Link>

            <Link href="/guides/esim-guide" className="card block group">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                eSIM Guide
              </h3>
              <p className="text-sm text-gray-600">
                Get instant data on arrival. Activate your eSIM before
                boarding your flight.
              </p>
            </Link>

            <Link href="/guides/alipay-setup" className="card block group">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                Alipay & WeChat Pay
              </h3>
              <p className="text-sm text-gray-600">
                Cash is rarely used in China. Set up mobile payments for a
                smooth trip.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your China Trip?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Answer a few questions and get a personalized itinerary in seconds.
            No signup required.
          </p>
          <Link href="/plan" className="btn-primary text-lg !px-10 !py-4">
            Start Planning Now
          </Link>
        </div>
      </section>
    </>
  );
}
