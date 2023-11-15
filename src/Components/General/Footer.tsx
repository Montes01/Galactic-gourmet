import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandGmail,
} from "@tabler/icons-react";
import { Social } from "../../Constants/Consts";

export const Footer = () => {
  return (
    <footer className="flex flex-col flex-grow gap-7 p-10 bg-zinc-900 text-primary-content w-full">
      <aside>
        <p className="font-bold leading-8">
          Galactic Gourment INC. <br />
          Los platos que te llevaran a los platillos
        </p>
        <p>Copyright © 2023 - Todos los derechos reservados</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 place-content-center">
          <a
            target="_blank"
            href={Social.Instagram}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandInstagram />
          </a>
          <a
            target="_blank"
            href={Social.Facebook}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandFacebook />
          </a>
          <a
            target="_blank"
            href={Social.Whatsapp}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandWhatsapp />
          </a>
          <a
            target="_blank"
            href={Social.Gmail}
            className="flex hover:scale-105 hover:bg-zinc-300 hover:text-principal transition duration-300 px-3 py-2 bg-principal rounded-xl text-white gap-3"
          >
            <IconBrandGmail />
          </a>
        </div>
      </nav>
    </footer>
  );
};
