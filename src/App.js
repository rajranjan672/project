import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Ideas from './Components/Ideas';
import Mentors from './Components/Mentors';
import Services from './Components/Services';
import FAQs from './Components/FAQs';
import Landing from './Components/Landing';

function App(props) {
  return (
    <div>
      <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/ideas' element={<Ideas  />} />
        <Route path='/mentors' element={<Mentors  />} />
        <Route path='/services' element={<Services />} />
        <Route path='/faqs' element={<FAQs />} />

      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
