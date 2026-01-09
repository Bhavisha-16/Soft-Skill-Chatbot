export function calculateScore(correct, total) {
  return Math.round((correct / total) * 100);
}