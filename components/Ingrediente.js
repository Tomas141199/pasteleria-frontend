import Image from "next/image";
import Link from "next/link";

const Ingrediente = ({ingrediente}) => {
  const {nombre,img}=ingrediente.attributes;
  return (
    <Link href={`/categoria-producto/${ingrediente.id}`}>
      <div className="relative ingredient cursor-pointer mt-2 flex justify-around items-center text-xs">
        <div className="flex items-center gap-1">
          <div className="ingredient-image duration-300 ease-in-out relative rounded-full h-10 w-10 flex justify-center border-2 border-slate-300">
            <Image
              src={`http://localhost:1337${img.data.attributes.url}`} 
              height={50}
              width={50}
              className="rounded-full"
              alt="image"
            />
          </div>
          <span>{nombre}</span>
        </div>
        <div className="pill duration-300 ease-in-out border-2 text-slate-400 w-8 mx-auto flex justify-center rounded-full">
          4
        </div>
      </div>
    </Link>
  );
};


export default Ingrediente;
