// TypeScriptとは？？
// JavaScriptの暗黙の型変換などに制約をつけることができ、バグの早期発見を実現できるライブラリである。

//! TypeScriptの書き方

//? 基本的な書き方
// 変数名の後に:(セミコロン)を書くことで型を指定することができる。

// 変数名 = 式の場合
const basic: string = "basic";

// 変数名 = アロー関数式の場合
const fun0 = (): void => {};

// 変数名 = 関数式の場合
const fun1 = function (): void {};

// 関数宣言の場合
function fun2(): void {}

// classの場合
class Person {
  constructor(public sample: string) {}
}

//? 独自型の定義方法
// type
// typeを宣言し、識別子を記入し、それを:(セミコロン)の後につけると、独自の型を使うことができる
// = 以降を任意の型で指定する。勿論stringにしてもいい
type newType = {
  age: 14; //numberと書いてもいいし、リテラルで書いてもいい。リテラルで書いた場合は、その値しか許容しない
};
const obj0: newType = { age: 14 };

// interface
// interfaceを宣言し、識別子を記入し、それを:(セミコロン)の後につけると、独自の型を使うことができる
interface newInter {
  age: 24;
}
interface newSt {
  age: number;
}
const obj1: newInter = { age: 24 };

//! typeの型定義はなんでもいいが、interfaceはオブジェクトでないといけない

//? 配列の書き方
const arr0: (object | number)[] = [1, { a: 1 }];

const arr1: Array<string | number> = ["type", "java", 13];

//?　独自型をラッピングする
interface sample {
  age: number;
}
const rap: sample[] = [{ age: 1 }];

//?　配列のインデックス番号まで制約をつけたい

const tup: [string, number] = ["", 1];

//? クラスの規格を決めておきたい。
abstract class Person1 {
  cry() {
    return "aaa";
  }
}

//?不明な型の型付したい
//anyをnumber型として
const unKnow: any = 1;
const know = unKnow as number;

//?　型を引数として扱いたい。返り値の型とか、引数の型とか自由に自由に決めたい場合

const fn1 = <T>(args: T): T => {
  return args;
};

fn1<string>("shun");

//? オブジェクトのプロパティをnumber型かstring型で制約する

interface pro {
  [index: number]: string;
}

const obj2: pro = {
  1: "",
};

//? 使うか使わないかわからないプロパティを定義して型を作りたい場合

interface orizin {
  name?: string;
  age?: number;
}

type maxOrizin = Partial<orizin>;
type requOrizin = Required<orizin>;

const promise = () => {
  return new Promise(() => {
    return 1;
  });
};

// 非常に難しい概念
// ジェネリクス
// 実行時に型を決める事が可能な仕組み
// 「T」に入るのは基本型とオブジェクト型である
//! 配列は型ではないので注意

function Generics0<T>(args: T): T {
  return args;
}
console.log(Generics0<number>(1));
console.log(Generics0<string>("shun"));

//? こういう場合どうする？？
function Generics1<T>(...args: T[]): T[] {
  console.log(args.length);
  return args;
}

Generics1<number>(1, 2, 3);

// 独自型 & <T>型の合わせ技
const arr2: Array<number> = [1];

interface Origin<T> {
  name: T;
}

const shimono: Origin<string> = { name: "shun" };
