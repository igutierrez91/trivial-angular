export interface Configuration {
  types: Type [];
  categories: Category [];
  difficulty: Difficulty [];
  numberQuestions: number;
}

export interface Type {
  type: Option;
}

export interface Category {
  category: Option;
}

export interface Difficulty {
  difficulty: Option;
}

export interface Option {
  label: string;
  value: string;
}

export interface ConfigurationUser {
  type: string;
  category: string;
  difficulty: string;
  numberQuestions: number;
  time: number;
}
