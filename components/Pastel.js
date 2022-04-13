import Image from "next/image";
import Link from "next/link";

const Pastel = ({cake}) => {
  const {name,price,description,size,picture}=cake.attributes;
  return (
    <div className="pastel relative duration-300 ease-in-out p-2 text-center mb-4">
      <Image src={`http://localhost:1337${picture.data.attributes.url}`} width={300} height={300} alt="pastel" />
      <h3 className="text-xs font-heading">{name}</h3>
      <span className="text-xs text-yellow-500">${price}</span>

      <div className="details absolute w-full bg-black-op top-1/2 left-0 -translate-y-1/2 p-4 duration-300 origin-bottom ease-in-out scale-y-0">
        <p className="text-xs text-slate-300 w-4/6 mx-auto">
          {description}
        </p>
        <span className="text-xs font-semibold text-slate-100">
          {size}
        </span>
        <Link href={`/pastel/${cake.id}`}>
          <a className="block text-xs font-bold text-white duration-300 ease-in-out bg-yellow-500 w-32 mx-auto mt-2 p-2 rounded hover:bg-yellow-200">
            Comprar pastel
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Pastel;
