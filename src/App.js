import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Ideas from './Components/Ideas';
import Mentors from './Components/Mentors';
import Services from './Components/Services';
import FAQs from './Components/FAQs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Ideas />} />
        <Route path='/mentors' element={<Mentors />} />
        <Route path='/services' element={<Services />} />
        <Route path='/faqs' element={<FAQs />} />

      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
