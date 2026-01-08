import PersonaSelect from "../components/Persona/PersonaSelect";
import SkillSelect from "../components/Skills/SkillSelect";
import LevelSelect from "../components/Skills/LevelSelect";

export default function Dashboard() {
  return (
    <>
      <PersonaSelect />
      <SkillSelect />
      <LevelSelect />
    </>
  );
}