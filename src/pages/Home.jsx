import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LibrarySection from "../components/LibrarySection";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Spotlight from "../components/spotlight";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  return (
<>
<Header />
<LibrarySection />
<CardList/>
<Posts />
<Spotlight/>
<Footer/>

</>
  );
};

export default Home;
