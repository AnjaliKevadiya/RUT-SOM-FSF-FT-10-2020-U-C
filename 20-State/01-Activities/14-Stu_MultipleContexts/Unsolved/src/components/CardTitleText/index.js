import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

function CardTitleText() {
  const { user } = useContext(UserContext);
  return <h2>{user.login}</h2>;
}

export default CardTitleText;