import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { UserContext } from "../../context/UserContext";

export default function TrainingContent() {
  const { skill, level } = useContext(SkillContext);
  const { persona } = useContext(UserContext);

  return (
    <div>
      <h2>{skill} Training</h2>
      <p>Level: {level}</p>
      <p>Persona: {persona}</p>
    </div>
  );
}