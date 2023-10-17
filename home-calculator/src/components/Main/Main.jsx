<<<<<<< HEAD
import AboutUs from './../AboutUs/AboutUs';
=======

import Maincalc from '../Main_calc/Main_calc';
>>>>>>> 93d1fd9d47783c4f118c66c814e761cc11a71113
import sas from './Main.module.css'

let Main = (props) => {
    return (
        <>

            <div className={sas.picture}>
                <div className={sas.heading}>О нашем проекте</div>
                <div className={sas.line_cont}>
                    <div className={sas.linechild}></div>
                </div>
                <div className={sas.text}>Калькулятор представляет из себя интерфейс для расчёта<br />затрат стоимости дома, исходя из ваших пожеланий </div>
            </div>
<<<<<<< HEAD
            <div className={sas.calc}>
                <h1 className={sas.h1}>Калькулятор строительства</h1>
            </div>


            <AboutUs />
=======
            <div className={sas.text}>Калькулятор представляет из себя интерфейс для расчёта<br/>затрат стоимости дома, исходя из ваших пожеланий </div>
        </div>
       <Maincalc/> 
       
>>>>>>> 93d1fd9d47783c4f118c66c814e761cc11a71113
        </>
    )
}

export default Main;