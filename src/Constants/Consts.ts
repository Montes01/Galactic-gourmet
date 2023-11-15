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

export const Social = {
  Instagram:
    "https://instagram.com/galactico_gourmet?igshid=MWFvNnlvY3o3cmw2Mg==",
  Gmail: "galacticogourmet@gmail.com",
  Facebook: "https://www.facebook.com/profile.php?id=61553501942324",
  Whatsapp: "https://wa.me/message/2TGHP3BK3T2FG1",
};

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
    description: `1. Caldo de verduras
    2. Fideos de sopa (preferiblemente finos)
    3. Variedad de verduras para la sopa (zanahorias, espinacas, brócoli, champiñones, col rizada, etc.)
    4. Aceite de oliva
    5. Sal y pimienta al gusto
    6. Especias opcionales (como cúrcuma para color amarillo o espirulina para color verde)
    7. Leche de coco o crema de coco para un toque de cremosidad (opcional)
    `,
    price: 20000,
    image: ImagePath("entradas", "sopa-de-nebulosa.jpg"),
    category: "Entrada",
  },
  {
    title: "Alien eggs benedict",
    description: `1. Huevos (cantidad según la preferencia)
    2. Agua
    3. Vinagre (opcional, para ayudar a mantener la forma de los huevos)
    
    Para los muffins ingleses:
    4. Muffins ingleses (caseros o comprados)
    5. Mantequilla (para tostar los muffins)
    
    Para la salsa holandesa verde:
    6. Yemas de huevo (2-3 yemas)
    7. Mantequilla derretida (aproximadamente 1 taza)
    8. Jugo de limón (1-2 cucharadas)
    9. Espinacas o cilantro fresco (un puñado, para dar color y sabor verde)
    10. Sal y pimienta al gusto
    `,
    price: 35000,
    image: ImagePath("entradas", "alien-eggs-benedict.jpg"),
    category: "Entrada",
  },
  //platos fuertes

  {
    title: "Pasta alienigena",
    description: `Para las albóndigas:
    1. Carne molida (mezcla de res y cerdo o la de tu preferencia)
    2. Pan rallado
    3. Huevo
    4. Cebolla finamente picada
    5. Ajo picado
    6. Perejil fresco picado
    7. Sal y pimienta al gusto
    8. Queso parmesano rallado (opcional)
    9. Aceite para freír las albóndigas
    
    Para la pasta:
    10. Pasta de tu elección (espaguetis, penne, fusilli, etc.)
    11. Agua para cocinar la pasta
    12. Sal para sazonar el agua de cocción
    
    Para la salsa de colores:
    13. Tomates maduros (para la salsa roja)
    14. Tomatillos (para la salsa verde)
    15. Crema o leche (para la salsa blanca)
    16. Aceite de oliva
    17. Ajo
    18. Hierbas frescas como albahaca, perejil o cilantro
    19. Sal y pimienta al gusto
    
    `,
    price: 37000,
    image: ImagePath("platos-fuertes", "pasta-alienigena.jpg"),
    category: "Plato-fuerte",
  },
  {
    title: "Plato de la casa",
    description: `1. Papas (preferiblemente variedad de papas para horno, como papas rojas o papas russet)
    2. Zanahorias
    3. Calabacines
    4. Pimientos (rojos, amarillos o verdes)
    5. Brócoli
    6. Champiñones
    7. Aceite de oliva
    8. Ajo picado
    9. Hierbas secas (tomillo, romero, orégano)
    10. Sal y pimienta al gusto
    11. Queso rallado (opcional, para gratinar)
    `,
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
    description: `
    1. 2 tazas de harina de trigo
    2. 1/2 taza de cacao en polvo
    3. 1 cucharadita de bicarbonato de sodio
    4. 1/2 cucharadita de sal
    5. 1 taza de mantequilla (a temperatura ambiente)
    6. 1 taza de azúcar moreno
    7. 1 taza de azúcar blanco
    8. 2 huevos
    9. 2 cucharaditas de extracto de vainilla
    10. 2 tazas de chips de chocolate (pueden ser semidulces o amargos)
    
    `,
    price: 20000,
    image: ImagePath("postres", "galletas-extraterrestres.jpg"),
    category: "Postre",
  },
  {
    title: "Supernova sundae",
    description: `
    Para el helado:
    1. Helado de tu sabor favorito (vainilla, chocolate, fresa, etc.)
    
    Para los toppings (puedes elegir según tus preferencias):
    2. Nueces picadas
    3. Chispas de chocolate
    4. Trozos de galleta
    5. Malvaviscos
    6. Frutas frescas (fresas, plátanos, arándanos, etc.)
    7. Coco rallado
    8. Grageas de colores
    9. Crema batida
    
    Para la salsa de caramelo:
    10. Azúcar
    11. Mantequilla
    12. Crema espesa
    13. Sal (opcional, para hacer una salsa de caramelo salada)
    `,
    price: 35000,
    image: ImagePath("postres", "supernova-sundae.jpg"),
    category: "Postre",
  },

  // bebidas
  {
    title: "Coctel de nebulosa",
    description: `1. 2 oz (60 ml) de vodka
    2. 4 oz (120 ml) de jugo de frutas (puedes elegir entre naranja, piña, arándano, mango, etc.)
    3. 1 oz (30 ml) de licor de naranja (como triple sec, opcional)
    4. 1/2 oz (15 ml) de jarabe de agave o jarabe de azúcar (ajusta según tu preferencia de dulzor)
    5. Hielo
    6. Rodajas de frutas o cítricos para decorar (opcional)
    7. Azúcar o sal para decorar el borde del vaso (opcional)
    
    `,
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
    description: `
    1. 2 oz (60 ml) de vodka
    2. 1 oz (30 ml) de licor de frambuesa
    3. 1/2 oz (15 ml) de jarabe de azúcar (ajusta según tu preferencia de dulzura)
    4. 1/2 oz (15 ml) de jugo de limón fresco
    5. Cubitos de hielo
    6. Frambuesas frescas para decorar (opcional)
    `,
    price: 35000,
    image: ImagePath("bebidas", "marte-tini.jpg"),
    category: "Bebida",
  },
];

