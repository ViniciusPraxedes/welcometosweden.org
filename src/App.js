import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Forum from "./components/Forum/Forum";
import Facts from "./components/Facts/Facts";
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
              <Banner />
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
              <Step5 />
              <Step6 />
              <Forum />
              <Facts />
              <Navbar />
          </Router>
      </div>
  );
}

export default App;
