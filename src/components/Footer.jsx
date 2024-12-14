import React from "react";
import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaGlobe, FaInstagram, FaGoogle, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
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
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Links
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Posts
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Informacion
              </h2>
              <ul className="text-gray-500 ">
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Ubicación
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
                    Terminos y Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
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
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://maps.app.goo.gl/J5WsiueJvxidLLDy6"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <FaGoogle className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

