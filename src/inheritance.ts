export {};

class Animal {
  constructor(public name: string) {}
  run() {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run() {
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("ミッキー").run());
console.log(new Lion("ミにー", 100).run());
