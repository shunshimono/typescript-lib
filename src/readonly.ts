export {};

class VisaCard {
  constructor(readonly owner: string) {}
}

let myVisaCard = new VisaCard("shimono");

console.log(myVisaCard);
// myVisaCard.owner = "ベーコン";
