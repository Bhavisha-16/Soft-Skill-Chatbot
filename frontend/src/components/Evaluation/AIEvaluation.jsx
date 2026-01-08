import { evaluateByAI } from "../../services/api";

export default async function AIEvaluation(response) {
  return await evaluateByAI(response);
}