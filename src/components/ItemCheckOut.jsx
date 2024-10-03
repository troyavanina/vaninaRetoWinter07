import { useState } from "react";
import { useContext } from "react";
import Context from "../context/Context";
import UsingContext from "../context/UsingContext";

function ItemCheckOut(props) {
  const { name, image, price } = props;

  const { addBook, bookIsAdded, deleteBook } = useContext(Context);

  let isAdded = bookIsAdded(name);

  const handleDelete = () => {
    deleteBook({ name: name, image: image, price: price });
    console.log("el libro que se borró del carrito: ", name, price);
  };

  const handleBuy = () => {
    // buyBook();
  };

  let buttonDisplay;
  if (isAdded) {
    buttonDisplay = "buttonAddNone";
  } else {
    buttonDisplay = "buttonAdd";
  }

  return (
    <>
      <div className="divItemCheckOut">
        <img className="imgBookMini" src={image} alt="" />
        {/* <p className="Cart">{name}</p>
        <p className="Cart">$ {price}</p>
        <div className="divButton">
          <img
            className="iconDelete"
            src="./images/deleteIcon.png"
            alt=""
            onClick={handleDelete}
          /> */}
      </div>
    </>
  );
}

export default ItemCheckOut;
