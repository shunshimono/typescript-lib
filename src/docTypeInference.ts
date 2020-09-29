export {};

/**
 * const let　型推論の違い
 * letはデータ型の型推論が有効で、constはWideningLiteralTypesになる
 */
const user = "shiomno";
let name = "shun";

/**
 * arrayの型推論
 */
const a1 = [1, 0];
const a2 = [1 as 1, 0 as 0]; // asをつけることにより、Literal Typesとなる
let a3 = [1 as 1, 0 as 0];

/**
 * Tupleの型推論
 */
const t1 = [1, 2] as [number, number]; // 値の順序を制約することができる
t1.push(3);

/**
 * Promiseの型推論
 */
const wait = (duration: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${duration}`);
    }, duration);
  });
};

const Async = async () => {
  const message = await wait(1000);
  console.log(message);
};
