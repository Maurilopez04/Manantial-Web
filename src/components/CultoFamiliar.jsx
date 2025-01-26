import React from "react";

const CultoFamiliarSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-900 via-orange-700 to-orange-500 text-white py-20 px-8 overflow-hidden">
      {/* Fondo de texto decorativo */}
      <div className="absolute inset-0">
        <h4
          className="absolute inset-0 flex flex-col justify-center items-center md:top-1/3 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-gray-300 font-bold opacity-10 uppercase tracking-widest pointer-events-none"
        >
          {/* Texto en horizontal para pantallas grandes */}
          <span className="hidden sm:block text-orange-300 text-[200px]">
          Domingo <span className="text-[250px]">Familia</span> 
          </span>

          {/* Texto vertical para pantallas pequeñas */}
          <div className="sm:hidden flex flex-row items-center">
            <span className="text-[70px] rotate-90">Domingo</span>
            <span className="text-[80px] rotate-90"> Familia </span>
          </div>
        </h4>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Título Principal */}
        <h2 className="mt-4 text-5xl font-extrabold">
          Servicio <span className="text-orange-100">Familiar</span>
        </h2>

        {/* Subtítulo */}
        <h3 className="mt-2 text-2xl font-medium text-orange-100">
          ¡No te lo pierdas!
        </h3>

        {/* Detalles del Evento */}
        <p className="mt-6 text-xl">
          Todos los domingos a las{" "}
          <span className="font-bold text-orange-200">8 AM</span>
        </p>

        {/* Botón de llamada a la acción */}
        <a
          href="#_"
          className="inline-block mt-8 bg-orange-800 hover:bg-orange-500 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Más Información
        </a>
      </div>

      {/* Elementos Decorativos */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-700 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-300 opacity-30 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CultoFamiliarSection;
