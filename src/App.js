import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Faq from "./Faq";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <div className="pages">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            {/* <Route path="/blog" component={Blog} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
