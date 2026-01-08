import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function PersonaSelect() {
  const { setPersona } = useContext(UserContext);

  return (
    <>
      <button onClick={() => setPersona("Student")}>Student</button>
      <button onClick={() => setPersona("Job Seeker")}>Job Seeker</button>
      <button onClick={() => setPersona("Working Professional")}>
        Working Professional
      </button>
    </>
  );
}