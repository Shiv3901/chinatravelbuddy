import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eSIM Guide for China Travel - China Travel Assistant",
  description:
    "How to set up an eSIM for China travel. Get instant mobile data on arrival without swapping SIM cards.",
};

export default function ESIMGuidePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="section-container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/guides"
            className="text-sm text-primary-600 hover:text-primary-700 mb-4 inline-block"
          >
            &larr; All Guides
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📱 eSIM Guide for China
          </h1>

          {/* Quick Summary */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-primary-800 mb-2">Quick Summary</h2>
            <p className="text-primary-700">
              An eSIM gives you instant mobile data when you land in China - no
              physical SIM swap needed. Activate it before you board your flight,
              and you&apos;ll have data the moment you turn off airplane mode.
            </p>
          </div>

          {/* What is an eSIM */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What is an eSIM?</h2>
            <p className="text-gray-700 mb-4">
              An eSIM (embedded SIM) is a digital SIM that lets you activate a
              cellular plan without using a physical SIM card. Most modern
              smartphones support eSIM, including iPhone XS and newer, Samsung
              Galaxy S20 and newer, and Google Pixel 3 and newer.
            </p>
            <div className="card">
              <h3 className="font-bold mb-2">eSIM vs Physical SIM</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✅ No need to find a SIM shop on arrival</li>
                <li>✅ Keep your home number active simultaneously</li>
                <li>✅ Activate before you even leave home</li>
                <li>✅ No risk of losing a tiny SIM card</li>
              </ul>
            </div>
          </section>

          {/* Recommended Provider */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Recommended: Airalo</h2>
            <div className="card border-primary-200">
              <h3 className="text-xl font-bold mb-3">Airalo China eSIM</h3>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>✅ Plans from $5 (1GB) to $26 (10GB)</li>
                <li>✅ Easy app-based setup</li>
                <li>✅ Works with most modern smartphones</li>
                <li>✅ Data-only (use VoIP for calls)</li>
                <li>✅ Instant activation via QR code</li>
              </ul>
              <a
                href="https://www.airalo.com?ref=YOUR_REF"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Get Airalo eSIM for China
              </a>
            </div>
          </section>

          {/* Setup Steps */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Step-by-Step Setup</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Check compatibility",
                  desc: "Verify your phone supports eSIM and is carrier-unlocked. Go to Settings > General > About and look for 'Available SIM' or 'eSIM' support.",
                },
                {
                  step: 2,
                  title: "Download the Airalo app",
                  desc: "Install the Airalo app from the App Store or Google Play. Create an account.",
                },
                {
                  step: 3,
                  title: "Purchase a China plan",
                  desc: "Search for 'China' in the app and choose a data plan based on your trip length. 3GB is usually enough for a week.",
                },
                {
                  step: 4,
                  title: "Install the eSIM",
                  desc: "Follow the in-app instructions to scan the QR code and install the eSIM profile. Do this while still connected to Wi-Fi at home.",
                },
                {
                  step: 5,
                  title: "Activate before landing",
                  desc: "Turn on the eSIM data roaming in your phone settings. When you land and turn off airplane mode, data will connect automatically.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important Note */}
          <section className="mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-yellow-800 mb-2">
                Important: eSIM ≠ VPN
              </h3>
              <p className="text-yellow-700 text-sm">
                An eSIM gives you mobile data in China, but websites and apps
                like Google, WhatsApp, and social media are still blocked. You
                need both an eSIM (for data) and a VPN (to bypass blocks).
              </p>
              <Link
                href="/guides/vpn-setup"
                className="text-yellow-800 font-semibold text-sm mt-2 inline-block hover:underline"
              >
                Set up your VPN too &rarr;
              </Link>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Common Issues</h2>
            <div className="space-y-3">
              {[
                {
                  q: "eSIM not connecting after landing",
                  a: "Make sure data roaming is enabled for the eSIM profile. Go to Settings > Cellular/Mobile > select the eSIM plan > enable Data Roaming.",
                },
                {
                  q: "Running out of data",
                  a: "You can top up through the Airalo app using Wi-Fi at your hotel. Most hotels have free Wi-Fi.",
                },
                {
                  q: "Phone not compatible",
                  a: "Consider buying a local SIM card at the airport. China Mobile and China Unicom have tourist SIM counters.",
                },
              ].map((item, i) => (
                <div key={i} className="card">
                  <h3 className="font-bold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/guides/vpn-setup" className="card block group">
                <h3 className="font-bold group-hover:text-primary-600">
                  🔒 VPN Setup Guide
                </h3>
                <p className="text-sm text-gray-500">
                  Access blocked sites in China
                </p>
              </Link>
              <Link href="/guides/alipay-setup" className="card block group">
                <h3 className="font-bold group-hover:text-primary-600">
                  💳 Alipay & WeChat Pay
                </h3>
                <p className="text-sm text-gray-500">
                  Set up mobile payments
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
