import "./style/style.css";
import React, { useState, useEffect } from 'react';
import Popup from "./popup.js";
import Modal from "./Modal/Modal";
// import OpenModal from "./ModalOp.js";

const Circle = ({ setActive }) => {
  const handleClick = () => {
    setActive(true);
  };

  return <div className="circle" onClick={handleClick}></div>
}

let Calculator = (props) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <section>
        {/* <button className="section_button" onClick={() => setModalActive(true)}>Открыть</button> */}
      </section>

      <div className="container_home">
        <div className="home">
          {/* ЧАСТИ ДОМА */}
          <div className="roof">
            <img src={require("./pictures/roof.png")} alt="roof" />
          </div>
          <div className="floor1">
            <img src={require("./pictures/floor1.png")} alt="floor1" />
          </div>
          <div className="foundation">
            <img src={require("./pictures/foundation.png")} alt="foundation" />
          </div>
          {/* ЛИНИИ ВЫБОРА */}
          <div className="container_choice" id="attic">
            <button className="circle_empty"></button>
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container_choice" id="window">
            <div className="circle_empty" />
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container_choice" id="wall">
            <div className="circle_empty" />
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container_choice" id="support">
            <div className="circle_empty" />
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container_choice" id="foundation">
            <div className="circle_empty" />
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container_choice" id="chimney">
            <div className="circle_empty" />
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container_choice" id="floor">
            <div className="circle_empty" />
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container_choice" id="outerwall">
            <div className="circle_empty" />
            <div className="line" />
            <Circle setActive={setModalActive} />
          </div>
          <div className="container">
            <div className="price">Стоимость составляющих</div>
            <div className="total-price">0 руб</div>
            <button className="button">Итоговая цена</button>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Calculator;