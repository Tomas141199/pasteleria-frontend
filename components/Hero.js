import Image from "next/image";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
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
  );
};

export default Hero;
