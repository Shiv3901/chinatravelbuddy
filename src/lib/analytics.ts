// Analytics helper - integrates with Vercel Analytics or Plausible
// Replace with actual analytics implementation when deploying

/* eslint-disable @typescript-eslint/no-explicit-any */
export function trackEvent(
  eventName: string,
  properties?: Record<string, string>
) {
  // Vercel Analytics
  if (typeof window !== "undefined" && (window as any).va) {
    (window as any).va("event", {
      name: eventName,
      ...properties,
    });
  }

  // Console log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${eventName}`, properties);
  }
}
