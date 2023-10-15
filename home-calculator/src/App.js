import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Main/Main';
import Calculator from './components/Calculator/Calculator';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/calculator' Component={Calculator} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
