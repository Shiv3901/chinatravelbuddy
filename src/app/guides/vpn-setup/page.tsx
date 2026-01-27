import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VPN Setup Guide for China - China Travel Assistant",
  description:
    "Step-by-step guide to set up a VPN before traveling to China. Access Google, WhatsApp, Instagram, and more.",
};

export default function VPNSetupPage() {
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
            🔒 VPN Setup Guide for China
          </h1>

          {/* Quick Summary */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-red-800 mb-2">Why You Need This</h2>
            <p className="text-red-700">
              China blocks access to Google (including Gmail, Maps, YouTube),
              WhatsApp, Instagram, Facebook, Twitter, and many Western news
              sites. A VPN is the only way to access these services while in
              China. <strong>You must set this up before you arrive</strong> -
              VPN provider websites are also blocked in China.
            </p>
          </div>

          {/* What's Blocked */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              What&apos;s Blocked in China?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card">
                <h3 className="font-bold text-red-600 mb-2">Blocked</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Google (Search, Gmail, Maps, Drive, YouTube)</li>
                  <li>WhatsApp, Telegram, Signal</li>
                  <li>Facebook, Instagram, Twitter/X</li>
                  <li>Many news sites (NYT, BBC, Reuters)</li>
                  <li>Wikipedia (intermittent)</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="font-bold text-green-600 mb-2">
                  Works Without VPN
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Apple iMessage and FaceTime</li>
                  <li>Email (Outlook, Yahoo - usually)</li>
                  <li>LinkedIn</li>
                  <li>Bing</li>
                  <li>Most banking apps</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Recommended Providers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Recommended VPN Providers</h2>

            <div className="card mb-4 border-primary-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">ExpressVPN</h3>
                <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded-full">
                  Top Pick
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>
                  ✅ Most reliable in China - consistently bypasses blocks
                </li>
                <li>✅ 30-day money-back guarantee</li>
                <li>✅ Easy-to-use apps for all devices</li>
                <li>✅ 24/7 live chat support</li>
                <li>⚠️ Pricier than alternatives</li>
              </ul>
              <a
                href="https://www.expressvpn.com/?offer=3monthsfree&a_fid=YOUR_AFFILIATE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Get ExpressVPN (3 months free)
              </a>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">NordVPN</h3>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>✅ Budget-friendly with good speeds</li>
                <li>✅ Obfuscated servers for China</li>
                <li>✅ 30-day money-back guarantee</li>
                <li>⚠️ May need manual server selection in China</li>
              </ul>
              <a
                href="https://nordvpn.com/YOUR_AFFILIATE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Get NordVPN
              </a>
            </div>
          </section>

          {/* Setup Steps */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Step-by-Step Setup (Do This at Home)
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Sign up and download",
                  desc: "Create an account on the VPN provider's website and download the app for all your devices (phone, laptop, tablet).",
                },
                {
                  step: 2,
                  title: "Install on all devices",
                  desc: "Install the VPN app on every device you're bringing to China. You won't be able to download it once you're there.",
                },
                {
                  step: 3,
                  title: "Test the connection",
                  desc: "Open the VPN app, connect to a server, and verify it works. Try connecting to a few different servers.",
                },
                {
                  step: 4,
                  title: "Enable auto-connect",
                  desc: "In the VPN settings, enable 'auto-connect on startup' so it activates automatically when you turn on your device.",
                },
                {
                  step: 5,
                  title: "Download offline content",
                  desc: "Download Google Maps offline maps for Beijing/Shanghai, and save any important documents offline.",
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

          {/* Troubleshooting */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Troubleshooting in China</h2>
            <div className="space-y-3">
              {[
                {
                  q: "VPN won't connect",
                  a: "Try switching to a different server or protocol. ExpressVPN's Lightway protocol works best. NordVPN users should try obfuscated servers.",
                },
                {
                  q: "Connection is very slow",
                  a: "Try servers in Japan, Hong Kong, or Singapore for the best speeds from mainland China.",
                },
                {
                  q: "VPN keeps disconnecting",
                  a: "Enable the kill switch feature and try switching between Wi-Fi and mobile data. VPN connections can be less stable during major Chinese holidays.",
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
              <Link href="/guides/esim-guide" className="card block group">
                <h3 className="font-bold group-hover:text-primary-600">
                  📱 eSIM Activation Guide
                </h3>
                <p className="text-sm text-gray-500">
                  Stay connected with mobile data
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
