import Link from "next/link";

export default function VPNWarning() {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-red-800 mb-3">
        Critical: Set Up VPN Before Your Trip
      </h2>
      <p className="text-red-700 mb-4">
        You mentioned you haven&apos;t set up a VPN yet. Without one, you
        cannot access:
      </p>
      <ul className="list-disc ml-6 mb-4 text-red-700 space-y-1">
        <li>Gmail, Google Maps, Google Drive</li>
        <li>WhatsApp, Instagram, Facebook</li>
        <li>Many Western news sites and apps</li>
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/guides/vpn-setup"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
        >
          Get VPN Setup Guide
        </Link>
        <Link
          href="/guides/esim-guide"
          className="inline-block bg-white text-red-600 border-2 border-red-300 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors text-center"
        >
          eSIM Setup Guide
        </Link>
      </div>
    </div>
  );
}
