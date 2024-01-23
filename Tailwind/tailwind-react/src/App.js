import "./App.css";
import logo from "./img/logo.svg";
import light from "./img/light.svg";

function App() {
  return (
    <section className="app-container">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img
              src={logo}
              alt="logo"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
          <div className="hidden space-x-10 md:flex bg-red">
            <a href="#" className="hover:text-darkGrayishBlue">
              About
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Work
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Testimonials
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Contact
            </a>
          </div>
          <div className="hidden space-x-10 md:flex ">
            <a href="#" className="space-x-1 ">
              <img src={light} alt="light icon" />
            </a>
            <a
              href="#"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default App;
