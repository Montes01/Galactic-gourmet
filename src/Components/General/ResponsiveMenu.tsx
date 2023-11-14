import {
    IconHelpOctagon,
  IconHome2,
  IconPhone,
  IconToolsKitchen2,
  IconMenu2 as MenuIcon,
} from "@tabler/icons-react";
import { NavLink } from "./NavLink";
import { MutableRefObject } from "react";

interface Props {
  handleCloseClick: () => void;
  navRef: MutableRefObject<HTMLElement>;
}

export const ResponsiveMenu = ({ handleCloseClick, navRef }: Props) => {
  return (
    <section
      ref={navRef}
      className="absolute z-30 bg-principal translate-x-28 transition-transform duration-200 flex flex-col gap-12 right-0 h-screen max-w-[100vw] w-60"
    >
      <button className="" onClick={handleCloseClick}>
        <MenuIcon />
      </button>
      <nav>
        <ul className="p-5 flex flex-col gap-7 items-start">
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
    </section>
  );
};
