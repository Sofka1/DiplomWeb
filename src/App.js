import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Services from './components/Services/Services';
import style from './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './components/Footer/Footer';


const App = (props) => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
