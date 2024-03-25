import email from '../../assets/imgs/email.png';

function Contacts() {
  return (
    <section className="bg-white dark:bg-gray-900" id="contacts">
      <div className="container mx-auto flex justify-between px-6 py-8">
        <div className="w-full max-w-md">
          <div className="text-left">
            <h2 className="mb-4 mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Contactanos
            </h2>
          </div>

          <div className="mt-5">
            <div className="mb-6">
              <label className="block text-gray-800">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-2 px-3 py-2 placeholder-gray-500 bg-white border rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 px-3 py-2 placeholder-gray-500 bg-white border rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Your email address"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800">
                Message
              </label>
              <textarea
                className="w-full mt-2 px-3 py-2 placeholder-gray-500 bg-white border rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Your message"
              />
            </div>

            <div className="mt-6">
              <button className="block w-full px-5 py-2 text-lg text-white capitalize transition-colors duration-200 transform bg-blue-950 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-850">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md">
          <img src={email} alt="correo electronico" />
        </div>
      </div>
      <br /><br />
    </section>
  );
}

export default Contacts;
