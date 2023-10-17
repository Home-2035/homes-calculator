import './Main_calc.css';
import home from './../../images/homemini.png';
import script from './maicalc.js';
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
                
               <center><label>Площадь дома, <output id='values' for="rock" >1</output> м² </label><input type="range" min="1" max="1000" id="inputs" step="1"></input></center> 
            </form>
        </div>
    </div>
    <script src={script}></script>
    </>
    );
}
export default Maincalc;