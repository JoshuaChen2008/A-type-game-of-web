import { useEffect, useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./UseCountdownTimer";
import useTyping from "./useTyping";
import useError from "./useError";

export type State = "start" | "run" | "finish";
const initialTime = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");

  const { timeLeft, resetCountdown, startCountdown } =
    useCountdownTimer(initialTime);

  const { typed, clearTyped, resetTotalTyped, totalTyped } = useTyping(
    state != "finish",
  );
  //清除state状态
  const resetState = () => {
    return setState("start");
  };

  //useWords
  const { words, updateWords } = useWords(6);

  //error、accuary、typed的计算

  const { error, resetError, commitErrors } = useError(typed, words);

  const accuracyPercentage =
    totalTyped > 0 ? ((totalTyped - error) / totalTyped) * 100 : 0;

  //开始敲击时候，开始计时
  useEffect(() => {
    if (state === "start" && typed.length > 0) {
      setState("run");
      startCountdown();
    }
  }, [typed, state, startCountdown]);

  //当倒计时结束

  useEffect(() => {
    if (timeLeft === 0) {
      setState("finish");
    }
  }, [timeLeft]);

  //当一组单词敲完就更新单词

  useEffect(() => {
    if (typed.length === words.length) {
      commitErrors();
      updateWords();
      clearTyped();
      // resetTotalTyped()
    }
  });

  const restart = () => {
    (resetCountdown(),
      resetError(),
      updateWords(),
      resetState(),
      resetTotalTyped(),
      clearTyped());
  };

  //点击重启button更换单词，重置计时器，重置输入状态，重置错误数，重置正确率等

  return {
    state,
    words,

    timeLeft,
    typed,

    totalTyped,
    error,

    accuracyPercentage,

    restart,
  };
};

export default useEngine;
