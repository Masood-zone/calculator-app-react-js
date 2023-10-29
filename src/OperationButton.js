import { ACTIONS } from "./App";

export default function OperationButton({ operation, dispatch }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.choose_operation, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
