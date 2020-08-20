export {};

// Recode<K,T>

type Prefectures = "Tokyo" | "Chiba" | "Osaka" | "Shiga";

type Covid19InfectionInfo = {
  kenji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kenji_name: "東京", confirmed_cases: 1960 },
  Chiba: { kenji_name: "千葉", confirmed_cases: 249 },
  Osaka: { kenji_name: "大阪", confirmed_cases: 2 },
  Shiga: { kenji_name: "滋賀", confirmed_cases: 4 },
};
