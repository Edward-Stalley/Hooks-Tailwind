import React from "react";

export default function Button() {
  return (
    <div>
      <button
        disabled={running ? true : false}
        onClick={handleRunning}
        className={`${running ? "bg-red-300" : "bg-slate-200"} text-slate-700 p-3 rounded `}
      >
        {running ? "Start Typing!" : "Start Game"}
      </button>
    </div>
  );
}
