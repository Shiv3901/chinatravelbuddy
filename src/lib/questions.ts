import { TravelerType, Question } from "./types";

export const travelerTypes: {
  id: TravelerType;
  emoji: string;
  label: string;
  description: string;
}[] = [
  {
    id: "budget-backpacker",
    emoji: "🎒",
    label: "Budget Backpacker",
    description: "Maximum experience, minimum spend",
  },
  {
    id: "foodie",
    emoji: "🍜",
    label: "Foodie Explorer",
    description: "Eat your way through China",
  },
  {
    id: "culture-buff",
    emoji: "🏛️",
    label: "Culture & History Buff",
    description: "Deep dive into Chinese civilization",
  },
  {
    id: "first-timer",
    emoji: "✈️",
    label: "First-Time Visitor",
    description: "See the highlights, avoid the pitfalls",
  },
  {
    id: "business",
    emoji: "💼",
    label: "Business Trip + Exploring",
    description: "Make the most of limited free time",
  },
];

export function getFollowUpQuestions(travelerType: TravelerType): Question[] {
  const common: Question[] = [
    {
      id: "days",
      text: "How many days will you spend?",
      options: [
        { label: "1-2 days", value: "1-2" },
        { label: "3-4 days", value: "3-4" },
        { label: "5+ days", value: "5+" },
      ],
    },
  ];

  const typeSpecific: Record<TravelerType, Question[]> = {
    "first-timer": [
      {
        id: "interest",
        text: "What interests you most?",
        options: [
          { label: "Historical sites", value: "historical" },
          { label: "Local food", value: "food" },
          { label: "Nightlife & nightscapes", value: "nightlife" },
          { label: "Shopping & markets", value: "shopping" },
        ],
      },
      {
        id: "vpn",
        text: "Have you set up a VPN for China yet?",
        options: [
          { label: "Yes, I'm all set", value: "yes" },
          { label: "No, not yet", value: "no" },
          { label: "What's a VPN?", value: "no" },
        ],
      },
    ],
    "budget-backpacker": [
      {
        id: "budget",
        text: "What's your daily budget?",
        options: [
          { label: "$20-40", value: "20-40" },
          { label: "$40-70", value: "40-70" },
          { label: "$70-100", value: "70-100" },
        ],
      },
      {
        id: "vpn",
        text: "Have you set up a VPN for China yet?",
        options: [
          { label: "Yes, I'm all set", value: "yes" },
          { label: "No, not yet", value: "no" },
          { label: "What's a VPN?", value: "no" },
        ],
      },
    ],
    foodie: [
      {
        id: "adventurousness",
        text: "How adventurous are you with food?",
        options: [
          { label: "Street food enthusiast", value: "street-food" },
          { label: "Mix of high and low", value: "mix" },
          { label: "Fine dining only", value: "fine-dining" },
        ],
      },
      {
        id: "dietary",
        text: "Any dietary restrictions?",
        options: [
          { label: "None - I'll eat anything", value: "none" },
          { label: "Vegetarian", value: "vegetarian" },
          { label: "Halal", value: "halal" },
          { label: "Other", value: "other" },
        ],
      },
      {
        id: "vpn",
        text: "Have you set up a VPN for China yet?",
        options: [
          { label: "Yes, I'm all set", value: "yes" },
          { label: "No, not yet", value: "no" },
          { label: "What's a VPN?", value: "no" },
        ],
      },
    ],
    "culture-buff": [
      {
        id: "interest",
        text: "What are your main interests?",
        options: [
          { label: "Ancient history", value: "historical" },
          { label: "Modern art", value: "art" },
          { label: "Architecture", value: "architecture" },
          { label: "All of the above", value: "all" },
        ],
      },
      {
        id: "pace",
        text: "What's your preferred pace?",
        options: [
          { label: "Deep dives (fewer places, more time)", value: "deep" },
          { label: "Quick highlights (see more, move fast)", value: "quick" },
        ],
      },
      {
        id: "vpn",
        text: "Have you set up a VPN for China yet?",
        options: [
          { label: "Yes, I'm all set", value: "yes" },
          { label: "No, not yet", value: "no" },
          { label: "What's a VPN?", value: "no" },
        ],
      },
    ],
    business: [
      {
        id: "freeTime",
        text: "How much free time do you have?",
        options: [
          { label: "Evenings only", value: "evenings" },
          { label: "1-2 full days", value: "1-2-days" },
          { label: "Flexible schedule", value: "flexible" },
        ],
      },
      {
        id: "purpose",
        text: "What's the purpose of exploration?",
        options: [
          { label: "Client entertainment", value: "client" },
          { label: "Personal exploration", value: "personal" },
        ],
      },
      {
        id: "vpn",
        text: "Have you set up a VPN for China yet?",
        options: [
          { label: "Yes, I'm all set", value: "yes" },
          { label: "No, not yet", value: "no" },
          { label: "What's a VPN?", value: "no" },
        ],
      },
    ],
  };

  return [...common, ...typeSpecific[travelerType]];
}
