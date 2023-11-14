export type food = {
  title: string;
  description: string;
  price: number;
  image: string;
  category: category;
};

export type category = "Plato-fuerte" | "Entrada" | "Postre" | "Bebida";

export type option<T> = {
  name: string;
  value: T;
};
