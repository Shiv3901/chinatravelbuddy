import Link from "next/link";
import { MatchedDestination } from "@/lib/types";

const typeEmojis: Record<string, string> = {
  historical: "🏛️",
  culture: "🎨",
  neighborhood: "🏘️",
  religious: "🛕",
  outdoor: "🌳",
  food: "🍜",
  landmark: "🌆",
  garden: "🌿",
  viewpoint: "🔭",
  museum: "🖼️",
  park: "🌳",
};

export default function DestinationCard({
  destination,
  index,
}: {
  destination: MatchedDestination;
  index: number;
}) {
  const emoji = typeEmojis[destination.type] || "📍";

  return (
    <div className="card mb-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-lg">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {emoji} {destination.name}
          </h3>
          {destination.cityName && (
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-2 py-0.5 rounded mb-2">
              {destination.cityName}
            </span>
          )}
          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
            <span>⏱️ {destination.timeNeeded}</span>
            <span>💰 {destination.cost}</span>
            <span>🌅 Best: {destination.bestTime}</span>
          </div>

          <div className="bg-accent-50 border border-accent-200 rounded-lg p-3 mb-3">
            <p className="text-sm font-medium text-accent-700 mb-1">
              Why we picked this for you:
            </p>
            <p className="text-sm text-accent-800">
              {destination.whyPickedForYou}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={`/destination/${destination.cityName.toLowerCase()}/${destination.id}`}
              className="btn-secondary !py-2 !px-4 text-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
