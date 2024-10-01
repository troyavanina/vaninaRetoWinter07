import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/carritodecompras");
  };

  return (
    <>
      <div className="divHome">
        <div className="divBook">
          <h1 className="h1Home">¡Preventa exclusiva!</h1>
          <img className="imgBook" src="./images/pickachu.png" alt="" />
        </div>
        <div className="divButton">
          <button onClick={handleClick} className="buttonBuy">
            COMPRAR
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
