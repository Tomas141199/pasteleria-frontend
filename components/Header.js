import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
const Header = () => {
  const [activeClass, setActiveClass] = useState(false);
  return (
    <>
      <div className="w-full h-60 bg-pink-1 relative">
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
        <div className="absolute h-60 top-0 left-1/2 -translate-x-1/2">
          {/* Cake and Circles */}
          <Zoom>
            <div className="relative mx-auto h-60 w-60 rounded-full bg-pink-2">
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-44 w-44 rounded-full bg-pink-3">
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-36 w-36 -translate-x-1/2 rounded-full">
                  <Image
                    src="/images/Trufa-de-chocolate-2.png"
                    alt="image"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </Zoom>
          {/* Text */}
          <Fade left>
            <div className="text-white absolute top-20 -left-10 font-heading font-bold text-xl uppercase">
              Reposteria
            </div>
          </Fade>
          <Fade right>
            <div className="text-white absolute bottom-20 -right-10 font-heading font-bold text-xl uppercase">
              Poblana
            </div>
          </Fade>
        </div>
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
