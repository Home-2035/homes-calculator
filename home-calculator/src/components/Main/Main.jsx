
import Maincalc from '../Main_calc/Main_calc';
import sas from './Main.module.css'

let Main = (props) => {
    return (
        <>
       
        <div className={sas.picture}>
            <div className={sas.heading}>О нашем проекте</div>
            <div className={sas.line_cont}>
                <div className={sas.linechild}></div>
            </div>
            <div className={sas.text}>Калькулятор представляет из себя интерфейс для расчёта<br/>затрат стоимости дома, исходя из ваших пожеланий </div>
        </div>
       <Maincalc/> 
       
        </>
    )
}

export default Main;