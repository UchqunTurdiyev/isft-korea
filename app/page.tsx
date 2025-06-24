
import FormPage from "./component/gptForm";
import About from "./component/about";
import Main from "./home";
import Contact from "./component/contact";
import Footer from "./footer";
import Sale from "./component/sale";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col 2xl:w-[1200px] mx-auto px-6 scroll-smooth">
      <Main />
      <Sale />
      <About />
      <FormPage  />
      <Contact />
      <Footer />
    </div>
  );
}
