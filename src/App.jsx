import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
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

export default App;
