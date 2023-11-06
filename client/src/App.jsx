import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Header from './compoments/Header'
import Signup from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'

const App = () => {
  return (
    // wrap home and about in a router
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App