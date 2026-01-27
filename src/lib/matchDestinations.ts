import destinationsData from "../../data/destinations.json";
import matchingRulesData from "../../data/matching-rules.json";
import {
  Destination,
  MatchedDestination,
  UserPreferences,
} from "./types";

const destinations = destinationsData as unknown as Record<string, Destination[]>;
const matchingRules = matchingRulesData as {
  profiles: Record<
    string,
    {
      prioritize: string[];
      avoid?: string[];
      maxItems: number;
      requireAtLeast?: number;
      includeHiddenGems?: boolean;
      minimumMustSees?: number;
      balanceWith?: string[];
      preferEvening?: boolean;
    }
  >;
};

export function matchDestinations(prefs: UserPreferences): MatchedDestination[] {
  const profile = matchingRules.profiles[prefs.travelerType];
  if (!profile) return [];

  const cities: string[] =
    prefs.city === "both" ? ["beijing", "shanghai"] : [prefs.city];

  let allScored: MatchedDestination[] = [];

  for (const city of cities) {
    const cityDestinations = destinations[city] || [];

    const scored = cityDestinations.map((dest) => {
      let score = 0;

      // Base score: match profile priorities against tags
      for (const tag of dest.tags) {
        if (profile.prioritize.includes(tag)) {
          score += 10;
        }
      }

      // Bonus: destination explicitly lists this traveler type in bestFor
      if (dest.bestFor.includes(prefs.travelerType)) {
        score += 15;
      }

      // Penalty: avoid tags
      if (profile.avoid) {
        for (const tag of dest.tags) {
          if (profile.avoid.includes(tag)) {
            score -= 20;
          }
        }
      }

      // Bonus for must-see if first-timer
      if (prefs.travelerType === "first-timer" && dest.tags.includes("must-see")) {
        score += 10;
      }

      // Bonus for hidden gems if culture-buff
      if (profile.includeHiddenGems && dest.tags.includes("hidden-gem")) {
        score += 5;
      }

      // Adjust based on follow-up answers
      const interest = prefs.answers.interest;
      if (interest && interest !== "all") {
        if (dest.tags.includes(interest) || dest.type === interest) {
          score += 8;
        }
      }

      // Budget backpacker: boost free/cheap items
      if (prefs.travelerType === "budget-backpacker") {
        if (dest.tags.includes("free") || dest.tags.includes("cheap")) {
          score += 8;
        }
      }

      // Business: boost evening-friendly and upscale
      if (prefs.travelerType === "business") {
        if (dest.tags.includes("upscale") || dest.tags.includes("fine-dining")) {
          score += 8;
        }
      }

      // Foodie: boost based on adventurousness
      if (prefs.travelerType === "foodie") {
        const adventurousness = prefs.answers.adventurousness;
        if (adventurousness === "street-food" && dest.tags.includes("street-food")) {
          score += 8;
        }
        if (adventurousness === "fine-dining" && dest.tags.includes("upscale")) {
          score += 8;
        }
        if (adventurousness === "mix" && dest.type === "food") {
          score += 5;
        }
      }

      const whyPickedForYou =
        dest.whyPick[prefs.travelerType] ||
        dest.description.slice(0, 150) + "...";

      return {
        ...dest,
        score,
        whyPickedForYou,
        cityName: city.charAt(0).toUpperCase() + city.slice(1),
      } as MatchedDestination;
    });

    allScored = [...allScored, ...scored];
  }

  // Sort by score descending
  allScored.sort((a, b) => b.score - a.score);

  // Ensure variety: don't return all same type
  const maxItems = prefs.city === "both" ? 10 : profile.maxItems;
  const result: MatchedDestination[] = [];
  const typeCount: Record<string, number> = {};

  for (const dest of allScored) {
    const typeKey = dest.type;
    typeCount[typeKey] = (typeCount[typeKey] || 0) + 1;

    // Allow max 3 of same type to ensure variety
    if (typeCount[typeKey] <= 3) {
      result.push(dest);
    }

    if (result.length >= maxItems) break;
  }

  // If we have fewer items than target, fill from remaining
  if (result.length < maxItems) {
    for (const dest of allScored) {
      if (!result.find((r) => r.id === dest.id)) {
        result.push(dest);
        if (result.length >= maxItems) break;
      }
    }
  }

  // Adjust for days: fewer days = fewer items
  const days = prefs.answers.days;
  if (days === "1-2") {
    return result.slice(0, Math.min(4, result.length));
  }
  if (days === "3-4") {
    return result.slice(0, Math.min(6, result.length));
  }

  return result;
}

export function getDestinationBySlug(
  city: string,
  slug: string
): Destination | null {
  const cityDestinations = destinations[city];
  if (!cityDestinations) return null;
  return cityDestinations.find((d) => d.id === slug) || null;
}

export function getNearbyDestinations(
  city: string,
  currentId: string,
  limit = 3
): Destination[] {
  const cityDestinations = destinations[city];
  if (!cityDestinations) return [];
  return cityDestinations
    .filter((d) => d.id !== currentId)
    .slice(0, limit);
}

export function getAllDestinations(): { city: string; destinations: Destination[] }[] {
  return Object.entries(destinations).map(([city, dests]) => ({
    city,
    destinations: dests,
  }));
}
