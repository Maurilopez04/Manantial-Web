import { FaHome, FaBookOpen, FaPrayingHands, FaSun, FaPray } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import Services from "./Services";
import CultosCard from "./CardCultos";

const CardList = () => {
  const cardsData = [
    {
      icon: <FaHome />,
      title: "Casa de Paz",
      description: "Encuentros semanales para aprender y crecer en comunidad.",
      id: 1,
    },
    {
      icon: <FaBookOpen />,
      title: "Clases de Discipulado",
      description: "Aprende principios espirituales y fortalece tu fe.",
      id: 2,
    },
    {
      icon: <FaPrayingHands />,
      title: "Reunión de Oración",
      description: "Un espacio para interceder y buscar guía espiritual.",
      id: 3,
    },
    {
      icon: <FaPray />,
      title: "Oración de Madrugada",
      description: "Comienza tu día con un tiempo de reflexión y devoción.",
      id: 4,
    },
  ];

  const handleContactClick = (id) => {
    alert(`¡Has solicitado contacto para la tarjeta con ID: ${id}!`);
    // Aquí podrías redirigir a una página de contacto o abrir un modal.
  };

  return (
    <div className="bg-gray-50 py-10">

    <div className="sm:max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center">
      {cardsData.map((card) => (
        <Services
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
          onClick={() => handleContactClick(card.id)}
        />
      ))}
    </div>
    </div>
  );
};

export default CardList;
