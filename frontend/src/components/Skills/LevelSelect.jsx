import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { LEVELS } from "../../constants/levels";

export default function LevelSelect() {
  const { setLevel } = useContext(SkillContext);

  return LEVELS.map((lvl) => (
    <button key={lvl} onClick={() => setLevel(lvl)}>
      {lvl}
    </button>
  ));
}