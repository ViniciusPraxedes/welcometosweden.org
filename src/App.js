import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Documents from "./pages/Documents/Documents";
import Topics from "./pages/Topics/Topics";
import Home from "./pages/Home/Home";
import Banner from "./components/Banner/Banner";
import Forum from "./components/Forum/Forum";
import Facts from "./components/Facts/Facts";
import Life from "./components/Life/Life";
import Footer from "./components/Footer/Footer";
import Nature from "./components/Nature/Nature";
import Study from "./components/Study/Study";
import Cost from "./components/Cost/Cost";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import Step5 from "./components/Step5/Step5";
import Step6 from "./components/Step6/Step6";


function App() {
  return (
      <div className="App">
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/topics" element={<Topics />} />
                  <Route path="/topics/documents" element={<Documents />} />
              </Routes>
              <Footer />
          </Router>
      </div>
  );
}

export default App;
