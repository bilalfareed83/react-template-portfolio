import { BioData } from "../components/bio/bioData";
import { Contact } from "../components/contact/contact";
import { Counter } from "../components/counter/counter";
import { Footer } from "../components/footer/footer";
import { HeroComponent } from "../components/hero/hero";
import { HireMe } from "../components/hireMe/hireMe";
import { Portfolio } from "../components/portfolio/portfolio";
import { ScrollTop } from "../components/scrollTop/scrollTop";
import { Service } from "../components/service/service";
import Testimonial from "../components/testimonial/testimonial";

function Home() {
  return (
    <div>
      <HeroComponent />
      <BioData />
      <Portfolio />
      <Counter />
      <Service />
      <Testimonial />
      <HireMe />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Home;
