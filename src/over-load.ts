export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  return typeof value === "number" ? value * 2 : value + value;
}

console.log(double(100));
console.log(double("GO"));
