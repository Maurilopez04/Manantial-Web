const CultosCard = ({ title, time, icon, image }) => {
    return (
      <div className="relative group md:w-1/2">
        <div className="transform bg-gradient-to-r from-blue-800 to-blue-900 p-1 rounded-xl shadow-lg group-hover:rotate-0 transition-transform duration-500">
          <div className="bg-white p-4 rounded-lg flex items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            {/* Columna 1: Imagen o ícono */}
            <div className="flex-shrink-0">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
              ) : (
                <div className="text-blue-800 text-5xl sm:text-6xl">{icon}</div>
              )}
            </div>
  
            {/* Columna 2: Título y hora */}
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900">{title}</h2>
              <p className="text-sm sm:text-base text-gray-500 mt-1">{time}</p>
            </div>
  
            {/* Columna 3: Botón */}
            <div className="flex-shrink-0">
              <button className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white font-semibold rounded-lg shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400">
                <span className="relative flex items-center gap-2">
                  Asistir
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CultosCard;
  
  

  