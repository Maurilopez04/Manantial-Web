import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaGlobe, FaMap, FaInstagram, FaInstagramSquare, FaGoogle } from "react-icons/fa";
import { FaMapLocation, FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:gap-32">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="/img/288042515_1421770948298836_6574963667308334909_n-removebg-preview.png"
                className="h-12 me-3"
                alt="Manantial De Vida"
              />
              <span className="text-2xl font-bold tracking-tighter uppercase whitespace-nowrap ">
                Manantial De Vida
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-2 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Conocénos
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Ubicacion
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Contactanos 
              </h2>
              <ul className="text-gray-500 ">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Pedir Oracion
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Pagina de Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Politica de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terminos &amp; Condiciones
                  </a>
                </li>
              </ul>
            </div>
            <div > <h3 className="text-xl font-semibold">Suscríbete</h3> 
            <form action="/" method="POST" className="mt-2"> <input type="email" name="email" placeholder="Tu correo electrónico" className="p-2 w-full text-gray-800 rounded-md border" required=""/> <button type="submit" className="w-full mt-1 bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-md">Suscríbete</button> </form> </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025{" "}
            <a href="/" className="hover:underline">
              Manantial De Vida
            </a>
            . Todos los derechos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900"
            >
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <FaInstagramSquare className="w-5 h-5" />
              <span className="sr-only">Instagram Page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <FaGoogle className="w-5 h-5" />
              <span className="sr-only">Google Perfil</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <FaMapLocationDot className="w-5 h-5" />
              <span className="sr-only">Ubicacion</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <FaGlobe className="w-5 h-5" />
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

