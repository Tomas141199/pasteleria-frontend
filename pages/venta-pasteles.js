import Fade from "react-reveal";
import Ingrediente from "../components/Ingrediente";
import Layout from "../components/Layout";
import Pastel from "../components/Pastel";

const VentaPasteles = () => {
  return (
    <Layout>
      <div className="container mx-auto flex gap-2 mt-10">
        <div className="w-1/5 border-y-2 py-4">
          <h2 className="font-heading font-semibold text-md text-slate-700">
            Filtrar por ingrediente
          </h2>

          <Ingrediente />
          <Ingrediente />
          <Ingrediente />
          <Ingrediente />
        </div>
        <div className="w-4/5 grid grid-cols-2 md:grid-cols-3 mb-52">
          <Fade bottom>
            <Pastel />
            <Pastel />
            <Pastel />
            <Pastel />
            <Pastel />
            <Pastel />
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default VentaPasteles;
