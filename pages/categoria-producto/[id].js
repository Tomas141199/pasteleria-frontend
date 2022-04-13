import Ingrediente from "../../components/Ingrediente";
import Layout from "../../components/Layout";
import Pastel from "../../components/Pastel";

const PastelCategoria = ({cakes,ingredientes}) => {
    return (
      <Layout>
        <div className="container mx-auto flex gap-2 mt-10">
          <div className="w-1/5 border-y-2 py-4">
            <h2 className="font-heading font-semibold text-md text-slate-700">
              Filtrar por ingrediente
            </h2>
            {ingredientes.map((ingrediente)=>(<Ingrediente ingrediente={ingrediente} />))} 
          </div>
          <div className="w-4/5 grid grid-cols-2 md:grid-cols-3 mb-52">
               {cakes.map((cake)=>(<Pastel cake={cake} />))}           
          </div>
        </div>
      </Layout>
    );
  };
  
  export async function getServerSideProps({query:{id}}){
    const urlp = `${process.env.API_URL}/cakes?filters[ingrediente_id][$eq]=${id}&populate=picture`;
    const urli = `${process.env.API_URL}/ingredientes?populate=img`;
  
    const [resp,resi]  = await Promise.all([fetch(urlp),fetch(urli)]);
    const [cakes,ingredientes]= await Promise.all([resp.json(),resi.json()]);
  
   // const cakes = await res.json();
    console.log(cakes.data);
  
    return{
      props: { cakes:cakes.data, ingredientes:ingredientes.data},
    };
  }

  export default PastelCategoria;