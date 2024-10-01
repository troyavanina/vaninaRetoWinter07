//TYPES (tipos de datos/acciones)
// const LISTAME_POKEMONES = "LISTAME_POKEMONES";
// const DAME_POKEMON = "DAME_POKEMON";
// const GUARDAME_POKEMON = "GUARDAME_POKEMON";

//El switch es una estructura de control en JavaScript que permite ejecutar diferentes bloques de código según el valor de una expresión. Funciona de manera similar a una serie de declaraciones if y else if, pero es más limpio y legible cuando tienes múltiples condiciones que comparar con un solo valor.
// Componentes del switch:
// expresión: Es el valor que se va a comparar.
// case: Cada case especifica un valor que, si coincide con la expresión, ejecutará el código que le sigue.
// break: Detiene la ejecución de más case. Si se omite, el programa continuará ejecutando el siguiente bloque case, incluso si no coincide (esto se llama "fallthrough").
// default: Es opcional y se ejecuta si ningún caso coincide con la expresión.

// En el contexto de React y la gestión del estado, como en un reducer, el término payload se refiere a los datos adicionales que se envían junto con una acción. Estos datos representan la información que el reducer necesita para actualizar el estado.
// ¿Qué es un payload?
// El payload es el contenido o los datos que acompañan una acción y se utilizan para modificar el estado en el reducer.
// Se incluye en el objeto action que se pasa al dispatch.
// Mientras que action.type describe el tipo de acción a realizar, el payload contiene los datos específicos necesarios para realizar esa acción.

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (
    type
    // // case LISTAME_POKEMONES:
    //   return { ...state, pokemones: payload };

    // case GUARDAME_POKEMON:
    //   return { ...state, favoritos: [...state.favoritos, payload] }; //aca el payload es el pokemon nuevo
  ) {
  }
}
