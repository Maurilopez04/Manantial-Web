import React from "react";

const CultoJuvenilSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-16 px-6 sm:py-20 sm:px-8 overflow-hidden">
      {/* Fondo de texto decorativo */}
      <div className="absolute inset-0">
      <h4
  className="absolute inset-0 flex flex-col justify-center items-center md:top-1/3 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-blue-300 font-bold opacity-10 uppercase tracking-widest pointer-events-none"
>
  {/* Texto en horizontal para pantallas grandes */}
  <span className="hidden sm:block text-yellow-300 text-[200px]">
    <span className="text-[250px]">Jovenes</span> Escogidos
  </span>

  {/* Texto vertical para pantallas pequeñas */}
  <div className="sm:hidden flex flex-row items-center">
    <span className="text-[70px] rotate-90"> Jovenes </span>
    <span className="text-[60px] rotate-90">Escogidos</span>
  </div>
</h4>

      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Título Principal */}
        <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
          Comunidad <span className="text-blue-100">Juvenil</span>
        </h2>

        {/* Subtítulo */}
        <h3 className="mt-2 text-lg sm:text-2xl font-medium text-blue-100">
          ¡No te lo pierdas!
        </h3>

        {/* Detalles del Evento */}
        <p className="mt-6 text-lg sm:text-xl">
          Todos los sábados a las{" "}
          <span className="font-bold text-blue-200">7 PM</span>
        </p>

        {/* Botón de llamada a la acción */}
        <a
          href="#_"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base sm:text-lg py-3 px-6 sm:px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Más Información
        </a>
      </div>

      {/* Elementos Decorativos */}
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-blue-700 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-300 opacity-30 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CultoJuvenilSection;
