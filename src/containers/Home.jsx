// import Logged from "../components/Logged";
// import Unlogged from "../components/Unlogged";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Context from "../context/Context";
import Item from "../components/Item";

function Home() {
  const navigate = useNavigate();
  const { books, bringBooks } = useContext(Context);

  useEffect(() => {
    bringBooks();
  }, []);

  return (
    <>
      <h1 className="h1Home">¡Nuevos Pokebooks! </h1>
      <div className="divHome">
        <div className="divBook">
          {books.map((book) => (
            <Item {...book} key={book.name} />
          ))}
          {/* <Item></Item> */}
        </div>
      </div>
    </>
  );
}

export default Home;
