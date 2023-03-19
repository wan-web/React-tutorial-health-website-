import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home';
import About from  './pages/about/About';
import Contact from  './pages/contact/Contact';
import Gallery from  './pages/gallery/Gallery';
import NotFound from  './pages/notFound/NotFound';
import Plans from  './pages/plans/Plans';
import Trainers from  './pages/trainers/Trainers';
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Gallery></Gallery>
      <Plans></Plans>
      <Trainers></Trainers>
      <NotFound></NotFound>
    </BrowserRouter>
  )
}

export default App