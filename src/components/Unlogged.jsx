import { useState } from "react";
import Context from "../context/Context";
import { useContext } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

function Unlogged(props) {
  const [create, setCreate] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { userIsLogged, logIn, createUser } = useContext(Context);

  // //auth: herramienta de conexión
  // const auth = getAuth();

  // const { policia, guardarUsuario } = props;

  // const handleLogin = () => {
  //   signInWithEmailAndPassword(auth, usuario, pass)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       policia(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };

  // const handleCrear = () => {
  //   //auth: herramienta de conexión
  //   const auth = getAuth();

  //   //método:
  //   createUserWithEmailAndPassword(auth, usuario, pass)
  //     //me da las credenciales:
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       guardarUsuario({ email: user.email, uid: user.uid });
  //       policia(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  const handleLogIn = () => {
    logIn(user, pass);
  };

  const handleNot = () => {
    //Esto es un booleano que crea lo contrario a lo que hay:
    setCreate(!create);
  };

  const handleText = (e) => {
    if (e.target.name == "user") {
      setUser(e.target.value);
    } else {
      setPass(e.target.value);
    }
  };

  const handleCreate = () => {
    createUser(user, pass);
  };

  return (
    <>
      <div className="divCheckOut">
        <h2>Iniciá sesión para finalizar tu compra</h2>
        <div className="divLogIn">
          <div className="divUser">
            <label className="label" htmlFor="user">
              Ingresá tu correo electrónico
            </label>
            <input
              className="input"
              type="text"
              onChange={handleText}
              name="user"
              placeholder="correo electrónico"
            />
          </div>
          <div className="divPassword">
            <label className="label" htmlFor="password">
              Ingresá tu contraseña
            </label>
            <input
              className="input"
              type="password"
              onChange={handleText}
              name="password"
              placeholder="contraseña"
            />
          </div>

          {!create ? (
            <>
              <div className="divLogInButtons">
                {/* <button className="buttonBackCart" onClick={handleBackCart}>VOLVER AL CARRITO</button> */}
                <button className="buttonLogIn" onClick={handleLogIn}>
                  INICIAR SESIÓN
                </button>
              </div>
              <div className="createAccount">
                <p className="pNot" onClick={handleNot}>
                  No tengo una cuenta
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="createAccount">
                <button className="buttonLogIn" onClick={handleCreate}>
                  Crear cuenta
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Unlogged;
