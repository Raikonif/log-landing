import email from '../../assets/imgs/email.png';
import { useState, useEffect } from 'react';
import sendEmailService from '../../services/sendEmail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface ContactFormValues {
  Subject: string;
  Name: string;
  Message: string;
  EmailRequest: string;
  SystemType: string;
}

function Contacts() {

  const [formValues, setFormValues] = useState<ContactFormValues>({
    Subject: '',
    Name: '',
    Message: '',
    EmailRequest: '',
    SystemType: 'Pagina Logistica',
  });

  useEffect(() => {
    return () => {
      setFormValues({
        Subject: '',
        Name: '',
        Message: '',
        EmailRequest: '',
        SystemType: 'Página Logistica',
      });
    };
  }, []);


  const handleSubmit = async () => {
    try {
      const response = await sendEmailService(formValues);
      toast.success(`${response}!`);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Hubo problemas");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900" id="contacts">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 w-full">
          <div className="text-left">
            <h2 className="mb-4 mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Contactanos
            </h2>
          </div>

          <div className="mt-5 px-5 pt-10">

            <div className="mb-6">
              <label className="block text-gray-800">
                Correo electronico
              </label>
              <input
                type="email"
                className="w-full mt-2 px-3 py-2 placeholder-gray-500 bg-white border rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Tu correo electronico"
                value={formValues.EmailRequest}
                onChange={e => setFormValues({ ...formValues, EmailRequest: e.target.value })}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800">
                Nombre
              </label>
              <input
                type="text"
                className="w-full mt-2 px-3 py-2 placeholder-gray-500 bg-white border rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Tu nombre"
                value={formValues.Name}
                onChange={e => setFormValues({ ...formValues, Name: e.target.value })}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800">
                Asunto
              </label>
              <input
                type="text"
                className="w-full mt-2 px-3 py-2 placeholder-gray-500 bg-white border rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Tu Asunto"
                value={formValues.Subject}
                onChange={e => setFormValues({ ...formValues, Subject: e.target.value })}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800">
                Mensaje
              </label>
              <textarea
                className="w-full mt-2 px-3 py-2 placeholder-gray-500 bg-white border rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Tu mensaje"
                value={formValues.Message}
                onChange={e => setFormValues({ ...formValues, Message: e.target.value })}
              />
            </div>

            <div className="mt-6">
              <button className="block w-full px-5 py-2 text-lg text-white 
              capitalize transition-colors duration-200 transform bg-blue-950 rounded-md hover:bg-blue-800 
              focus:outline-none focus:bg-blue-850" onClick={handleSubmit}>
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex pt-36">
          <img src={email} alt="correo electronico" />
        </div>
      </div>
      <br /><br />
      <ToastContainer closeButton={false} theme='dark' autoClose={1500}/>
    </section>
  );
}

export default Contacts;
