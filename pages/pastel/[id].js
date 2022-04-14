import Layout from "../../components/Layout";
import Zoom from "react-img-zoom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Router from "next/router";

const PastelCompra = ({cake}) => {
  const {name,price,description,size,picture}=cake.attributes;
  
  const Comprado = (values) => {

    const MySwal = withReactContent(Swal)

    Swal.fire({
      title: 'Compra realizada!',
      text: "Tu pastel está en camino",
      html: `<div>
      <h1>Compra realizada</h1>
      <p>Tu pastel está en camino :)</p>
      <h2>Detalles del pedido:</h2>
      <p>Persona que recibe: ${values.nombre}</p>
      <p>Dirección: ${values.direccion}</p>
      <p>Envío: $100</p>
      <p>Total: ${price+100}</p>
    </div>`,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'yey!'
    }).then((result) => {
      if (result.isConfirmed) {
        Router.push("/");
      }
    })


    

  }

  return (
    <Layout>
      <div className="container mx-auto flex gap-2 md:flex-nowrap flex-wrap p-4 items-center">
        <div className="w-full md:w-2/4 mx-auto">
          <Zoom
            img={`http://localhost:1337${picture.data.attributes.url}`}
            zoomScale={2}
            height={600}
            width={600}
            transitionTime={0.4}
          />
        </div>
        <div className="p-8 w-full md:w-2/4 mx-auto">
          <h1 className="text-2xl text-slate-800 font-heading font-semibold">
            {name}
          </h1>
          <span className="text-yellow-500 font-bold block mt-3">${price}</span>
          <p className="text-xs mt-4 text-slate-400">
           {description}
          </p>
          <span className="block mt-4 font-bold text-xs text-slate-500">
            {size}
          </span>
          <div className="border-y-2 mt-8 text-xs">
            <div className="my-4">
              <h3 className="text-slate-800 text-xs font-bold">
                Ingresa los datos de tu compra
              </h3>

              {/* Control y Validacion del formulario con formik y yup */}
              <Formik
                initialValues={{
                  tarjeta: "",
                  nombre: "",
                  fechaexp: "",
                  cv: "",
                  direccion: "",
                }}
                onSubmit={(values) => Comprado(values)}
              >
                <Form className="mt-4">
                  <div className="mb-3">
                    <label htmlFor="tarjeta" className="mb-2 block">
                      Numero de tarjeta
                      <span className="text-red-400">*</span>
                    </label>
                    <Field
                      name="tarjeta"
                      class="block outline outline-offset-2 outline-slate-300 p-2 w-11/12 rounded"
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="tarjeta" className="mb-2 block">
                      Nombre del comprador
                      <span className="text-red-400">*</span>
                    </label>
                    <Field
                      name="nombre"
                      class="block outline outline-offset-2 outline-slate-300 p-2 w-11/12 rounded"
                    />
                  </div>

                  <div className="flex gap-3 mt-4">
                    <div className="mb-2">
                      <label htmlFor="tarjeta" className="mb-2 block">
                        Fecha de vencimiento
                        <span className="text-red-400">*</span>
                      </label>
                      <Field
                        name="fechaexp"
                        className="block outline outline-offset-2 outline-slate-300 p-2 w-11/12 rounded"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="tarjeta" className="mb-2 block">
                        Codigo de seguridad
                        <span className="text-red-400">*</span>
                      </label>
                      <Field
                        name="cv"
                        class="block outline outline-offset-2 outline-slate-300 p-2 w-11/12 rounded"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="tarjeta" className="mb-2 block">
                      Direccion de entrega
                      <span className="text-red-400">*</span>
                    </label>
                    <Field
                      name="direccion"
                      class="block outline outline-offset-2 outline-slate-300 p-2 w-11/12 rounded"
                    />
                  </div>

                  {/* Submit para enviar formulario */}
                  <button
                    type="submit"
                    className="p-3 my-4 rounded bg-green-500 text-white text-xs uppercase font-bold block duration-300 ease-in-out hover:bg-green-200 hover:drop-shadow-md"
                  >
                    Realizar pedido
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({query:{id}}){
  const res= await fetch(`${process.env.API_URL}/cakes/${id}?populate=picture`);

  const cakes = await res.json();
  console.log(cakes.data);

  return{
    props: { cake:cakes.data},
  };
}

export default PastelCompra;