/*

*Ingredientes:*

Para los huevos pochados:
1. Huevos (cantidad según la preferencia)
2. Agua
3. Vinagre (opcional, para ayudar a mantener la forma de los huevos)

Para los muffins ingleses:
4. Muffins ingleses (caseros o comprados)
5. Mantequilla (para tostar los muffins)

Para la salsa holandesa verde:
6. Yemas de huevo (2-3 yemas)
7. Mantequilla derretida (aproximadamente 1 taza)
8. Jugo de limón (1-2 cucharadas)
9. Espinacas o cilantro fresco (un puñado, para dar color y sabor verde)
10. Sal y pimienta al gusto




*Ingredientes:*


1. Caldo de verduras
2. Fideos de sopa (preferiblemente finos)
3. Variedad de verduras para la sopa (zanahorias, espinacas, brócoli, champiñones, col rizada, etc.)
4. Aceite de oliva
5. Sal y pimienta al gusto
6. Especias opcionales (como cúrcuma para color amarillo o espirulina para color verde)
7. Leche de coco o crema de coco para un toque de cremosidad (opcional)




*Ingredientes:*

Para las albóndigas:
1. Carne molida (mezcla de res y cerdo o la de tu preferencia)
2. Pan rallado
3. Huevo
4. Cebolla finamente picada
5. Ajo picado
6. Perejil fresco picado
7. Sal y pimienta al gusto
8. Queso parmesano rallado (opcional)
9. Aceite para freír las albóndigas

Para la pasta:
10. Pasta de tu elección (espaguetis, penne, fusilli, etc.)
11. Agua para cocinar la pasta
12. Sal para sazonar el agua de cocción

Para la salsa de colores:
13. Tomates maduros (para la salsa roja)
14. Tomatillos (para la salsa verde)
15. Crema o leche (para la salsa blanca)
16. Aceite de oliva
17. Ajo
18. Hierbas frescas como albahaca, perejil o cilantro
19. Sal y pimienta al gusto

*Ingredientes:*

1. Papas (preferiblemente variedad de papas para horno, como papas rojas o papas russet)
2. Zanahorias
3. Calabacines
4. Pimientos (rojos, amarillos o verdes)
5. Brócoli
6. Champiñones
7. Aceite de oliva
8. Ajo picado
9. Hierbas secas (tomillo, romero, orégano)
10. Sal y pimienta al gusto
11. Queso rallado (opcional, para gratinar)


*Ingredientes:*

Para el helado:
1. Helado de tu sabor favorito (vainilla, chocolate, fresa, etc.)

Para los toppings (puedes elegir según tus preferencias):
2. Nueces picadas
3. Chispas de chocolate
4. Trozos de galleta
5. Malvaviscos
6. Frutas frescas (fresas, plátanos, arándanos, etc.)
7. Coco rallado
8. Grageas de colores
9. Crema batida

Para la salsa de caramelo:
10. Azúcar
11. Mantequilla
12. Crema espesa
13. Sal (opcional, para hacer una salsa de caramelo salada)


*Ingredientes:*

1. 2 tazas de harina de trigo
2. 1/2 taza de cacao en polvo
3. 1 cucharadita de bicarbonato de sodio
4. 1/2 cucharadita de sal
5. 1 taza de mantequilla (a temperatura ambiente)
6. 1 taza de azúcar moreno
7. 1 taza de azúcar blanco
8. 2 huevos
9. 2 cucharaditas de extracto de vainilla
10. 2 tazas de chips de chocolate (pueden ser semidulces o amargos)



*Ingredientes:*

1. 2 oz (60 ml) de vodka
2. 4 oz (120 ml) de jugo de frutas (puedes elegir entre naranja, piña, arándano, mango, etc.)
3. 1 oz (30 ml) de licor de naranja (como triple sec, opcional)
4. 1/2 oz (15 ml) de jarabe de agave o jarabe de azúcar (ajusta según tu preferencia de dulzor)
5. Hielo
6. Rodajas de frutas o cítricos para decorar (opcional)
7. Azúcar o sal para decorar el borde del vaso (opcional)


*Ingredientes:*

1. 2 oz (60 ml) de vodka
2. 1 oz (30 ml) de licor de frambuesa
3. 1/2 oz (15 ml) de jarabe de azúcar (ajusta según tu preferencia de dulzura)
4. 1/2 oz (15 ml) de jugo de limón fresco
5. Cubitos de hielo
6. Frambuesas frescas para decorar (opcional)


*/
