export {};

//型から型を抽出し、型を作りたい

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, "name">;

// Tにはなんでも指定OK
// KにはTオブジェクトのユニオン型のプロパティ名を継承しているものを指定できる
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type SmallProfile = Omit<DetailedProfile, "weight">;

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
