import { Services } from "./pages/Services"
import { Home } from "./pages/Home"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/services' Component={Services}/>
      </Routes>
    </Router>
  )
}

export default App