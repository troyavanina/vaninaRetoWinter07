import Context from "../context/Context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoodBye() {
  const { profileInfo } = useContext(Context);

  let name = profileInfo();

  const navigate = useNavigate();

  const handleGo = () => {
    navigate("/home");
  };

  return (
    <>
      <h1>¡Muchas gracias por tu compra!</h1>
      <h2>{name}</h2>
      <div className="divAsh">
        <img className="imgAsh" src="./images/pickachuBye.png" alt="" />
      </div>
      <div className="divProfile">
        <button className="buttonAdd" onClick={handleGo}>
          VOLVER AL INICIO
        </button>
      </div>
    </>
  );
}

export default GoodBye;
