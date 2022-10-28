import React, { useState } from "react";

const width = window.screen.width;
const height = window.screen.height;

const Cuadro = () => {
  const [color, setColor] = useState("white");
  const [top, setTop] = useState("0px");
  const [left, setLeft] = useState("0px");

  const changeColor = (color) => {
    let colorFilter = color;
    if (color === "random") {
      colorFilter = `rgb(${random()},${random()},${random()})`;
    }
    if (color === "transparent") {
      colorFilter = "white";
      setTop("0px");
      setLeft("0px");
    } else {
      setTop(`${randomTop()}px`);
      setLeft(`${randomLeft()}px`);
    }
    setColor(colorFilter);
  };

  const random = () => Math.floor(Math.random() * 255);
  const randomLeft = () => Math.floor(Math.random() * width - 200);
  const randomTop = () => Math.floor(Math.random() * height - 200);

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          border: "1px solid grey",
          position: "absolute",
          top,
          left,
          zIndex: -1,
          transition: "all .5s ease",
        }}
      ></div>
      <button
        onClick={() => changeColor("blue")}
        style={{ backgroundColor: "blue" }}
      >
        Azul
      </button>
      <button
        onClick={() => changeColor("yellow")}
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        Amarillo
      </button>
      <button
        onClick={() => changeColor("green")}
        style={{ backgroundColor: "green" }}
      >
        Verde
      </button>
      <button onClick={() => changeColor("transparent")}>Reset Color</button>
      <button onClick={() => changeColor("random")}>Random Color</button>
    </>
  );
};

export default Cuadro;