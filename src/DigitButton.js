import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.add_digit, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
