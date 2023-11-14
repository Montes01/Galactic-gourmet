import { IconPizza, IconPlanet, IconGlass, IconSocial } from "@tabler/icons-react"
import { ServiceCard } from "../General/Cards/ServiceCard";
import { ImagePart } from "./ImagePart";
export const Main = () => {
  return (
    <div className="relative py-40 px-12  w-full flex flex-wrap gap-7 items-center justify-center">
        <ServiceCard to="FoodList" content="Comidas" direction="horizontal" width="40%" height="95px"  Icon={IconPizza} />
        <ServiceCard content="Lugares" direction="horizontal" width="40%" height="95px" Icon={IconPlanet} />
        <ServiceCard content="Bebidas" direction="horizontal" width="40%" height="95px" Icon={IconGlass} />
        <ServiceCard content="Redes" direction="horizontal" width="40%" height="95px" Icon={IconSocial} />
      <ImagePart />
    </div>
  );
};
