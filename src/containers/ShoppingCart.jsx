import { useEffect, useState, useContext } from "react";
import Context from "../context/Context";
import ItemCart from "../components/ItemCart";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const { added } = useContext(Context);

  useEffect(() => {
    // bringBooks();
    console.log("ver que llega al carrito: ", added);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  let sum = 0;
  for (let i = 0; i < added.length; i++) {
    sum += parseInt(added[i].price);
  }

  return (
    <>
      <div className="divShoppingCart">
        <h1 className="h1Home">Este es tu carrito de compras</h1>
        <div className="divList">
          {added.length > 0 ? (
            added.map((book) => <ItemCart {...book} key={book.name} />)
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
              <button className="buttonAdd">FINALIZAR COMPRA</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
