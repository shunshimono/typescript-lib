export {};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce((acc: number, cur: number): number => {
    return acc + cur;
  }, 0);
};

console.log(sum(1, 2, 3, 4, 5));
