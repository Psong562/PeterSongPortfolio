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

import LoadingPage from './Components/About/LoadingPage';
import { useEffect, useState} from 'react';


const App = () => {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LoadingPage load={load} id={load ? "no-scroll" : "scroll"}/>
    <div>
      <NavBar />

      <About />
      <Portfolio />
      <Contact />
      {/* <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes> */}
      <Footer />
    </div>
    </Router>
  )
}

export default App
