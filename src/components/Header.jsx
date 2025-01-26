import { useState, useEffect } from "react";
import { FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook  } from "react-icons/fa";

const ResponsiveHeader = () => {
  const [atTop, setAtTop] = useState(true); // Estado para saber si estamos en la parte superior
  const [open, setOpen] = useState(false); // Estado para el menú responsive

  // Función que detecta el scroll
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      {/* Header */}
      <div
        className={`fixed z-50 w-full px-8 py-2 transition-all duration-1000 rounded-full mt-4 mx-auto inset-x-0 ${
        open ? "bg-transparent max-w-4xl" : atTop
            ? "bg-transparent max-w-4xl"
            : "bg-black bg-opacity-90 backdrop-blur-xl max-w-7xl"
        }`}
      >
        <div className="flex flex-col w-full px-2 mx-auto md:items-center md:justify-between md:flex-row">
          <div className="flex flex-row items-center justify-between">
          <img src="/img/288042515_1421770948298836_6574963667308334909_n-removebg-preview.png" alt="" width={'50px'} /> <h2
              className={`px-2 font-bold tracking-tighter uppercase ${
                open ? "text-black bg-white" : atTop ? "text-black" : "text-white"
              }`}
            >
               Manantial de vida
            </h2>
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden focus:outline-none ${open ? "text-black bg-white" :atTop ? "text-black" : "text-white"}`}
            >
              {/* Icono de hamburguesa */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

{/* Navigation */}
<nav
  className={`${
    open ? `flex flex-col ${atTop ? "bg-white" : "bg-black"} w-full p-4 border rounded-lg shadow-lg` : "hidden"
  } md:flex md:flex-row md:items-center md:bg-transparent md:p-0 gap-3 md:shadow-none justify-end`}
>
  {["Conócenos", "Ubicación", "Asistir", "Contacto"].map((item, index) => (
    <a
      key={index}
      href="#_"
      className={`block text-md font-medium ${
        atTop ? "text-gray-800" : "text-white"
      } hover:text-gray-400 transition-colors`}
    >
      {item}
    </a>
  ))}

  <div className="flex items-center gap-4 mt-1 md:mt-0">
    <a
      href="#_"
      className={`text-xl ${
        atTop ? "text-gray-800" : "text-white"
      } hover:text-gray-400 transition-colors`}
      aria-label="Facebook"
    >
      <FaFacebook />
    </a>
    <a
      href="#_"
      className={`text-xl ${
        atTop ? "text-gray-800" : "text-white"
      } hover:text-gray-400 transition-colors`}
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
  </div>
</nav>

        </div>
      </div>

      {/* 
      <div className="bg-white">
        <div className="px-8 py-24 mx-auto text-center md:px-12 lg:px-24 lg:pt-64 text-zinc-500">
          <p className="max-w-xl mx-auto text-4xl text-black font-medium uppercase">
            Scroll to see effect
          </p>

          <div className="grid grid-cols-1 gap-8 mx-auto gap-y-28 mt-24 sm:grid-cols-1 max-w-2xl">
            <a href="#_">
              <div>
                <img
                  className="duration-500 w-full rounded-3xl shadow hover:shadow-3xl hover:-translate-y-12"
                  src="https://i.pinimg.com/564x/eb/b3/bd/ebb3bd6c322463cee8b7b17659792830.jpg"
                  alt="Card 1"
                />
              </div>
            </a>
            <a href="#_">
              <div>
                <img
                  className="duration-500 w-full rounded-3xl shadow hover:shadow-3xl hover:-translate-y-12"
                  src="https://i.pinimg.com/564x/9b/0e/e1/9b0ee1146eba537b5b1e207928350e0f.jpg"
                  alt="Card 2"
                />
              </div>
            </a>
            <a href="#_">
              <div>
                <img
                  className="duration-500 w-full rounded-3xl shadow hover:shadow-3xl hover:-translate-y-12"
                  src="https://i.pinimg.com/564x/b6/91/52/b691526e863a332d1708eb1d9da0d403.jpg"
                  alt="Card 3"
                />
              </div>
            </a>
          </div>
        </div>
      </div>*/}
    </section>
  );
};

export default ResponsiveHeader;
