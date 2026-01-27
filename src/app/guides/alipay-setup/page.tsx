import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alipay & WeChat Pay Setup for China - China Travel Assistant",
  description:
    "How to set up Alipay and WeChat Pay with a foreign credit card for traveling in China. Essential for cashless payments.",
};

export default function AlipaySetupPage() {
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
            💳 Alipay & WeChat Pay Setup
          </h1>

          {/* Quick Summary */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-primary-800 mb-2">Why This Matters</h2>
            <p className="text-primary-700">
              China is almost entirely cashless. From street food vendors to
              luxury hotels, everyone uses mobile payments. As of 2024,
              international visitors can link foreign credit cards to Alipay and
              WeChat Pay, making it much easier to pay for things.
            </p>
          </div>

          {/* Alipay Setup */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Setting Up Alipay</h2>
            <p className="text-gray-700 mb-4">
              Alipay is the most widely accepted mobile payment in China. In
              2024, they made it much easier for international travelers to use
              the app with foreign cards.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Download Alipay",
                  desc: "Get the Alipay app from the App Store or Google Play. Available in English.",
                },
                {
                  step: 2,
                  title: "Register with your phone number",
                  desc: "Sign up using your non-Chinese phone number. You'll receive a verification code via SMS.",
                },
                {
                  step: 3,
                  title: "Complete identity verification",
                  desc: "Upload a photo of your passport. This is required for linking a payment method. Processing usually completes within minutes.",
                },
                {
                  step: 4,
                  title: "Link your credit card",
                  desc: "Go to 'Me' > 'Bank Cards' > 'Add Card'. Enter your Visa, Mastercard, or other international credit/debit card details.",
                },
                {
                  step: 5,
                  title: "Start paying",
                  desc: "To pay, open Alipay, tap 'Scan' to scan a merchant's QR code, or show your own QR code for the merchant to scan.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
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

          {/* WeChat Pay Setup */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Setting Up WeChat Pay</h2>
            <p className="text-gray-700 mb-4">
              WeChat Pay is integrated into WeChat, China&apos;s super-app
              (messaging + social media + payments). It&apos;s the second most
              common payment method.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Download WeChat",
                  desc: "Install WeChat from your app store. Create an account or log in if you already have one.",
                },
                {
                  step: 2,
                  title: "Enable WeChat Pay",
                  desc: "Go to 'Me' > 'Services' > 'Wallet'. Follow the prompts to enable WeChat Pay.",
                },
                {
                  step: 3,
                  title: "Verify your identity",
                  desc: "Upload your passport photo for identity verification. This is required by Chinese regulations.",
                },
                {
                  step: 4,
                  title: "Add a payment card",
                  desc: "Link your international Visa or Mastercard. Go to Wallet > Cards > Add a Card.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">
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

          {/* Tips */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tips & Common Issues</h2>
            <div className="space-y-3">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-1">
                  Transaction limits
                </h3>
                <p className="text-sm text-gray-600">
                  International cards on Alipay have a limit of ¥2,000 per
                  transaction and ¥50,000 per year. For most travelers, this is
                  more than enough.
                </p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-1">
                  Card not accepted?
                </h3>
                <p className="text-sm text-gray-600">
                  Some banks block Chinese transactions by default. Call your
                  bank before traveling and let them know you&apos;ll be making
                  payments in China.
                </p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-1">
                  Always carry some cash
                </h3>
                <p className="text-sm text-gray-600">
                  Keep ¥200-500 in cash as backup. Small vendors, some taxis,
                  and older establishments may not accept mobile payments. ATMs
                  are widely available at banks.
                </p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-1">
                  Which app to prioritize?
                </h3>
                <p className="text-sm text-gray-600">
                  If you only set up one, choose Alipay. It has slightly better
                  support for international cards and is accepted at virtually
                  every merchant in China.
                </p>
              </div>
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
              <Link href="/guides/esim-guide" className="card block group">
                <h3 className="font-bold group-hover:text-primary-600">
                  📱 eSIM Activation Guide
                </h3>
                <p className="text-sm text-gray-500">
                  Stay connected with mobile data
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
