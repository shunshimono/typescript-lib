export {};

//ある型を除外したい

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

type NullableTypes = string | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

const App: DebugType = () => {
  console.log(1);
};
