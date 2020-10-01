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
 * Literal Types(リテラル)
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

let someKey: keyof someType; // let someKey: "foo" | "bar" | "baz"

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

//　競合しない
type Test = {};
const Test = {};
namespace Test {
  export interface User {}
}

// オーバーロードしない
interface User {
  name: string;
}
interface User {}

// 型引数ととして受け取ることが可能な値を指定できる
// 初期値の省略は不可能
interface Box<T extends string | number> {
  value: T;
}

// 初期値が振られていれば、型引数を省略可能
// const box0: Box = { value: "test" }; // OK

const box1: Box<string> = { value: "test" }; // OK

// 型 'string' を型 'number' に割り当てることはできません。
// const box2: Box<number> = { value: "test" }; // ERROR

const boxed0 = <T>(props: T) => ({ value: props });
function boxed1<T>(props: T) {
  return {
    value: props,
  };
}

// 型引数を省略しても、型推論の結果を得ることが可能
const myBox0 = boxed0("test");
const myBox1 = boxed0(1);
const myBox2 = boxed0(null);

interface Props {
  amount: number;
}

const boxed2 = <T extends Props>(props: T) => ({
  value: props.amount.toFixed(1),
});

type Str = {
  name: string;
};

/**
 * 1.引数(obj,'name')を受け取りpick関数が呼ばれる
 * 2.型引数のTにobjが入る
 * 3.keyofによりKにTのプロパティのStringLiteralTypesが適用される
 * 4.Kは　name or age or sex　しか受けつかなくなる
 */
const pick = <T, K extends keyof T>(props: T, key: K) => {};

const obj = {
  name: "shun",
  age: 24,
  sex: "men",
};

const value1 = pick(obj, "name");
// shun

interface boo extends Str {
  age: number;
}
const Shun: boo = {
  name: "shun",
  age: 24,
};

// interfaceの継承
interface IPoint2D {
  x: number;
  y: number;
}
interface IPoint3D extends IPoint2D {
  z: number;
}

// typeの継承もどき
type TPoint2D = {
  x: number;
  y: number;
};
type TPoint3D = TPoint2D & {
  z: number;
};

// OK: TypeがInterfaceを継承
type TIPoint3D = IPoint2D & {
  z: number;
};

// OK: InterfaceがTypeを継承
interface ITPoint3D extends TPoint2D {
  z: number;
}

const num: TIPoint3D = {
  x: 1,
  y: 2,
  z: 3,
};

// type IsString<T> = T extends string ? true : false;
// type x = IsString<"test">; //type x = true
// type y = IsString<0>; //type y = false

interface Properties {
  name: string;
  age: number;
  flg: boolean;
}

type IsType<T, U> = {
  [K in keyof T]: T[K] extends U ? true : false;
};

type IsString = IsType<Properties, string>;
// type IsString = {
//   name: true;
//   age: false;
//   flg: false;
// }

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type StringKeys<T> = Filter<T, string>;
// type StringKeys = "name"

type Strings = Pick<Properties, StringKeys<Properties>>;
