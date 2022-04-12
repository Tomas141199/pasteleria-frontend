import Link from "next/link";

import Fade from "react-reveal/Fade";
import { useState } from "react";
import Hero from "./Hero";
import Heading from "./Heading";
import { useRouter } from "next/router";

const Header = ({ inicio }) => {
  const [activeClass, setActiveClass] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={`header ${inicio} w-full relative`}>
        {/* Navbar */}
        <nav className="relative z-10 flex justify-around items-center px-2 py-4">
          {/* Hamburguer  */}
          <div
            className="menu cursor-pointer flex items-center gap-1"
            onClick={() => setActiveClass(true)}
          >
            <button className="hamburguer cursor-pointer w-6 block">
              <div className="bar"></div>
            </button>
            <span className="text-xs text-slate-700 duration-300">Menu</span>
          </div>

          {/* Logo */}
          <Link href="/">
            <a className="font-logo font-bold text-3xl">LePats</a>
          </Link>

          <Link href="/solodiossabe">
            <a className="text-xs text-slate-700">Idk</a>
          </Link>
        </nav>

        {/* Hero Content */}
        {/* Solo aparece si se encuentra en la pagina de inicio */}
        {inicio ? (
          <Hero />
        ) : router.pathname === "/venta-pasteles" ? (
          <Heading text="Pasteles" />
        ) : (
          <Heading text="checkout" />
        )}
      </div>
      <div
        className={`menu-nav ${activeClass} duration-300 ease-in-out opacity-0 hidden absolute  z-50 top-0 w-full h-screen bg-black-op`}
      >
        <nav className="relative flex flex-col items-center text-white font-heading text-3xl gap-4 p-10 mt-12 font-bold">
          <button
            onClick={() => setActiveClass(false)}
            className="duration-300 ease-in-out font-['arial'] absolute -top-8 right-10 hover:rotate-45"
          >
            x
          </button>
          <Fade bottom>
            <Link href="/">
              <a className="duration-300 ease-in-out hover:text-slate-300">
                Inicio
              </a>
            </Link>
          </Fade>
          <Fade bottom>
            <Link href="/venta-pasteles">
              <a className="duration-300 ease-in-out hover:text-slate-300">
                Venta de pasteles
              </a>
            </Link>
          </Fade>
        </nav>
      </div>
    </>
  );
};

export default Header;
