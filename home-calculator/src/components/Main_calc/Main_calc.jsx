import './Main_calc.css';
import home from './../../images/homemini.png';
import { useState } from 'react';

   const Slider = () => {
    const [value, setValue] = useState(0);
  
    const handleSliderChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div>
       <center> <p className='title'>Площадь дома, {value} м²</p></center>
        <input id='ran'
          type="range"
          min="1"
          max="1000"
          value={value}
          onChange={handleSliderChange}
        />
      </div>
    );
  };
  
function Maincalc(){
    return (
    <>
    
    <h1 className='title'>Калькулятор строительства</h1>
    <div className='maincalc'>
        <div className='home_container'>
            <img src={home} alt='Homemini' className='home'></img>
        </div>
        <div className='choice'>
        <form className='formcalc'>
        <center>
            <Slider/>
            <select className='select'>
              <option className='option'>1</option>
              <option className='option'>2</option>
            </select>
            <button className='continue'>Далее</button></center>
        </form>
    </div>
    </div>
    </>
    );
}
export default Maincalc;