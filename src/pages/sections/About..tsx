import camion from "../../assets/imgs/camion.png";

function About() {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src={camion} alt="hero image" />
        </div>
        <div className="ml-auto place-self-center lg:col-span-7">
          <h2 className="mb-7 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-black md:text-4xl xl:text-4xl dark:text-white">
            ¿Quienes somos?
          </h2>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            En [Nombre de la Compañía], nos especializamos en el desarrollo de software para
            logística, ofreciendo soluciones personalizadas y eficientes. Con un equipo comprometido
            y una atención centrada en el cliente, trabajamos para impulsar el éxito operativo de
            nuestros clientes en la industria de la logística.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
