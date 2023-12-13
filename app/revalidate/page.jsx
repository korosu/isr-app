"use client";
import { revalidateHome } from "./actions";

function RevalidateButton() {
  return (
    <button
      className="bg-blue-400 px-4 py-2 hover:bg-blue-300"
      onClick={() => {
        revalidateHome();
      }}
    >
      Revalidate
    </button>
  );
}

export default RevalidateButton;
