import { getAuth, signOut } from "firebase/auth";
import Unlogged from "./Unlogged";

function Logged(props) {
  const { policia, usuario } = props;

  const unlogged = () => {
    console.log("hay un problema aca");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        policia(false);
        //Sign-out successful.
      })
      .catch((error) => {
        console.log("hay un error:", error);
        // An error happened.
      });
    policia(false);
  };

  return (
    <>
      <h1>Hola {usuario.email}</h1>
      <button onClick={unlogged}>Desloguear</button>
    </>
  );
}

export default Logged;
