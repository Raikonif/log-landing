import { useNavigate } from "react-router-dom";
import serv1 from "~/images/serv1.jpg";
import serv2 from "~/images/serv2.jpg";
import serv3 from "~/images/serv3.jpg";
import serv4 from "~/images/serv4.jpg";
import serv6 from "~/images/serv6.jpeg";
import serv7 from "~/images/serv7.jpg";
import serv8 from "~/images/serv8.jpg";

function DescriptionSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-12 lg:px-6 lg:py-24">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Nuestros Servicios
        </h2>
        <p className="mb-8 font-light dark:text-gray-400 lg:text-2xl">
          Proyectos de Carga, Verificador de Proveedores, Almacenes, Seguro de Transporte de Carga,
          Proyectos y Eventos, Multimodal Terrestre, entre otros, consulta por nuestros servicios.
        </p>
        <div className="items-center gap-8 lg:grid lg:grid-cols-3 xl:gap-16">
          {/* <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Proyectos de Carga
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Verificador de Proveedores
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Almacenes
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Entregamos un servicio de calidad, rápido y seguro, sin la complejidad de las
              soluciones tradicionales.
            </p>
          </div> */}
          <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="mx-6 my-4 flex flex-col">
              <h3 className="text-2xl font-semibold">Proyectos de Carga</h3>
            </div>
            <div className="flex flex-col">
              <img src={serv1} alt="serv1" className="h-[250px] object-cover" />
              <button
                onClick={() => navigate("projects")}
                className="w-full  bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white  dark:focus:ring-purple-900"
              >
                Leer más
              </button>
            </div>
          </div>
          <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="mx-6 my-4 flex flex-col">
              <h3 className="text-2xl font-semibold">Verificador de Proveedores</h3>
            </div>
            <div className="flex flex-col">
              <img src={serv2} alt="serv1" className="h-[250px] object-cover" />
              <button
                onClick={() => navigate("verifier")}
                className="w-full  bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white  dark:focus:ring-purple-900"
              >
                Leer más
              </button>
            </div>
          </div>
          <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="mx-6 my-4 flex flex-col">
              <h3 className="text-2xl font-semibold">Almacenes</h3>
            </div>
            <div className="flex flex-col">
              <img src={serv3} alt="serv1" className="h-[250px] object-cover" />
              <button
                onClick={() => navigate("storage")}
                className="w-full  bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white  dark:focus:ring-purple-900"
              >
                Leer más
              </button>
            </div>
          </div>
          <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="mx-6 my-4 flex flex-col">
              <h3 className="text-2xl font-semibold">Proyectos y Eventos</h3>
            </div>
            <div className="flex flex-col">
              <img src={serv4} alt="serv1" className="h-[250px] object-cover" />
              <button
                onClick={() => navigate("events")}
                className="w-full  bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white  dark:focus:ring-purple-900"
              >
                Leer más
              </button>
            </div>
          </div>
          <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="mx-6 my-4 flex flex-col">
              <h3 className="text-2xl font-semibold">Multimodal Terrestre</h3>
            </div>
            <div className="flex flex-col">
              <img src={serv6} alt="serv1" className="h-[250px] object-cover" />
              <button
                onClick={() => navigate("multimodal")}
                className="w-full  bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white  dark:focus:ring-purple-900"
              >
                Leer más
              </button>
            </div>
          </div>
          <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="mx-6 my-4 flex flex-col">
              <h3 className="text-2xl font-semibold">Importacion Via Aerea</h3>
            </div>
            <div className="flex flex-col">
              <img src={serv7} alt="serv1" className="h-[250px] object-cover" />
              <button
                onClick={() => navigate("air-importer")}
                className="w-full  bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white  dark:focus:ring-purple-900"
              >
                Leer más
              </button>
            </div>
          </div>
          <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <div className="mx-6 my-4 flex flex-col">
              <h3 className="text-2xl font-semibold">Importacion Via Maritima</h3>
            </div>
            <div className="flex flex-col">
              <img src={serv8} alt="serv1" className="h-[250px] object-cover" />
              <button
                onClick={() => navigate("water-importer")}
                className="w-full  bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white  dark:focus:ring-purple-900"
              >
                Leer más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
