import { getAuth, signOut } from "firebase/auth";
import Context from "../context/Context";
import Unlogged from "./Unlogged";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCart from "./ItemCart";
import ItemCheckOut from "./ItemCheckOut";

function Summary(props) {
  const { added, endCart } = useContext(Context);

  // useEffect(() => {
  //   // bringBooks();
  //   console.log("ver que llega al carrito: ", added);
  // }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const handleEnd = () => {
    endCart();
    navigate("/compraFinalizada");
  };

  // const handleCheckOt = () => {
  //   navigate("/checkOut");
  // };

  let sum = 0;
  for (let i = 0; i < added.length; i++) {
    sum += parseInt(added[i].price);
  }

  // const { policia, usuario } = props;

  // const unlogged = () => {
  //   console.log("hay un problema aca");
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       policia(false);
  //       //Sign-out successful.
  //     })
  //     .catch((error) => {
  //       console.log("hay un error:", error);
  //       // An error happened.
  //     });
  //   policia(false);

  return (
    <>
      <div className="divShoppingCart">
        <h1 className="h1Home">¡Ultimo paso! </h1>
        <h2 className="h1Home">Esto es lo que vas a comprar:</h2>
        <div className="divListSummary">
          {added.length > 0 ? (
            added.map((book) => <ItemCheckOut {...book} key={book.name} />)
          ) : (
            <p>No hay libros en tu carrito</p>
          )}
        </div>
        {added.length > 0 && (
          <div className="divCart">
            <h2 className="h2Total">Total: $ {sum}</h2>
            <div className="divCartButtons">
              <button className="buttonGoHome" onClick={handleBack}>
                SEGUIR COMPRANDO
              </button>
              <button className="buttonAdd" onClick={handleEnd}>
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <h1>Hola {usuario.email}</h1>
      <button onClick={unlogged}>Desloguear</button> */}
    </>
  );
}

export default Summary;
