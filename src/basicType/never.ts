export {};

function error(messagge: string): never {
  throw new Error(messagge);
}
try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error("only");
