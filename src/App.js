import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <div className="pages">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/blog" component={Blog} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
