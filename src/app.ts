// interface App {
//   name: string;
//   age: number;
// }

// interface myApp<P> extends App {
//   baz: number;
//   foo: P;
// }
// const sample: myApp<number> = {
//   name: "shun",
//   age: 24,
//   baz: 0,
//   foo: 1,
// };

export {};

type A = {
  hoge: string;
  piyo: number;
};

let o1: A;

const o2 = { hoge: "", piyo: 123, foo: "foo" };

o1 = o2; // OK
