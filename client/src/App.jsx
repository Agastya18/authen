import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Header from './compoments/Header'
import Signup from './pages/SignUp'
const App = () => {
  return (
    // wrap home and about in a router
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App