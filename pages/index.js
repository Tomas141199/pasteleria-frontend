import Layout from "./../components/Layout";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <Layout>
      <div className="mt-10 container mx-auto flex md:flex-row-reverse flex-col gap-4 text-center">
        <div className="w-2/4">
          <h1 className="text-2xl font-logo">Bienvenido a LePats</h1>
          <h3 className="font-heading text-3xl mt-2">Desde 1999 en Puebla</h3>
          <p className="mt-2 text-sm text-slate-500 w-3/4 mx-auto">
            Aliqua ullamco laboris aliquip culpa ipsum aute Lorem aute cillum
            in. Nisi excepteur deserunt anim velit. Minim reprehenderit eu
            laboris duis adipisicing adipisicing magna anim.
          </p>
        </div>
        <Fade>
          <div className="w-2/4 relative">
            <div className="absolute left-20">
              <Image
                src="/images/postre1.jpg"
                width={250}
                height={250}
                alt="postre1"
              />
            </div>
            <div className="absolute top-10 right-20">
              <Image
                src="/images/postre2.jpg"
                width={250}
                height={250}
                alt="postre1"
              />
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  );
}
