export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

class TIger extends Animal {
  cry() {
    return "grrrr";
  }
}
