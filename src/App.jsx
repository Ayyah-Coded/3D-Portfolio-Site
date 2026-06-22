import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Contact = lazy(() => import("./components/contact/Contact"))
const Hero = lazy(() => import("./components/hero/Hero"))
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"))
const Services = lazy(() => import("./components/services/Services"))

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#services">
            <Services />
          </section>{" "}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
          {/* <section id="#portfolio"> */}
          <Portfolio />
          {/* </section> */}{" "}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#contact">
            <Contact />
          </section>{" "}
        </LazyLoad>
      </Suspense>
    </div>
  );
};


export default App