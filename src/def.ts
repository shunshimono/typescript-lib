export {};

//ある型を除外したい

type MyExclude<T> = T extends string | number ? never : T;
type MyExtract<T, U> = T extends U ? T : never;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionTYpe = MyExclude<SomeTypes>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

// 定義元
//! Sometypesの中のからstring型,number型を除外した型を定義することができる
type MyExclude1<T, S> = T extends S ? never : T;
type MyFunctionType1 = MyExclude1<SomeTypes, string | number>;

// 分解1
type MyExclude2<T> = T extends string | number ? never : T;
type MyFunctionType2 = MyExclude2<SomeTypes>;

// 分解2
// Tで渡した型の分だけ展開される
type MyExclude3 =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);

// 分解3
// 評価結果
type MyExclude4 = never | never | DebugType;
