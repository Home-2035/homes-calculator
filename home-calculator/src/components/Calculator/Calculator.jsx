import "./style/style.css";
import popup from "./popup.js";

let Calculator = (props) => {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./style/style.css" />


      {/* modalka */}

  <section>
    <button class="section_button section_button1">Открыть</button>
  </section>

  <div class="modal">
    <div class="modal_main">
      <button class="modal_btn active">Минеральная вата</button>
      <button class="modal_btn">Экструзионный пенополист</button>
    </div>

    <div class="modal_main">
      <h1>Утипление фасада дома</h1>

      <p>Минеральная (базальовая или кварцевая) <br/> 
      вата - материал сделанный из натурального...</p>
      <div class="plusi">
        <img src="img/list.png"/> <h3>Натуральные компоненты</h3>
      </div>
      <div class="plusi">
        <img src="img/fire.png"/> <h3>Негорючесть</h3>
      </div>
      <div class="plusi">
        <img src="img/clock.png"/> <h3 class='clock_text'>Недолговечность</h3>
      </div>

      <div class="price">
        <h3>200 000руб.</h3>
        <button class="modal_btn">Добавить</button>
      </div>

    </div>
  </div>
      

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
        <div className="circle" />
      </div>
      <div className="container_choice" id="window">
        <div className="circle_empty" />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="container_choice" id="wall">
        <div className="circle_empty" />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="container_choice" id="support">
        <div className="circle_empty" />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="container_choice" id="foundation">
        <div className="circle_empty" />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="container_choice" id="chimney">
        <div className="circle_empty" />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="container_choice" id="floor">
        <div className="circle_empty" />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="container_choice" id="outerwall">
        <div className="circle_empty" />
        <div className="line" />
        <div className="circle" />
      </div>
      <div className="container">
        <div className="price">Стоимость составляющих</div>
        <div className="total-price">0 руб</div>
        <button className="button">Итоговая цена</button>
      </div>
    </div>
  </div>

  <script src={popup.js}></script>
</>

    )
}

export default Calculator;