import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// testimonials.json (puedes importar desde un archivo JSON si prefieres)
const testimonials = [
  {
    name: "Mauricio López",
    role: "Líder",
    image: "/img/mauritestimonio.jpeg",
    message: "Estaba en depresión y dependía de pastillas antidepresivos y pastillas para dormír, mi relación con mis padres era casi nula prácticamente no hablaba con ellos. Jesús me cambio me permitió ser feliz dejar las pastillas y hoy puedo hablar y abrazar a mis padres. Aun 4 años después Jesús sigue mejorando mi vida",
  },
  {
    name: "Belen González",
    role: "Líder",
    image: "/img/belentestimonio.jpeg",
    message: "Cuando conocí a Jesús verdaderamente, el me saco de la depresión, del suicido, lleno ese vacío que llevaba dentro, dejé de sentirme sola y ahora puedo verdaderamente decir que  soy feliz.",
  },
  {
    name: "Braulio Villagra",
    role: "Pastor",
    image: "/img/brauliotestimonio.jpeg",
    message: "Antes vivía en conflicto constante, pero al entregarme a Cristo, mi vida y mi matrimonio fueron restaurados. Hoy tengo una familia unida y llena de amor.",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white py-16 px-8 sm:py-20 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-10">
          Historias de Transformación
        </h2>
        <p className="text-lg sm:text-xl font-light text-center mb-12">
          Testimonios reales de cómo Cristo ha transformado vidas, restaurando corazones y familias.
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <article key={index} className="flex items-center justify-center sm:p-6">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Sección de imagen */}
                {/* Sección de texto */}
                <div className="p-8 flex flex-col justify-center sm:col-span-3 text-center">
                  <h3 className="text-xl sm:text-4xl font-semibold text-blue-700 mb-0">
                    {testimonial.name}
                  </h3>
                  <p className="italic text-sm sm:text-lg text-gray-500 mb-4 pl-auto">
                    {testimonial.role}
                  </p>
                  <p className="text-base sm:text-xl font-light text-gray-700 leading-relaxed">
                    "{testimonial.message}"
                  </p>
                </div>

                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-full h-full object-cover rounded-r-lg"
                  />
                  {/* Efecto decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 pointer-events-none rounded-lg"></div>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
