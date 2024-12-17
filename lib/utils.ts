import { models } from "./constants";
import { speechRecognitionLanguages } from "./speechRecognitionLanguages";
import { staticChatVoiceList } from "@/constants/audio";
import random from "lodash/random";
import { handleStaticMessage } from "@/lib/chat/messageHandlingUtils";
import { PlayStaticAudioFuncProps } from "./types";

export function isWebview(): boolean {
  if (typeof window === undefined) {
    return false;
  }

  let navigator = window.navigator;

  const standalone = (navigator as any).standalone;
  const userAgent = navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad|macintosh/.test(userAgent);
  const ios_ipad_webview = ios && !safari;

  return ios ? (!standalone && !safari) || ios_ipad_webview : userAgent.includes("wv");
}

export function isBabylonInspectorShowing() {
  return (
    process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    document.getElementById("sceneExplorer")
  );
}

export const isModelValid = (model: string | null): boolean => {
  if (!model) {
    return false;
  }

  if (!Object.keys(models).includes(model)) {
    return false;
  }

  return true;
};

export const isSpeechLangCodeValid = (languageCode: string | null): boolean => {
  if (!languageCode) {
    return false;
  }

  if (!Object.keys(speechRecognitionLanguages).includes(languageCode)) {
    return false;
  }

  return true;
};

export const playRandomStaticAudio = ({
  mainStateDispatch,
  currentSoundRef,
  humanoidRef,
}: PlayStaticAudioFuncProps): void => {
  const index: number = random(0, staticChatVoiceList.length - 1);
  handleStaticMessage(
    staticChatVoiceList[index].text,
    staticChatVoiceList[index].path,
    mainStateDispatch,
    currentSoundRef,
    humanoidRef
  );
};
