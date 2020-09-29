export {};
/**
 * @param {number} value
 * @return {*}
 */
function getFormatValue(value: number | null) {
  if (value === null) return;
  return `${value.toFixed(1)}pt`;
}

type Answer = "top" | "Down";
type User = {
  name: string;
  non: { [K in Answer]: Answer };
};

const user: User = {
  name: "shun",
  non: {
    top: "top",
    Down: "Down",
  },
};

if ("name" in user) {
  console.log(user);
}

class Creature {
  doc() {}
}

class Animal {
  cat() {}
}
class Human {
  person() {}
}

type MyUser = { gender: string; [K: string]: any };
type UserA = MyUser & { name: string };
type UserB = MyUser & { age: number };

function isUser(user: UserA | UserB): user is UserA {
  return user !== undefined;
}

const arr = [1, 2, 3, 4];
console.log(arr.filter((item) => item !== 1));
