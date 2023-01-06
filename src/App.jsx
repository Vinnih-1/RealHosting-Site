import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./components/Layout/Header/Header";
import {Footer} from "./components/Layout/Footer/Footer";
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";

export const App = ()=> {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="serviços" element={<Services />}/>
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}