export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Shun";
  static lastName: string = "Shimono";
  static work(): string {
    return `Hey, guys!! this is ${this.firstName}！`;
  }
}

// let me = new Me();
// console.log(me);

console.log(Me.work());
