import Layout from "../../components/Layout";
import Zoom from "react-img-zoom";
import { Form, Formik, Field, ErrorMessage } from "formik";

const PastelCompra = () => {
  return (
    <Layout>
      <div className="container mx-auto flex gap-2 md:flex-nowrap flex-wrap p-4 items-center">
        <div className="w-full md:w-2/4 mx-auto">
          <Zoom
            img="/images/pastel.jpg"
            zoomScale={2}
            height={600}
            width={600}
            transitionTime={0.4}
          />
        </div>
        <div className="p-8 w-full md:w-2/4 mx-auto">
          <h1 className="text-2xl text-slate-800 font-heading font-semibold">
            Almendra al Kirsh
          </h1>
          <span className="text-yellow-500 font-bold block mt-3">$425.00</span>
          <p className="text-xs mt-4 text-slate-400">
            Pastel de pan de almendras, bañado en licor de cereza.
          </p>
          <span className="block mt-4 font-bold text-xs text-slate-500">
            8 rebanadas aprox.
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
                onSubmit={(values) => console.log(values)}
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

export default PastelCompra;
