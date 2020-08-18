type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "hum",
  age: 43,
};

me.age++;

console.log(me);

type PersonalDateType = Readonly<Profile>;

const friend: PersonalDateType = {
  name: "shigeru",
  age: 40,
};

// friend.age++;

let obj = {
  x: 1,
};
