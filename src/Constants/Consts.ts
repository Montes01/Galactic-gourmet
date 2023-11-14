import { category, food, option } from "./Types";
export const ImagePath = (
  folder: "entradas" | "bebidas" | "platos-fuertes" | "postres",
  file: `${string}.${string}`
) => `/Images/${folder}/${file}`;

export const categoryFilters: option<category>[] = [
  {
    name: "Entrada",
    value: "Entrada",
  },
  {
    name: "Plato fuerte",
    value: "Plato-fuerte",
  },
  {
    name: "Postre",
    value: "Postre",
  },
  {
    name: "Bebida",
    value: "Bebida",
  },
];

export const AllFilter = "All";

export const OurDescription =
  "Somos un restaurante bastante divertido con una tematica basada en el espacio exterior con unos platos bastante agradables al gusto humano tanto como extraterrestre. Despues de probar nuestra comida parecera que no quieres dejar de probarla nunca";

export const foods: food[] = [
  // entradas
  {
    title: "Chips de plutonio",
    description: "",
    price: 12000,
    image: ImagePath("entradas", "chips-de-plutonio.jpg"),
    category: "Entrada",
  },
  {
    title: "Sopa de nebulosa",
    description: "",
    price: 20000,
    image: ImagePath("entradas", "sopa-de-nebulosa.jpg"),
    category: "Entrada",
  },
  {
    title: "Alien eggs benedict",
    description: "",
    price: 35000,
    image: ImagePath("entradas", "alien-eggs-benedict.jpg"),
    category: "Entrada",
  },
  //platos fuertes

  {
    title: "Pasta alienigena",
    description: "",
    price: 37000,
    image: ImagePath("platos-fuertes", "pasta-alienigena.jpg"),
    category: "Plato-fuerte",
  },
  {
    title: "Plato de la casa",
    description: "",
    price: 22500,
    image: ImagePath("platos-fuertes", "plato-de-la-casa-de-jupiter.jpg"),
    category: "Plato-fuerte",
  },
  {
    title: "Pollo a la plancha de marte",
    description: "",
    price: 35000,
    image: ImagePath("platos-fuertes", "pollo-a-la-plancha-de-marte.jpg"),
    category: "Plato-fuerte",
  },
  //postres

  {
    title: "Crepes de venus",
    description: "",
    price: 12000,
    image: ImagePath("postres", "crepes-de-venus.jpg"),
    category: "Postre",
  },
  {
    title: "Galletas extraterrestres",
    description: "",
    price: 20000,
    image: ImagePath("postres", "galletas-extraterrestres.jpg"),
    category: "Postre",
  },
  {
    title: "Supernova sundae",
    description: "",
    price: 35000,
    image: ImagePath("postres", "supernova-sundae.jpg"),
    category: "Postre",
  },

  // bebidas
  {
    title: "Coctel de nebulosa",
    description: "",
    price: 12000,
    image: ImagePath("bebidas", "coctel-de-nebulosa.jpg"),
    category: "Bebida",
  },
  {
    title: "Limonada de planeta",
    description: "",
    price: 20000,
    image: ImagePath("bebidas", "limonada-de-planeta.jpg"),
    category: "Bebida",
  },
  {
    title: "Marte-tini",
    description: "",
    price: 35000,
    image: ImagePath("bebidas", "marte-tini.jpg"),
    category: "Bebida",
  },
];
