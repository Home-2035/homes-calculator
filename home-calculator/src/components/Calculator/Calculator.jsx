import "./style/style.css";

let Calculator = (props) => {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./style/style.css" />
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
</>

    )
}

export default Calculator;