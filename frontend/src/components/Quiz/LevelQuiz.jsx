export default function LevelQuiz({ onResult }) {
  return (
    <button onClick={() => onResult(true)}>
      Pass Quiz
    </button>
  );
}