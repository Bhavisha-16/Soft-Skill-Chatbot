import { createContext, useState } from "react";

export const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
    badge: null,
  });

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}