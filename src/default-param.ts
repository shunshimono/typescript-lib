export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
