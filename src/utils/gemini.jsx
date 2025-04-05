import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

export default ai;
