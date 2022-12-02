import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
// import { Textarea } from "@nextui-org/react";
import { setTimeout } from "timers";

export default function Home() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(3);
  const [running, setRunning] = useState(false);
  const [wordCount, setWordCount] = useState("");

  const handleRunning = function () {
    // setRunning((prevState) => !prevState);
    // console.log(running);
    setTimeRemaining(5);
    setRunning(true);
    setText("");
  };

  // const reset = function () {
  //   if (running === false && timeRemaining === 0) {
  //     console.log("reset");
  //     setWordCount("???");
  //   }
  // };

  const endGame = function () {
    setRunning(false);
    setWordCount(getWordCount(text));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const getWordCount = function (text) {
    const wordCountArr = text
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;

    return wordCountArr;
  };

  useEffect(() => {
    if (running && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
        console.log(timeRemaining);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, running]);

  return (
    <div className={styles.container}>
      <header>
        <h1 className=" mt-5 text-5xl py-10 justify-center  bg-white flex  text-black font-bold">Text Game</h1>
      </header>
      <main>
        <div>
          <div className=" grid  p-10 place-items-center mt-5 bg-slate-400 h-fit ">
            <textarea
              disabled={running ? false : true}
              onChange={handleChange}
              value={text}
              className={`${
                running ? "bg-slate-200" : "bg-red-300"
              } p-10 bg-slate-200 text-3xl text-slate-700 rounded w-4/5 h-64 `}
              placeholder="Type Here..."
            />
            <h4 className="my-10 text-slate-200 bg-slate-700 p-3 rounded">{`Time Remaining: ${timeRemaining} seconds`}</h4>

            {/* <button onClick={reset} className="mt-10 bg-slate-900 text-slate-100 p-3 rounded ">
              Reset
            </button> */}
            <h1 className="my-10 w-4/5 flex justify-center  bg-slate-300 text-slate-800 p-3 rounded">{`Word Count: ${
              timeRemaining === 0 ? wordCount : "???"
            }`}</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
