import Context from "./Context";
import Reducer from "./Reducer";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import {
  getDatabase,
  ref,
  onValue,
  onChildAdded,
  set,
  push,
  update,
  onChildChanged,
  onChildRemoved,
  onChildMoved,
} from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGtSSEko1C6pI_2-5LWd3vW4PnaUIADtY",
  authDomain: "winterhack2024vani.firebaseapp.com",
  databaseURL: "https://winterhack2024vani-default-rtdb.firebaseio.com",
  projectId: "winterhack2024vani",
  storageBucket: "winterhack2024vani.appspot.com",
  messagingSenderId: "449046923985",
  appId: "1:449046923985:web:cbb6c9be9e9d2a4c2d93f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function UsingContext(props) {
  const db = getDatabase();

  const [log, setLog] = useState(false);
  const [profileName, setProfileName] = useState("");

  const { children } = props;
  const initialState = {
    books: [],
    added: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  //AGREGADO PARA LOCAL STORAGE

  // Guardar en localStorage
  const saveInLocalStorage = (added) => {
    localStorage.setItem("localSaved", JSON.stringify(added));
  };

  // Recuperar added del localStorage cuando el componente se monta
  useEffect(() => {
    const dataRecovered = localStorage.getItem("localSaved");
    if (dataRecovered) {
      const addedRecovered = JSON.parse(dataRecovered);
      if (addedRecovered.length > 0) {
        dispatch({
          type: "RECUPERAR_LIBROS",
          payload: addedRecovered,
        });
      }
    }
  }, []);

  // Guardar automáticamente en localStorage cada vez que cambie 'added'
  useEffect(() => {
    saveInLocalStorage(state.added);
  }, [state.added]);

  const bringBooks = async () => {
    console.log("bringBook");
    // const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");

    const starCountRef = ref(db, "Books/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data:", data);
      dispatch({
        type: "LISTAME_LIBROS",
        payload: data,
      }); //EL STRING SOLO FUNCIONA SI LO DECLARE EN UNA FUNCION ANTES.
    });
  };

  const addBook = (item) => {
    console.log("addBook");
    if (!bookIsAdded(item.name)) {
      dispatch({ type: "GUARDAME_LIBRO", payload: item });
    }
    console.log("carrito:", state.added);
  };

  const deleteBook = (item) => {
    console.log("deleteBook");
    dispatch({ type: "BORRAME_LIBRO", payload: item });
    // saveInLocalStorage(state.added);
    console.log("los libros que hay en el carrito:", state.added);
  };

  const bookIsAdded = (name) => {
    // if (state.books != null) {
    for (let i = 0; i < state.added.length; i++) {
      if (state.added[i].name == name) {
        return true;
      }
    }
  };
  // }

  const userIsLogged = () => {
    return log;
  };

  const profileInfo = () => {
    return profileName;
  };

  const logIn = (user, pass) => {
    signInWithEmailAndPassword(auth, user, pass)
      .then((userCredential) => {
        console.log("logueó bien!");
        // Signed in
        const pUser = userCredential.user;
        setLog(true);
        setProfileName(user);
        // policia(pUser);
        // ...
      })
      .catch((error) => {
        console.log("logueó mal!", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Usuario o contraseña incorrectos");
      });
  };

  //auth: herramienta de conexión
  const auth = getAuth();

  const { policia, guardarUsuario } = props;

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

  const logOut = () => {
    setLog(false);
  };

  const endCart = () => {
    dispatch({ type: "VACIAR_CARRITO", payload: [] });
  };

  const createUser = (user, pass) => {
    //auth: herramienta de conexión
    const auth = getAuth();

    //método:
    createUserWithEmailAndPassword(auth, user, pass)
      //me da las credenciales:
      .then((userCredential) => {
        // Signed up
        const pUser = userCredential.user;
        setLog(true);
        setProfileName(user);
        // guardarUsuario({ email: user.email, uid: user.uid });
        // policia(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error al crear el usuario");
        console.log(error);
        // ..
      });
  };

  return (
    <Context.Provider
      value={{
        bringBooks,
        addBook,
        bookIsAdded,
        deleteBook,
        saveInLocalStorage,
        userIsLogged,
        logIn,
        createUser,
        profileInfo,
        logOut,
        endCart,

        books: state.books,
        added: state.added,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default UsingContext;
