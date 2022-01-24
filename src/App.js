import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
// import AboutCard from './Components/AboutCard';


const App = () => {
  return (
    <Router>
    <div>
      <NavBar />
    </div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
