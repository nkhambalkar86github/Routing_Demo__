import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './Components/Navigationbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    
     <Navigationbar></Navigationbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
