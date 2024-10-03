import Context from "../context/Context";
import { useContext } from "react";

function UserInfo() {
  const { profileInfo, logOut } = useContext(Context);

  let name = profileInfo();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <h1>¡Hola!</h1>
      <h2>{name}</h2>
      <div className="divAsh">
        <img className="imgAsh" src="./images/ash.png" alt="" />
      </div>
      <div className="divProfile">
        <button className="buttonAdd" onClick={handleLogOut}>
          CERRAR SESIÓN
        </button>
      </div>
    </>
  );
}

export default UserInfo;
