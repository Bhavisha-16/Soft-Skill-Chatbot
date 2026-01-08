import { useContext } from "react";
import { ProgressContext } from "../../context/ProgressContext";

export default function ProgressTracker() {
  const { progress } = useContext(ProgressContext);

  return (
    <div>
      <p>Daily: {progress.daily}%</p>
      <p>Weekly: {progress.weekly}%</p>
      <p>Monthly: {progress.monthly}%</p>
      <p>Yearly: {progress.yearly}%</p>
    </div>
  );
}