export {};

const fn = (): number => 24;

let num: any = fn();
let numKno: unknown = fn();

let sum = num + 10;
if (typeof numKno === "number") {
  let sumKno = numKno + 10;
}
