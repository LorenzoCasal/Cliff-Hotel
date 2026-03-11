import { BrowserRouter, Routes, Route  } from 'react-router';
import Nav from '../shared/components/Nav';
import Home from '../features/welcome/Home';
import Hotel from '../features/hotel/Hotel';
import Services from '../features/services/Services';
import Footer from '../shared/components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Hotel' element={<Hotel />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}