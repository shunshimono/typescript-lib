export {};

namespace japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new japanese.Tokyo.Person("ハムさん");
const meOsaka = new japanese.Osaka.Person("ハムやん");

console.log(me);
console.log(meOsaka);

const michael = new English.Person("Michael", "Joseph", "Jackson");

console.log(michael);
