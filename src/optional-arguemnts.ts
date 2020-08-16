export {};

let bmi: (weight: number, height: number, print?: boolean) => number = (
  weight: number,
  height: number,
  print?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (print) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.78, 86, true);

//bmi(身長,体重,console.logで出力するかどうか？)
//bmi(1.78,86,true)
//bmi(1.78,86,false)
//bmi(1.78,86)
