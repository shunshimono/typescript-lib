export {};

let foo: any;
let bar: string = "TS";

console.log(typeof foo);

foo = bar;

console.log(typeof foo);

let fooIn: string;
let barIn: number = 1;

// fooIn = barIn;
let fooString: string;
let barString: string = "String";

fooString = barString;

let fooStr: "JS" = "JS";

fooString = fooStr;

let fooNum: number;
let barNum: 1976 = 1976;

fooNum = barNum;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(12, "saku");
