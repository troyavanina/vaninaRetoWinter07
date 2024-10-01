import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <Link to={"../home"} className="iconHome" title="INICIO">
          <img className="iconHome" src="./images/homeIcon.png" alt="" />
        </Link>
        <div className="divLogo">
          <img className="imgPokeball" src="./images/pokebola.png" alt="" />
          <h2>pokebooks</h2>
        </div>
        <Link to={"/profile"} className="iconProfile" title="MI PERFIL">
          <img className="iconProfile" src="./images/profileIcon.png" alt="" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
