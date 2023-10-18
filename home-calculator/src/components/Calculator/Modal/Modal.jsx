import './../style/style.css';

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_main" onClick={e => e.stopPropagation()}>
                <h1>Утипление фасада дома</h1>
                <div className="modal_main">
                    <button className="modal_btn active">Минеральная вата</button>
                    <button className="modal_btn">Экструзионный пенополист</button>
                {/* </div>
                <p>Минеральная (базальовая или кварцевая) <br />
                    вата - материал сделанный из натурального...</p>
                <div className="plusi">
                    <img src="img/list.png" /> <h3>Натуральные компоненты</h3>
                </div>
                <div className="plusi">
                    <img src="img/fire.png" /> <h3>Негорючесть</h3>
                </div>
                <div className="plusi">
                    <img src="img/clock.png" /> <h3 className='clock_text'>Недолговечность</h3>
                </div>

                <div className="price">
                    <h3>200 000руб.</h3>
                    <button className="modal_btn">Добавить</button> */}
                </div>
            </div>
        </div>
    )

}

export default Modal;