import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import {
  IconHome2,
  IconPhone,
  IconHelpOctagon,
  IconSoup,
  IconToolsKitchen2,
  IconMenu2 as MenuIcon,
} from "@tabler/icons-react";
import { useState, useRef } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
export const Header = () => {
  const navRef = useRef<any>();
  const [isMenuShowed, setIsMenuShowed] = useState(false);

  const handleClick = () => {
    setIsMenuShowed(true);
    setTimeout(() => {
      navRef.current!!.style.transform = "translateX(0%)";
    }, 1);
  };
  const handleCloseClick = () => {
    navRef.current!!.style.transform = "translateX(100%)";
    setTimeout(() => {
      setIsMenuShowed(false);
    }, 200);
  };
  return (
    <>
      <header className="small:gap-7 px-8 py-5 bg-[#252525] flex w-full items-center justify-between">
        <nav className="medium:hidden">
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
          <IconSoup className="h-full " />
          <Link
            to="/"
            role="banner"
            className="small:text-xl select-none bg-clip-text bg-gradient-to-r text-3xl tracking-wide font-normal from-blue-300 to-white text-transparent"
          >
            Galactic Gourmet
          </Link>
        </section>
        <nav className="medium:hidden">
          <ul className="flex items-center justify-end gap-12">
            <NavLink
              className="flex gap-4"
              to="/About"
              content="Nosotros"
              Icon={IconHelpOctagon}
            />
            <NavLink
              className="flex gap-4"
              to="/FoodList/All"
              content="Menu"
              Icon={IconToolsKitchen2}
            />
          </ul>
        </nav>

        <button className="hidden medium:block" onClick={handleClick}>
          <MenuIcon />
        </button>
      </header>
      {isMenuShowed && (
        <ResponsiveMenu navRef={navRef} handleCloseClick={handleCloseClick} />
      )}
    </>
  );
};
