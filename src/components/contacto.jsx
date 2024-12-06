import { FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Helmet } from "react-helmet";
const Contacto = () => {
  window.scrollTo(0, 0);
  return (
    <section className="bg-white py-10 sm:pt-32">
      <div className="mx-auto px-2 py-12 xl:px-20">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-6 px-4 md:mb-0 xl:mx-20">
            <h2 className="text-3xl font-semibold text-gray-900">Contacto</h2>
            <p className="text-gray-700 mt-4">Para más información o si tienes alguna pregunta, por favor, no dudes en contactarnos.</p>
            <div className="mt-8">
            <p className="flex items-center gap-2 text-gray-700 mb-2 mt-8">
              <FaMapMarkedAlt/>
                Casa Central: General Caballero esq. Buenos Aires.
              </p>
              <p className="flex items-center gap-2 text-gray-700 mb-2">
              <FaMapMarkedAlt/>
                Sucursal 1: Pablo Pereira entre España y Gral. Caballero.
              </p>
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <FaPhoneAlt/>
                Teléfono: +595 983 047400
              </p>
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <IoIosMail/>
                Email: atencion@hltuning.com
              </p>
              <p className="flex items-center gap-2 text-gray-700 mb-6">
                <IoIosMail/>
                Email: hltuning.equipamientos@gmail.com
              </p>
              <div className="flex flex-row items-center justify-center md:justify-start space-x-3 mt-5">
                <a href="https://wa.me/595983047400" target="_blank" rel="noopener noreferrer" className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-700 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300">
                  <FaWhatsapp/>
                </a>
                <a href="https://www.instagram.com/hltuningpy_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-700 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300">
                  <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/company/hltuning/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-700 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300">
                 <FaLinkedin/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100056706925841" target="_blank" rel="noopener noreferrer" className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-700 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300">
                 <FaFacebook/>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-200 p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl text-gray-900 font-semibold mb-6">Envíanos un mensaje</h3>
            <form action="https://formsubmit.co/hltuning.equipamientos@gmail.com" method="POST">
              <div className="mb-4">
                <label className="block text-gray-600">Nombre</label>
                <input type="text" name="name" placeholder="Tu nombre" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input type="email" name="email" placeholder="Tu email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Teléfono</label>
                <input type="number" name="number" placeholder="Tu número" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Mensaje</label>
                <textarea name="message" rows="4" placeholder="Tu mensaje" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700" required></textarea>
              </div>
              <div className="flex justify-end mt-6">
                <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-red-800">Enviar</button>
              </div>
              <input type="hidden" name="_next" value="https://www.hltuning.com/Mensaje-Enviado"></input>
              <input type="hidden" name="_captcha" value="false"></input>
            </form>
          </div>
        </div>
      </div>

      <div class="w-full h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1950.5494687501994!2d-77.018399!3d-12.105379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8731af515b1%3A0xac7c25add66fc5a7!2sof.%20604%2C%20Av.%20Rep%C3%BAblica%20de%20Panam%C3%A1%204093%2C%20Surquillo%2015048%2C%20Peru!5e0!3m2!1sen!2spy!4v1722278790898!5m2!1sen!2spy"
                    class="w-full h-full border-0"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
    </section>
  );
};

export default Contacto;