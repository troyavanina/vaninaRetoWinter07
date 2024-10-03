import { useState } from "react";
import Unlogged from "../components/Unlogged";
import Summary from "../components/Summary";
import Context from "../context/Context";
import { useContext } from "react";
import UserInfo from "../components/UserInfo";

function Profile() {
  const { userIsLogged } = useContext(Context);

  let log = userIsLogged();

  return <>{!log ? <Unlogged></Unlogged> : <UserInfo></UserInfo>}</>;
}

export default Profile;
