export {};

interface profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: profile = { name: "hum", underTwenty: false };

profile.name = "hum";
profile.age = 43;
