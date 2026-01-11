import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || ''; // We will need to set this env var later
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateItinerarySuggestion = async (preferences: string) => {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing. Returning mock data.");
    return "This is a mock itinerary suggestion because the API key is missing.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Create a 5-day Uganda safari itinerary focusing on: ${preferences}. Format it as a JSON list of days with title and description.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Failed to generate suggestion.";
  }
};

export const analyzeConsultantPerformance = async (metrics: any) => {
   // Logic for the AI Business Coach
   return "Keep up the good work! Your conversion rate is improving.";
};
