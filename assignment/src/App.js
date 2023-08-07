
import './App.css';
import {  BrowserRouter ,  Routes,  Route, } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
     <>
      <BrowserRouter>
     <Header />
        <Routes>
        <Route exact path='/' element={< Home />}></Route>  
        <Route exact path='/about' element={< About />}></Route>  
        <Route exact path='/contact' element={< Contact />}></Route>   
        </Routes>
      </BrowserRouter>
     </>
    </div>
  );
}

export default App;
