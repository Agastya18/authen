import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Header from './compoments/Header'
const App = () => {
  return (
    // wrap home and about in a router
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App