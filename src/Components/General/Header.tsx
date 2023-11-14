import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import {
  IconHome2,
  IconPhone,
  IconHelpOctagon,
  IconSoup,
  IconToolsKitchen2
} from "@tabler/icons-react";
export const Header = () => {
  return (
    <header className="px-8 py-5 bg-[#252525] flex w-full items-center justify-between">
      <nav>
        <ul className="flex items-center justify-end gap-12">
          <NavLink
            className="flex gap-4"
            to="/"
            content="Inicio"
            Icon={IconHome2}
          />
          <NavLink
            className="flex gap-4"
            to="/Contact"
            content="Contacto"
            Icon={IconPhone}
          />
        </ul>
      </nav>
      <section className="flex gap-2 items-center">
        <IconSoup className="h-full "/>
        <Link
          to="/"
          role="banner"
          className="select-none bg-clip-text bg-gradient-to-r text-3xl tracking-wide font-normal from-blue-300 to-white text-transparent"
        >
          Galactic Gourmet
        </Link>
      </section>
      <nav>
        <ul className="flex items-center justify-end gap-12">
          <NavLink
            className="flex gap-4"
            to="/About"
            content="Nosotros"
            Icon={IconHelpOctagon}
          />
          <NavLink
            className="flex gap-4"
            to="/FoodList"
            content="Menu"
            Icon={IconToolsKitchen2}
          />
        </ul>
      </nav>
    </header>
  );
};
