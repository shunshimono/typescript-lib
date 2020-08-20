export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

//　戻り値の型を取得したい

type ReturnTYpeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
