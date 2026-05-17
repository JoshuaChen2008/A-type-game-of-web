
import './App.css'
import { DarkModeToggle } from './components/DarkModeToggle.tsx'
import RestartButton from './components/RestartButton.tsx'
import Results from './components/Results.tsx'
import Usertypings from './components/UserTypings.tsx'
import useEngine from './hooks/useEngine.ts'
import Timeout from './components/Timeout.tsx'
import { motion } from 'framer-motion';

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const duration = { duration: 0.5 }



//定义了一个叫 App 的 React 组件，并把它导出给别的文件用

function App() {

  const { state, words, timeLeft, typed, error, totalTyped, accuracyPercentage, restart } = useEngine()


  //这个组件最终要在页面上显示什么
  return (
    //React Fragment表示一个“透明包裹层”，不额外生成 HTML 标签
    <motion.ul initial={initial}
      animate={animate}
      transition={{ ...duration, delay: 0.5 }} >
      {state === "finish" && <Timeout />}


      <DarkModeToggle />
      <CoutdownTimer timeLeft={timeLeft} />

      <WordsContainer>
        <GenerateWords words={words} />
        <Usertypings
          userInput={typed} className="absolute inset-0" words={words} />
      </WordsContainer>


      <RestartButton
        className={"mx-auto mt-10 text-black dark:text-slate-500"}
        onRestart={() => {
          restart()
        }}
      />
      <Results
        errors={error}
        accuracyPercentage={accuracyPercentage}
        total={totalTyped}
        className="mt-10"
      />
    </motion.ul>
  )
}
const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className="relative text-3xl max-w-xl leading-relaxed break-all">
      {children}
    </div>
  )
}




const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-slate-500">{words}</div>
}

const CoutdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-pink-600 dark:text-primary-400  font-medium mb-3">Time:{timeLeft}</h2>
}

export default App
