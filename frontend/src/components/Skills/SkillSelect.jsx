import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { SKILLS } from "../../constants/skills";

export default function SkillSelect() {
  const { setSkill } = useContext(SkillContext);

  return SKILLS.map((s) => (
    <button key={s} onClick={() => setSkill(s)}>
      {s}
    </button>
  ));
}