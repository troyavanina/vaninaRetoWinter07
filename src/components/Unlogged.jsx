import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Unlogged(props) {
  const [crear, setCrear] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  //auth: herramienta de conexión
  const auth = getAuth();

  const { policia, guardarUsuario } = props;

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, usuario, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        policia(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleCrear = () => {
    //auth: herramienta de conexión
    const auth = getAuth();

    //método:
    createUserWithEmailAndPassword(auth, usuario, pass)
      //me da las credenciales:
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        guardarUsuario({ email: user.email, uid: user.uid });
        policia(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleNoTengo = () => {
    //Esto es un booleano que crea lo contrario a lo que hay:
    setCrear(!crear);
  };

  const handleTexto = (e) => {
    if (e.target.name == "usuario") {
      setUsuario(e.target.value);
    } else {
      setPass(e.target.value);
    }
  };

  return (
    <>
      <h3>Logueate para ver mi contenido</h3>
      <input
        type="text"
        onChange={handleTexto}
        name="usuario"
        placeholder="email"
      />
      <input
        type="password"
        onChange={handleTexto}
        name="password"
        placeholder="password"
      />
      {!crear ? (
        <>
          <button onClick={handleLogin}>Loguear</button>
          <p onClick={handleNoTengo}>No tengo cuenta</p>
        </>
      ) : (
        <>
          <div className="contenedorLoco">
            <button onClick={handleCrear}>Crear cuenta</button>
          </div>
        </>
      )}
    </>
  );
}

export default Unlogged;
