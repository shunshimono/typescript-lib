/**
 * boolean型
 * 最も基本的なデータ型であり、取る値はtrue/false
 */
let flg: boolean = false || true;

/**
 * number型
 * 2進数8進数10進数16進数までをサポート
 */
let decimal: number = 256;
let hex: number = 0xfff;
let binary: number = 0b000;
let octal: number = 0o123;

/**
 * string型
 * 二重引用符 || 一重引用符 || バッククォート(テンプレートリテラルOK)
 */
let color: string = "red";
let myColor: string = `my color is ${color}`;

/**
 * array型
 * 要素の型とそれに続くブランケット[]を使用 || 基底の型であるArray型を使用
 */
let list: number[] = [1, 2, 3];
let myList: Array<number> = [1, 2, 3];

/**
 * tuple型
 * 配列の要素の型にを指定することが可能
 * 順番まで制約する
 */
let x: [string, number];
x = ["shun", 24];

/**
 * any型
 * 設定されている型チェックをすり抜けることが可能。※非推奨
 */
let whatever: any = 0;
whatever = false;
whatever = "name";

/**
 * unKnow型
 * 代入可能。メゾット利用不可
 */
const certainlyNumbers: unknown[] = ["0"];
certainlyNumbers[0] = 1;

/**
 * void型
 * 型がないことを意味する
 * undefined代入可能
 */
function logger(): void {}
const unusable: void = undefined;

/**
 * null型/undefined型
 */
let u: undefined = undefined;
let n: null = null;

/**
 * never型
 * 発生しない値の型を指定する
 */
function error(): never {
  throw new Error();
}

/**
 * object型
 * 非プリミティブを表す型
 */
let objectBrace: {}; //型制約無効
let objectType: object;

let nameLength: any = "shun";
(nameLength as string).length;
(nameLength as "shun").length;

const action = () => ({ type: "INCREMENT" } as const);

// 右オペランドが評価された後に、右オペランドに代入するので意味がないパターン
let As: any = "shun" as string;
// let As: any

type MyObjectTypes = {
  name: string;
  [K: string]: number | string;
};

const MyObject: MyObjectTypes = {
  name: "shun",
  age: 24,
};

type PersonData = "name" | "age" | "sex";
type Human = {
  [K in PersonData]: string | number;
};

let manData: Human = {
  name: "shun",
  age: 24,
  sex: "men",
};
