import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Main from './components/Main/Main';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Home' Component={Main}/>
        <Route path='' Component={Main}/> {/* path="" - Перавый запуск React */}
        <Route path='/calculator' Component={Calculator} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
