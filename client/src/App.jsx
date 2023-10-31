import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Profile from './pages/profile'
import About from './pages/about'
const App = () => {
  return (
    // wrap home and about in a router
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App