import { createContext, useState } from "react";

export const SkillContext = createContext();

export function SkillProvider({ children }) {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");

  return (
    <SkillContext.Provider value={{ skill, setSkill, level, setLevel }}>
      {children}
    </SkillContext.Provider>
  );
}