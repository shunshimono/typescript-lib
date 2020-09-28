export {};
/**
 * Intersection Types(交差型)
 * 複数の型を一つの型に結合することが可能 &で表現
 */
type Doc = {
  tail: string;
  bark: () => void;
};

type Bird = {
  wing: string;
  fly: () => void;
};

type Chimera = Doc & Bird;

const myChimera: Chimera = {
  tail: "Tail",
  wing: "Wing",
  bark: () => {},
  fly: () => {},
};

/**
 * Union Types(共有体)
 * 複数の型をうち一つが成立するばOK |で表現
 */

let value: string | number | boolean;
value = "1";
value = 1;
value = false;

let numberOrString: (string | number)[];
numberOrString = [1, "1"];

/**
 * Literal Types(文字列リテラル)
 * 正確な値の型をしてるすることができる
 */
let myName: "shun";

/**
 * typeof
 * 宣言済み変数の型を取得することが可能
 * 型クエリーを共呼ばれる
 * 型推論と組み合わせた場合のみ有効
 */
let asString: string;
let asValue: typeof asString;

let myObject = { foo: "foo" };
let anotherObject: typeof myObject = { foo: "" };

/**
 * keyof
 * オブジェクトのプロパティ名称を String Literal Types　で取得可能
 */
type someType = {
  foo: string;
  bar: string;
  baz: string;
};

let someKey: keyof someType;

const myObj = {
  foo: "foo",
  bar: "bar",
  baz: "baz",
};

let myObjKey: keyof typeof myObj;

/**
 * アサーション
 * 型の抽象度が低い型に対して、高くすることができる
 */
let someValue: any = "this any value";
let strLength: number = (someValue as string).length;

/**
 * enum
 * 列挙型
 */
enum Direction {
  Up,
  Down, // 1
  Left, // 2
  Right, // 3
}
