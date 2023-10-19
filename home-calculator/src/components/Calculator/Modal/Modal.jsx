import { useState } from 'react';
import './../style/style.css';

const Modal = ({ active, setActive }) => {
    const [selectedButton, setSelectedButton] = useState("mineral");

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_main" onClick={e => e.stopPropagation()}>
                <h1>Утипление фасада дома</h1>
                <div className="modal_main">
                    <button className={selectedButton === "mineral" ? "modal_btn active" : "modal_btn"} onClick={() => setSelectedButton("mineral")}>Минеральная вата</button>
                    <button className={selectedButton === "foam" ? "modal_btn active" : "modal_btn"} onClick={() => setSelectedButton("foam")}>Экструзионный пенополист</button>
                    <div className='win2'>
                        {selectedButton === "mineral" ? (
                            <>
                                <p className='modalDescr'>Минеральная (базальовая или кварцевая) <br />
                                    вата - материал сделанный из натурального...</p>
                                <div className="plusi">
                                    <img src="img/list.png" /> <h3>компоненты</h3>
                                </div>
                                <div className="plusi">
                                    <img src="img/fire.png" /> <h3>Негорючесть</h3>
                                </div>
                                <div className="plusi">
                                    <img src="img/clock.png" /> <h3 className='clock_text'>Недолговечность</h3>
                                </div>

                                <div className="price">
                                    <h3>200 000руб.</h3>
                                    <button className="modal_btn">Добавить</button>
                                </div>
                            </>
                        ) : (
                            <>
                                 <p> Обладают высокими теплозащитными свойствами — теплопроводность в реальных условиях</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;