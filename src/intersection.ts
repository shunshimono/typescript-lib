export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  BattingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  BattingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   BattingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 154,
  BattingAverage: 0.367,
};
