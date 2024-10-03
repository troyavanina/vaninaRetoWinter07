//TYPES (tipos de datos/acciones)
const LISTAME_LIBROS = "LISTAME_LIBROS";
const DAME_LIBRO = "DAME_LIBRO";
const GUARDAME_LIBRO = "GUARDAME_LIBRO";
const BORRAME_LIBRO = "BORRAME_LIBRO";
const RECUPERAR_LIBROS = "RECUPERAR_LIBROS";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_LIBROS:
      return { ...state, books: payload };

    case GUARDAME_LIBRO:
      // state.added.add(payload);
      return { ...state, added: [...state.added, payload] };

    case BORRAME_LIBRO:
      // for (let i = 0; i < state.added.length; i++) {
      //   if (state.added[i].name === payload.name) {
      //     state.added.splice(i, 1); // Elimina el elemento en la posición i
      //     break; // Detiene el bucle después de eliminar el elemento
      //   }
      // }
      return {
        ...state,
        added: state.added.filter((book) => book.name !== payload.name),
      }; // Crea un nuevo array sin el libro eliminado

    //AGREGADO PARA LOCAL STORAGE

    case RECUPERAR_LIBROS:
      return { ...state, added: payload };
  }
}
