export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// Mapped types

interface User {
  name: string;
  age: number;
}

// keyof Userを使うことにより、Userの「name」|「age」をtype UserKeyに使うことができる

type UserKey = keyof User;

const sample1: UserKey = "name";
const sample2: UserKey = "age";

// 型[型の中のキー名]をすることにより、その中の型をtype　独自型に代入することができる
type UserName = User["name"];
type UserAge = User["age"];
const sample3: UserName = "shun";
const sample4: UserAge = 24;

//! 応用
type Sample<T> = { [P in keyof T]?: T[P] };

type SampleUser = Sample<User>;
