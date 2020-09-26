/**
 * Intersection Types(交差型)
 * 複数の型を一つの型に結合することが可能 &で表現
 */
type Doc = {
  tail: string;
  bark: () => void;
};

type Bird = {
  wing: string;
  fly: () => void;
};

type Chimera = Doc & Bird;

const myChimera: Chimera = {
  tail: "Tail",
  wing: "Wing",
  bark: () => {},
  fly: () => {},
};

/**
 * Union Types(共有体)
 * 複数の型をうち一つが成立するばOK |で表現
 */

let value: string | number | boolean;
value = "1";
value = 1;
value = false;

let numberOrString: (string | number)[];
numberOrString = [1, "1"];

/**
 * Literal Types(文字列リテラル)
 * 複数の型をうち一つが成立するばOK |で表現
 */
