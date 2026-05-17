import { useState, useMemo } from "react";

const countError = (actual: string, expected: string) => {
  return actual.split("").reduce((error, char, index) => {
    return char != expected[index] ? error + 1 : error;
  }, 0);
};
const useError = (typed: string, words: string) => {
  const [committedErrors, setCommitedErrors] = useState<number>(0);

  const currentErrors = useMemo(() => {
    return countError(typed, words);
  }, [typed, words]);
  //用useMemo缓存计算的某个结果

  const commitErrors = () => {
    setCommitedErrors((prev) => prev + currentErrors);
  };

  const resetError = () => {
    return setCommitedErrors(0);
  };

  return {
    error: committedErrors + currentErrors,
    commitErrors,
    resetError,
  };
};

export default useError;
