function BookCard() {
  const handleClick = () => {};
  return (
    <>
      <div className="divHome">
        <div className="divBook">
          <h1 className="h1Home">¡Preventa exclusiva!</h1>
          <h2>Precio lanzamiento: $20.000</h2>
          <img className="imgBook" src="./images/pickachu.png" alt="" />
        </div>
        <div className="divButton">
          <button onClick={handleClick} className="buttonBuy">
            COMPRAR
          </button>
        </div>
      </div>
    </>
  );
}

export default BookCard;
