import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <Link to={"/profile"} className="iconProfile" title="MI PERFIL">
          <img className="iconProfile" src="./images/profileIcon.png" alt="" />
        </Link>

        <Link to={"../home"} className="divLogo" title="INICIO">
          <div className="divLogo">
            <img className="imgPokeball" src="./images/pokebola.png" alt="" />
            <img className="logo" src="./images/logo.png" alt="" />
          </div>
        </Link>

        <Link
          to={"../shoppingCart"}
          className="iconShopping"
          title="CARRITO DE COMPRAS"
        >
          <img
            className="iconShopping"
            src="./images/shoppingIcon.png"
            alt=""
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
