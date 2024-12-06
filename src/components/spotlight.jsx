
const Spotlight = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Sección de texto */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Descubre el poder del diseño
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Experimenta una interfaz elegante y funcional que combina modernidad
            con simplicidad. Ideal para tu próximo proyecto innovador.
          </p>
          <div className="flex space-x-4">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
              Saber más
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition">
              Demo
            </button>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="relative">
          <img
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt="Ejemplo UI"
            className="w-full h-full object-cover"
          />
          {/* Efecto decorativo */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
