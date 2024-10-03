import { useState } from "react";
import Unlogged from "../components/Unlogged";
import Summary from "../components/Summary";
import Context from "../context/Context";
import { useContext } from "react";

function CheckOut() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { userIsLogged } = useContext(Context);

  let log = userIsLogged();

  return <>{!log ? <Unlogged></Unlogged> : <Summary></Summary>}</>;
}

export default CheckOut;
