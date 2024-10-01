import Context from "./Context";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";
function UsingContext(props) {
  const { children } = props;
  const estadoInicial = {
    //necesito que tenga un estado inicial de datos
    // pokemones: [{ name: "pikachu", url: "" }],
    // favoritos: [],
  };

  //El state:
  //Es una variable que almacena el estado actual de tu componente en un momento dado. El valor de state puede ser cualquier tipo de dato: un número, un string, un booleano, un array, un objeto, etc.
  //dispatch:
  //Es una función que se utiliza para enviar acciones al reducer. Las acciones son objetos que tienen al menos una propiedad llamada type que describe qué acción se debe ejecutar.
  //El reducer:
  //Es una función pura que toma dos argumentos: el estado actual (state) y una acción (action). Basándose en la action, el reducer devuelve un nuevo estado.
  //El initialState:
  //Es el estado inicial que se le pasa a useReducer cuando el componente se monta por primera vez. Define los valores por defecto del estado.

  const [state, dispatch] = useReducer(Reducer, estadoInicial);
  // const saludar = (nombre) => {
  //   alert("hola " + nombre);
  // };

  // const traemePokemones = async () => {
  //   console.log("traemePokemones");
  //   const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  //   dispatch({
  //     type: "LISTAME_POKEMONES",
  //     payload: res.data.results,
  //   }); //EL STRING SOLO FUNCIONA SI LO DECLARE EN UNA FUNCION ANTES.
  // };

  // const guardamePokemon = (item) => {
  //   console.log("guardamePokemon");
  //   dispatch({ type: "GUARDAME_POKEMON", payload: item });
  //   console.log("favoritos:", state.favoritos);
  // };

  return (
    <Context.Provider
      value={
        {
          // saludar,
          // traemePokemones,
          // guardamePokemon,
          // pokemones: state.pokemones,
          // favoritos: state.favoritos,
        }
      }
    >
      {children}
    </Context.Provider>
  );
}

export default UsingContext;
