export {};

type Profile = {
  name: string;
  age?: number;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
