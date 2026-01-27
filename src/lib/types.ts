export type TravelerType =
  | "budget-backpacker"
  | "foodie"
  | "culture-buff"
  | "first-timer"
  | "business";

export type City = "beijing" | "shanghai" | "both";

export interface Destination {
  id: string;
  name: string;
  type: string;
  description: string;
  timeNeeded: string;
  cost: string;
  bestTime: string;
  coordinates?: { lat: number; lng: number };
  howToGetThere: string;
  hours: string;
  tags: string[];
  bestFor: string[];
  proTips: string[];
  neighborhood: string;
  whyPick: Record<string, string>;
}

export interface UserPreferences {
  travelerType: TravelerType;
  city: City;
  answers: Record<string, string>;
  hasVPN: boolean | null;
}

export interface MatchedDestination extends Destination {
  score: number;
  whyPickedForYou: string;
  cityName: string;
}

export interface QuestionnaireState {
  step: number;
  travelerType: TravelerType | null;
  city: City | null;
  answers: Record<string, string>;
  hasVPN: boolean | null;
}

export interface Question {
  id: string;
  text: string;
  options: { label: string; value: string }[];
}
