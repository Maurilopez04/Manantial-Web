import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LibrarySection from "../components/LibrarySection";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Spotlight from "../components/spotlight";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import FormContact from "../components/ContactoForm";
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  return (
<>
<Header />
<LibrarySection />
<CardList/>
<Posts />
<FormContact/>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57674.64239144601!2d-57.547816030468724!3d-25.3825366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dadb295fce33b%3A0x69ca42505e533175!2sManantial%20De%20Vida!5e0!3m2!1ses!2spy!4v1733522645959!5m2!1ses!2spy" width="100%" height="500px" ></iframe>
<Footer/>
</>
  );
};

export default Home;
