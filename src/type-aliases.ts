export {};

type Mojiretsu = string;

const foo: string = "hello";

const foo1: Mojiretsu = "hello";

const example1 = {
  name: "shun",
  age: 24,
};

type proFilte = {
  name: string;
  age: number;
};

const example2: proFilte = {
  name: "shun",
  age: 24,
};

type proFilte2 = typeof example2;
