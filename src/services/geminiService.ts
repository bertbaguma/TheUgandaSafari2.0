import { GoogleGenAI, Type } from "@google/genai";

export interface AISuggestion {
  day: number;
  notes: string;
}

// In a Vite project, environment variables are accessed via import.meta.env
// Make sure to create a .env file in your project root with VITE_GEMINI_API_KEY="YOUR_API_KEY"
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export const geminiService = {
  getItinerarySuggestions: async (
    destinationName: string,
    duration: number
  ): Promise<AISuggestion[]> => {
    try {
      if (!apiKey) throw new Error("API Key not found. Please set VITE_GEMINI_API_KEY in your .env file.");
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash-latest",
        contents: `Generate a ${duration}-day itinerary for a trip to ${destinationName}, Uganda. For each day, provide a brief, engaging note (max 30 words) suggesting what to do. Focus on the key experiences.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              itinerary: {
                type: Type.ARRAY,
                description: "The list of daily suggestions for the itinerary.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    day: {
                      type: Type.INTEGER,
                      description: "The day number of the itinerary.",
                    },
                    notes: {
                      type: Type.STRING,
                      description: "A brief, engaging note for the day's activities.",
                    },
                  },
                },
              },
            },
          },
        },
      });

      const jsonText = response.text || "{}";
      const parsed = JSON.parse(jsonText);
      return parsed.itinerary || [];
    } catch (error) {
      console.error("Error fetching AI itinerary suggestions:", error);
      return Array.from({ length: duration }, (_, i) => ({
        day: i + 1,
        notes: `Plan your adventure at ${destinationName}.`
      }));
    }
  },

  getAdminReportSummary: async (
    currentMetrics: Record<string, string | number>,
    previousMetrics: Record<string, string | number> | null,
    dateRangeString: string
  ): Promise<string> => {
     try {
       if (!apiKey) return "API Key missing. Unable to generate summary.";
       const ai = new GoogleGenAI({ apiKey });
       let prompt = `
        You are an expert data analyst for a safari tour platform. 
        Based on the following key metrics for the period "${dateRangeString}", provide a concise, insightful summary (2-3 sentences) of the platform's performance. 
        Highlight the most important trend or takeaway for an administrator. The tone should be professional and informative.

        Current Period Metrics:
        - Total Confirmed Bookings Value (GBV): $${currentMetrics.totalBookings}
        - Total Platform Revenue: $${currentMetrics.platformRevenue}
        - Itineraries in Planning: ${currentMetrics.planningCount}
        - Confirmed Itineraries: ${currentMetrics.confirmedCount}
        - Top Performing Consultant: ${currentMetrics.topConsultantName}
        - Top Destination: ${currentMetrics.topDestinationName}
      `;

      if (previousMetrics) {
        prompt += `
          
Previous Period Metrics:
          - Total Confirmed Bookings Value (GBV): $${previousMetrics.totalBookings}
          - Total Platform Revenue: $${previousMetrics.platformRevenue}
          - Itineraries in Planning: ${previousMetrics.planningCount}
          - Confirmed Itineraries: ${previousMetrics.confirmedCount}

          Crucially, compare the current period to the previous period in your summary. Point out the most significant change (positive or negative) and offer a brief insight into what it might mean.
        `;
      }

      prompt += "
Generate the summary now.";
 
       const response = await ai.models.generateContent({
         model: "gemini-1.5-flash-latest",
         contents: prompt,
       });
 
       return response.text || "Summary unavailable.";
     } catch (error) {
       console.error("Error generating admin report summary:", error);
       return "Reviewing metrics manually is recommended at this time.";
     }
  },

  getConsultantReportSummary: async (
    consultantName: string,
    metrics: {
      planningCount: number;
      pendingCount: number;
      confirmedCount: number;
      totalEarnings: number;
      avgRating: number;
      reviewCount: number;
    },
    dateRangeString: string
  ): Promise<string> => {
    try {
      if (!apiKey) return "API Key missing. Unable to generate summary.";
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
        You are an expert business coach for a safari tour consultant named ${consultantName}. 
        Based on the following key metrics for the period "${dateRangeString}", provide a concise, insightful, and encouraging summary (2-3 sentences) of their performance. 
        Highlight a key strength and suggest one area of focus. The tone should be professional, supportive, and data-driven.

        Current Performance Metrics:
        - Trips in Planning: ${metrics.planningCount}
        - Trips Pending Confirmation: ${metrics.pendingCount}
        - Trips Confirmed/Completed: ${metrics.confirmedCount}
        - Total Estimated Earnings: $${metrics.totalEarnings.toFixed(2)}
        - Average Traveler Rating: ${metrics.avgRating.toFixed(2)} (from ${metrics.reviewCount} reviews)

        Analyze these numbers and generate the summary now.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash-latest",
        contents: prompt,
      });

      return response.text || "Keep up the great work!";
    } catch (error) {
      console.error("Error generating consultant report summary:", error);
      return "Your performance statistics are ready for review below!";
    }
  },
};
