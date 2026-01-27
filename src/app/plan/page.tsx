"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TravelerType, City, QuestionnaireState } from "@/lib/types";
import { travelerTypes, getFollowUpQuestions } from "@/lib/questions";
import { trackEvent } from "@/lib/analytics";

export default function PlanPage() {
  const router = useRouter();
  const [state, setState] = useState<QuestionnaireState>({
    step: 1,
    travelerType: null,
    city: null,
    answers: {},
    hasVPN: null,
  });

  const followUpQuestions = state.travelerType
    ? getFollowUpQuestions(state.travelerType)
    : [];
  const totalSteps = 2 + followUpQuestions.length; // type + city + follow-ups
  const currentFollowUpIndex = state.step - 3; // starts at step 3

  function selectTravelerType(type: TravelerType) {
    setState((s) => ({ ...s, travelerType: type, step: 2 }));
    trackEvent("questionnaire_step", { step: "traveler_type", value: type });
  }

  function selectCity(city: City) {
    setState((s) => ({ ...s, city, step: 3 }));
    trackEvent("questionnaire_step", { step: "city", value: city });
  }

  function answerFollowUp(questionId: string, value: string) {
    const newAnswers = { ...state.answers, [questionId]: value };
    let newHasVPN = state.hasVPN;

    if (questionId === "vpn") {
      newHasVPN = value === "yes";
    }

    const nextStep = state.step + 1;

    if (currentFollowUpIndex + 1 >= followUpQuestions.length) {
      // All questions answered - navigate to itinerary
      trackEvent("questionnaire_complete", {
        traveler_type: state.travelerType!,
        city: state.city!,
      });

      const params = new URLSearchParams({
        type: state.travelerType!,
        city: state.city!,
        vpn: String(newHasVPN ?? false),
        ...newAnswers,
      });

      const sessionId = Date.now().toString(36);
      router.push(`/itinerary/${sessionId}?${params.toString()}`);
    } else {
      setState((s) => ({
        ...s,
        answers: newAnswers,
        hasVPN: newHasVPN,
        step: nextStep,
      }));
    }
  }

  function goBack() {
    if (state.step <= 1) return;
    setState((s) => ({ ...s, step: s.step - 1 }));
  }

  return (
    <div className="min-h-[80vh] bg-gray-50">
      <div className="section-container py-8 md:py-16">
        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              Step {state.step} of {totalSteps}
            </span>
            {state.step > 1 && (
              <button
                onClick={goBack}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                &larr; Back
              </button>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(state.step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Traveler Type */}
        {state.step === 1 && (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
              What kind of traveler are you?
            </h1>
            <p className="text-gray-600 text-center mb-8">
              This helps us personalize your recommendations.
            </p>

            <div className="grid gap-3">
              {travelerTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => selectTravelerType(type.id)}
                  className="flex items-center gap-4 p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all text-left group"
                >
                  <span className="text-3xl">{type.emoji}</span>
                  <div>
                    <div className="font-bold text-lg group-hover:text-primary-600">
                      {type.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {type.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: City Selection */}
        {state.step === 2 && (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Which city are you visiting?
            </h1>
            <p className="text-gray-600 text-center mb-8">
              We&apos;ll tailor recommendations to your destination.
            </p>

            <div className="grid gap-3">
              {[
                {
                  id: "beijing" as City,
                  emoji: "🏯",
                  label: "Beijing",
                  desc: "Imperial palaces, Great Wall, hutongs, and Peking duck",
                },
                {
                  id: "shanghai" as City,
                  emoji: "🌆",
                  label: "Shanghai",
                  desc: "The Bund, French Concession, skyline views, and soup dumplings",
                },
                {
                  id: "both" as City,
                  emoji: "🇨🇳",
                  label: "Both Cities",
                  desc: "Combined itinerary with the best of Beijing and Shanghai",
                },
              ].map((city) => (
                <button
                  key={city.id}
                  onClick={() => selectCity(city.id)}
                  className="flex items-center gap-4 p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all text-left group"
                >
                  <span className="text-3xl">{city.emoji}</span>
                  <div>
                    <div className="font-bold text-lg group-hover:text-primary-600">
                      {city.label}
                    </div>
                    <div className="text-sm text-gray-500">{city.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Follow-up Questions */}
        {state.step >= 3 && currentFollowUpIndex < followUpQuestions.length && (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
              {followUpQuestions[currentFollowUpIndex].text}
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Almost there! Help us fine-tune your experience.
            </p>

            <div className="grid gap-3">
              {followUpQuestions[currentFollowUpIndex].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    answerFollowUp(
                      followUpQuestions[currentFollowUpIndex].id,
                      option.value
                    )
                  }
                  className="p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all text-left group"
                >
                  <div className="font-bold text-lg group-hover:text-primary-600">
                    {option.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
