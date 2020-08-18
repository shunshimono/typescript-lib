export {};

interface profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: profile = { name: 1, underTwenty: false };

profile.name = "hum";
profile.age = 43;
