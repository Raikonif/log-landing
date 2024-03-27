import serv3 from "~/images/serv3.jpg";
function Storage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden dark:bg-gray-800 py-6 sm:py-12">
      <div className="mx-auto w-full max-w-screen-lg items-center">
        <h2 className="py-6 text-center text-xl font-extrabold dark:text-white lg:text-4xl">
          ALMACENES
        </h2>
        <div className="group grid w-full grid-cols-2">
          <div className="relative flex flex-col items-end overflow-hidden pl-16 before:absolute before:bottom-0 before:left-0 before:block before:h-1/6 before:w-4 before:rounded-lg  before:bg-blue-500 before:transition-all group-hover:before:bg-orange-300">
            <div className="overflow-hidden rounded-xl">
              <img src={serv3} alt="" className="h-[400px] w-[800px] object-cover" />
            </div>
          </div>
          <div>
            <div className="pl-12">
              <p className="peer mb-6 text-gray-600">
                Almacena tu mercadería con total seguridad. Nuestro servicio de almacenes te ofrece
                espacios confiables y bien equipados para resguardar tus productos. Maximiza la
                eficiencia en tu cadena de suministro y asegura la integridad de tu inventario.
                Contáctanos y descubre cómo nuestros almacenes pueden satisfacer todas tus
                necesidades de almacenamiento.
              </p>
              <p className="mb-6 text-gray-600">
                We also provide tailored Air Conditioning installation packages. The Air
                Conditioning systems we install are all inverter driven therefor are energy
                efficient, stylish & silent both providing cooling and heating. At Zero Degree AC
                Limited we only use the best brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storage;
