import Calculator from "./Calculator.jsx";
import {useState} from 'react';


function TestCalc() {
    const [isActive, setIsActive] = useState(false);
    let modalElem = document.getElementsByClassName("modal")

        // modalElem.style.cssText = 
        // `display: flex;
        // visibility: hidden;
        // opacity: 0;
        // transition: opacity 300ms ease-in-out;`;

        const closeModal = event => {
            const target = event.target;

            if (target === modalElem) {
                alert("modalElem.style.opacity = 0;");

                setTimeout(() => {
                    alert("modalElem.style.visibility = 'hidden';")
                }, 300);
            }
        };

        const openModal = () =>{
            setIsActive(current => !current);
        };

return (
        <>
            <Calculator></Calculator>
            <button className="section_button" onClick={openModal} style={{
                opacity: isActive ? 1 : 0,
            }}
            >Open Modal</button>
            <div className="modal" onClick=""></div>
        </>
)
}
export default TestCalc;