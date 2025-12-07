import { GoogleGenAI, Modality } from "@google/genai";

export const generatePronunciation = async (text: string): Promise<string | undefined> => {
  try {
    const apiKey = process.env.API_KEY;
    
    // Fail gracefully if no API Key is provided (common on static GitHub Pages demos)
    if (!apiKey) {
      console.warn("API Key is missing. Pronunciation feature is disabled.");
      alert("Vui lòng cấu hình API_KEY để sử dụng tính năng đọc.");
      return undefined;
    }

    // Initialize client only when needed
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // Using English IUPAC name for standard pronunciation
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Zephyr' }, // Clear, educational voice
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    return base64Audio;
  } catch (error) {
    console.error("Error generating pronunciation:", error);
    throw error;
  }
};