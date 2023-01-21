import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./Components/Layout/Header/Header";
import {Footer} from "./Components/Layout/Footer/Footer";
import {Home} from "./pages/Home";
import {Services} from "./pages/Services/Services";
import { Minecraft } from "./pages/Minecraft";

export const App = ()=> {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="serviços" element={<Services />}/>
        <Route path="serviços/minecraft" element={<Minecraft />} />
      </Routes>
      <Footer />
    </Router>
  );
}