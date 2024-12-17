import { StaticChatVoice } from "@/lib/types";
// file path for static offline audio played on chat
export const goodMorning: StaticChatVoice = { path: "/audio/good-morning.wav", text: "おはよう" };
export const canYouHearMe: StaticChatVoice = {
  path: "/audio/can-you-hear-me.wav",
  text: "聞こえているのか",
};
export const concentrationPeak: StaticChatVoice = {
  path: "/audio/concentration-peak.wav",
  text: "知ってるか？1日の集中力のピークは90分ごとに訪れるから、定期的に5〜10分の休憩を挟んだほうが効率が上がるらしいぞ。",
};
export const goHomeEarly: StaticChatVoice = {
  path: "/audio/go-home-early.wav",
  text: "俺が若い頃は、上司より先に帰るなんてありえなかったし、帰る時も『お先に失礼します』じゃなくて、『仕事残っててすみません』って言うのが当たり前だったぞ。",
};
export const iKnowYourWork: StaticChatVoice = {
  path: "/audio/I-know-your-work.wav",
  text: "お前が頑張ってるのはちゃんと見てるぞ。でもな、ここをもう一踏ん張りすれば、お前はもっと成長できるし、周りも認めてくれるようになるからさ。",
};
export const knowledgeDopa: StaticChatVoice = {
  path: "/audio/knowledge-dopa.wav",
  text: "知ってるか？人間、褒められると脳内でドーパミンが出てやる気が上がるんだってさ。だからお前、今日も褒めてやるよ。……まぁ、次はもっと結果出せよな。",
};
export const noWifi: StaticChatVoice = {
  path: "/audio/no-wifi.wav",
  text: "俺が若い頃は、Wi-Fiなんてなくて、電波は親父の機嫌で飛んでたよ。",
};
export const oiWakeUp: StaticChatVoice = { path: "/audio/oi-wake-up.wav", text: "おい!起きろ!" };
export const oi: StaticChatVoice = { path: "/audio/oi.wav", text: "おい" };
export const wantBreak: StaticChatVoice = {
  path: "/audio/want-break.wav",
  text: "休みたい？じゃあ有給使っていいぞ。ただし、俺の心の中では減点だからな。",
};
export const whatAreYouDoing: StaticChatVoice = {
  path: "/audio/what-are-you-doing.wav",
  text: "何してるんだ",
};
export const workProperly: StaticChatVoice = {
  path: "/audio/work-properly.wav",
  text: "ちゃんと仕事しろ",
};
export const youDoingWell: StaticChatVoice = {
  path: "/audio/you-doing-well.wav",
  text: "最近お前、よくやってるよ。この調子で続けていけば、もっと大きな仕事任せられるかもしれないな。期待してるぞ。",
};

export const staticChatVoiceList: StaticChatVoice[] = [
  goodMorning,
  canYouHearMe,
  concentrationPeak,
  goHomeEarly,
  iKnowYourWork,
  knowledgeDopa,
  noWifi,
  oiWakeUp,
  oi,
  wantBreak,
  whatAreYouDoing,
  workProperly,
  youDoingWell,
];
