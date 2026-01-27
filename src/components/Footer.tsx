import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">China Travel Assistant</h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              AI-powered travel recommendations for independent travelers
              visiting Beijing and Shanghai.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/plan"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Travel Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/vpn-setup"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  VPN Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Essential Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/vpn-setup"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  VPN Setup Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/esim-guide"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  eSIM Activation
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/alipay-setup"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Alipay & WeChat Pay
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-sm text-primary-300">
          <p>
            &copy; {new Date().getFullYear()} China Travel Assistant. Built for
            independent travelers.
          </p>
          <p className="mt-1 text-xs text-primary-400">
            Some links on this site are affiliate links. We may earn a
            commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
