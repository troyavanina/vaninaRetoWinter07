import { useState } from "react";
import { useContext } from "react";
import Context from "../context/Context";
import UsingContext from "../context/UsingContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Item(props) {
  const { name, image, price } = props;

  const { addBook, bookIsAdded } = useContext(Context);

  let isAdded = bookIsAdded(name);

  const navigate = useNavigate();

  const handleAdd = () => {
    addBook({ name: name, image: image, price: price });
    navigate("/shoppingCart");
    console.log(name, price);
  };

  let buttonDisplay;
  if (isAdded) {
    buttonDisplay = "buttonAddNone";
  } else {
    buttonDisplay = "buttonAdd";
  }

  return (
    <>
      <div className="divItemBook">
        <img className="imgBook" src={image} alt="" />
        <h4>{name}</h4>
        <h4>$ {price}</h4>
        <div className="divButton">
          <button onClick={handleAdd} className="buttonAdd">
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
