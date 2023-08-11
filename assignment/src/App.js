
import './App.css';
import {  BrowserRouter ,  Routes,  Route, } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Services from './Components/Services';
// import Footer from './Components/Footer';
import FetchData from './Components/FetchData';


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
        <Route exact path='/main' element={<Main />}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/fetchdata' element={<FetchData />}></Route>
        
        </Routes>
        {/* <Footer/> */}
       </BrowserRouter>
      
     </>
    </div>
  );
}

export default App;
