import camion from "../../assets/imgs/camion.png";

function About() {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 w-full">
          <h2 className="mb-7 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-black md:text-4xl xl:text-4xl dark:text-white">
            Nosotros
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400 text-left">
            Somos más que un simple Freight Forwarder o Operador Logístico; somos un equipo de personas capacitadas y 
            entrenadas para satisfacer las necesidades de nuestros clientes en comercio internacional. 
            Como empresa boliviana de transporte a nivel nacional e internacional, 
            nuestro objetivo es proporcionar soluciones integrales en logística de distribución física hacia y 
            desde los mercados internacionales, coordinando toda la cadena de transporte física y documental. 
            Con una red de agentes en los principales puertos del mundo, nos convertimos en aliados estratégicos 
            para el comercio exterior, facilitando las operaciones y asegurando la satisfacción del cliente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
