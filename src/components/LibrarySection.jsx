
const LibrarySection = () => {
  return (
    <div className="container pt-28 md:max-w-6xl mx-auto">
      {/* Header */}
      <div className="relative overflow-hidden w-full">
      <div className="px-6 py-8 sm:px-6 sm:py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-center text-black sm:text-4xl">
          Jesús te ama, no importa tu pasado
          </h2>
          <p className="max-w-3xl mx-auto mt-3 text-gray-700 sm:mt-6 text-md sm:text-lg sm:leading-snug">
          "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." - Juan 3:16          </p>
          <p className="max-w-3xl mx-auto mt-3 text-gray-700 sm:mt-6 text-md sm:text-lg sm:leading-snug">    
          "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." - Mateo 11:28
</p>
          <div className="flex items-center justify-center mt-6 gap-x-6">
            <a
              className="flex flex-row items-center justify-center min-w-[130px] rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] hover:text-gray-200 px-8"
              href="#"
            >
              Conoce a Jesús 
            </a>
          </div>
        </div>
      </div>

    </div>

      {/* Counters 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mt-8">
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-book fa-2x text-red-600"></i>
          <p className="mt-2 text-lg">+500 Libros disponibles</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-desktop fa-2x text-red-600"></i>
          <p className="mt-2 text-lg">+5 Computadoras disponibles</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-clock fa-2x text-red-600"></i>
          <p className="mt-2 text-lg">Sábados de 8:00 a 17:00</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-location-dot fa-2x text-red-600"></i>
          <p className="mt-2 text-lg">Dr. Valentín Rebull 165, San Lorenzo</p>
        </div>
      </div>
*/}

<div className="container mx-auto px-5 py-24 lg:px-16 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/IMG_4979.JPG"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/IMG_4463.JPG"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/IMG_4981.JPG"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/IMG_4637.JPG"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/IMG_4473.JPG"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/IMG_4463.JPG"
            />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default LibrarySection;

