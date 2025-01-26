import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LibrarySection from "../components/LibrarySection";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Spotlight from "../components/spotlight";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import CultoJuvenilSection from "../components/CultoJuvenil";
import CultoFamiliarSection from "../components/CultoFamiliar";
import TestimonialsSlider from "../components/TestimonialSlider";
import PrayerRequestForm from "../components/PrayerRequestForm";
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  return (
<>
<Header />
<LibrarySection />


<CultoJuvenilSection/>
<CardList/>
<CultoFamiliarSection/>
<TestimonialsSlider/>
<section className="bg-gray-100 py-16 px-6 sm:flex items-center justify-center">
<div className="sm:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/img/2018-04-20.jpg"
            />
          </div>
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl font-bold text-gray-800 my-4 sm:mb-6">Sobre Nosotros</h2>
    <p className="text-gray-700 text-lg leading-relaxed sm:mx-10">
      Somos una comunidad cristiana con mas de 16 años llevando el mensaje de amor, esperanza y salvación de Jesús a todos.  
      Creemos en el poder transformador de Cristo y buscamos impactar positivamente nuestra comunidad a través de la fe y el servicio.
    </p>
    <p className="mt-4 text-gray-600">
      ¡Nos encantaría que te unas a nosotros y seas parte de esta gran familia!
    </p>
  </div>
</section>
<PrayerRequestForm/>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115365.37694521729!2d-57.58274912151948!3d-25.365684429692973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dadb295fce33b%3A0x69ca42505e533175!2sManantial%20De%20Vida!5e0!3m2!1ses!2spy!4v1737421393756!5m2!1ses!2spy" className="w-full h-[450px]" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

<Footer/>

</>
  );
};

export default Home;
