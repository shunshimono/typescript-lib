export {};

// const echo = (age: number) => {
//   return age;
// };

// const echo = (age: string) => {
//   return age;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>("hello"));
console.log(echo<boolean>(true));

class Mirrot<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirrot<number>(123).echo());
console.log(new Mirrot<string>("shimono").echo());
