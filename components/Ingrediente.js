import Image from "next/image";

const Ingrediente = () => {
  return (
    <div className="relative ingredient cursor-pointer mt-2 flex justify-around items-center text-xs">
      <div className="flex items-center gap-1">
        <div className="ingredient-image duration-300 ease-in-out relative rounded-full h-10 w-10 flex justify-center border-2 border-slate-300">
          <Image
            src="/images/almendra.jpg"
            height={50}
            width={50}
            className="rounded-full"
            alt="image"
          />
        </div>
        <span>Almendra</span>
      </div>
      <div className="pill duration-300 ease-in-out border-2 text-slate-400 w-8 mx-auto flex justify-center rounded-full">
        4
      </div>
    </div>
  );
};

export default Ingrediente;
