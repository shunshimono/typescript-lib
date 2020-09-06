interface App {
  name: string;
  age: number;
}

interface myApp<P> extends App {
  baz: number;
  foo: P;
}
const sample: myApp<number> = {
  name: "shun",
  age: 24,
  baz: 0,
  foo: 1,
};
