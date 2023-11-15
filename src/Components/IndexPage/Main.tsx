import {
  IconPizza,
  IconPlanet,
  IconGlass,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconX,
  IconBrandGmail,
} from "@tabler/icons-react";
import { ServiceCard } from "../General/Cards/ServiceCard";
import { ImagePart } from "./ImagePart";
import { useRef } from "react";
import { Social } from "../../Constants/Consts";
export const Main = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleClick = () => {
    dialogRef.current?.showModal();
  };
  const handleCloseClick = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className="relative py-40 px-12 small:flex-col small:py-12 small:px-0  w-full flex flex-wrap gap-7 items-center justify-center">
        <ServiceCard
          to="FoodList/All"
          content="Comidas"
          direction="horizontal"
          width="40%"
          height="95px"
          Icon={IconPizza}
        />
        <ServiceCard
          to="/Err"
          content="Lugares"
          direction="horizontal"
          width="40%"
          height="95px"
          Icon={IconPlanet}
        />
        <ServiceCard
          to="FoodList/Bebida"
          content="Bebidas"
          direction="horizontal"
          width="40%"
          height="95px"
          Icon={IconGlass}
        />

        <button
          onClick={handleClick}
          className="text-xl w-[40%] h-[95px] text-white hover:scale-105 transition-transform active:opacity-90 flex items-center justify-start px-5 gap-2 rounded-xl bg-[#252525]"
        >
          <IconBrandInstagram />
          Redes
        </button>
        <ImagePart />
      </div>

      <dialog ref={dialogRef} className="p-12 bg-transparent">
        <section className="flex shadow-[0_0_25px_#fff5] px-12 flex-wrap backdrop-blur-lg items-center justify-center gap-12 bg-zinc-950 p-5 rounded-xl">
          <a
            target="_blank"
            href={Social.Instagram}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandInstagram />
            Instagram
          </a>
          <a
            target="_blank"
            href={Social.Facebook}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandFacebook />
            Facebook
          </a>
          <a
            target="_blank"
            href={Social.Whatsapp}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandWhatsapp />
            Whatsapp
          </a>
          <a
            target="_blank"
            href={Social.Gmail}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandGmail />
            Gmail
          </a>
          <button className="py-2" onClick={handleCloseClick}>
            <IconX />
          </button>
        </section>
      </dialog>
    </>
  );
};
