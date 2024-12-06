const Card = ({ image, alt, label, title, description, link }) => (
  <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
    <img
      src={image}
      alt={alt}
      className="object-cover object-center w-full h-48 rounded-lg rounded-b-none"
    />
    <div className="flex flex-grow">
      <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-lg rounded-t-none shadow-lg">
        <div>
          <a
            href={link}
            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600 transition duration-300"
          >
            {label}
          </a>
          <a
            href={link}
            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 transition duration-300"
          >
            {title}
          </a>
          <p className="mb-4">{description}</p>
        </div>
        <div>
          <a
            href={link}
            className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600 transition duration-300"
          >
            Ver Mas
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Componente principal
const Posts = () => {
  // Datos de las tarjetas
  const cards = [
    {
      image: "/img/IMG_4981.JPG",
      alt: "Reliable schemas image",
      label: "Categoria 1",
      title: "Titulo 1 ejemplo",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?",
      link: "#",
    },
    {
      image: "/img/IMG_4981.JPG",
      alt: "Client-based adoption image",
      label: "Categoria 1",
      title: "Titulo 2 ejemplo",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.",
      link: "#",
    },
    {
      image: "/img/IMG_4981.JPG",
      alt: "Intellectual capital image",
      label: "Categoria 2",
      title: "Titulo 3 ejemplo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.",
      link: "#",
    },
  ];

  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
          Publicaciones
        </h2>
        <a
          href="#"
          className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600 transition duration-300"
        >
          Ver todo
        </a>
      </div>
      <div className="flex flex-wrap -mx-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            alt={card.alt}
            label={card.label}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
