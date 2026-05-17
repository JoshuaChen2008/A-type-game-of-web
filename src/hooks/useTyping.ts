import { useState, useRef, useEffect, useCallback, } from "react";

const isKeyAllowed = (code: string) => {
  //console.log(code);
  return (
    code == "Backspace" ||
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Space"
  );
};

const useTyping = (enabled: boolean) => {
  const [typed, setTyped] = useState<string>("");
  const [cursor, setCursor] = useState<number>(0);
 //const[commitedTypeTotal,setcommitedTypeTotal] = useState<number>(0)
  const totalTyped = useRef<number>(0);



  

  const keydownHandler = useCallback(({ key, code }: KeyboardEvent) => {
    if (!enabled || !isKeyAllowed(code)) return;
    //console.log(code);

    switch (key) {
      case "Backspace":
        setTyped((prev) => prev.slice(0, -1));
        //slice结束位置不包含进去，-1指最后一个字符
        setCursor((prev) => prev - 1);
        break;

      default:
        if (key.length === 1) {
          setTyped((prev) => prev.concat(key));
          setCursor((prev) => prev + 1);
          totalTyped.current += 1;
        }
        break;
    }
  }, [enabled]);

  const clearTyped = () => {
    setTyped("");
    setCursor(0);
  };
  
  //const commitTotalTyped = () => {
    
  //}

  const resetTotalTyped = () => {
    totalTyped.current = 0;
  };

  useEffect(() => {
      window.addEventListener("keydown", keydownHandler);
      //注册键盘监听

    return () => {
        window.removeEventListener("keydown", keydownHandler);
        //清理键盘监听，然后再创建新键盘监听
    };
  }, [keydownHandler]);

  return {
    typed,
    cursor,
    totalTyped:totalTyped.current,
    clearTyped,
    resetTotalTyped,
  };
};

export default useTyping;
