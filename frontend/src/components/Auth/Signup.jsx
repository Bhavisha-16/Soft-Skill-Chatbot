import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Signup() {
  const { login } = useContext(AuthContext);

  return (
    <button onClick={() => login("newuser@email.com")}>
      Signup
    </button>
  );
}
