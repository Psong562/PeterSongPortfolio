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
import Footer from './Components/Footer';
// import AboutCard from './Components/AboutCard';


const App = () => {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' exact component={About} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App
