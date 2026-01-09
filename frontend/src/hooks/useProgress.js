import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

export default function useProgress() {
  const { progress, setProgress } = useContext(ProgressContext);

  const updateProgress = (value = 5) => {
    setProgress((prev) => ({
      daily: Math.min(prev.daily + value, 100),
      weekly: Math.min(prev.weekly + value, 100),
      monthly: Math.min(prev.monthly + value, 100),
      yearly: Math.min(prev.yearly + value, 100),
      badge: prev.badge,
    }));
  };

  const assignBadge = (badgeName) => {
    setProgress((prev) => ({
      ...prev,
      badge: badgeName,
    }));
  };

  return {
    progress,
    updateProgress,
    assignBadge,
  };
}