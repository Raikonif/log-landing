import container_svg from "~/images/container.jpg";

function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900" id="home">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-black dark:text-white md:text-5xl xl:text-6xl">
            Soluciones Eficientes <br />
            Para Servicio Logistico
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Bienvenido a nuestro servicio logístico integral, donde conectamos tu carga con destinos
            globales de manera eficiente y segura. Con una amplia red de operaciones aéreas,
            terrestres y marítimas, ofrecemos soluciones completas para tus necesidades de
            transporte de contenedores.
          </p>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src={container_svg} alt="hero image" className="h-[650px]" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
