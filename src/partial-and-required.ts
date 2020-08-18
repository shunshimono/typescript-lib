export {};

type Profile = {
  name: string;
  age: number;
};
type Profile2 = {
  name?: string;
  age?: number;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;

// keyofをつけることにより、対象のオブジェクトのプロパティ名を
// ユニオン型( string | number )の文字列型として型を作ることができる
type PropertyTypes = keyof Profile;

const sample: PropertyTypes = "name";
