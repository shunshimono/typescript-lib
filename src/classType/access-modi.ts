export {};

class Person {
  public name: string;
  protected age: number;
  protected nationality: string;
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile() {
    return `name:${this.name}, age:${this.age}, nationality:${this.nationality}`;
  }
}
let taro = new Person("Taro", 30, "Japan");
console.log(taro.name);
console.log(taro.profile());

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name:${this.name}, age:${this.age}, nationality:${this.nationality}`;
  }
}

let shun = new Person("Shun", 24, "Japan");
console.log(shun.name === "ss");
console.log(shun.profile());
