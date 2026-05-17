import { useRef } from "react"
import { MdRefresh } from "react-icons/md"

interface RestartButtonProps {
    onRestart: () => void
    className?: string
}

const RestartButton =({onRestart:handleRestart,className,
}:RestartButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const handleClick = () => { 
        //先让按钮失去焦点
        buttonRef.current?.blur()
        //再执行重启逻辑
        handleRestart()
        //整体的处理逻辑为
       //先处理当前按钮自身的 DOM 小动作
        //再执行外部传进来的业务逻辑
    }

    return (
        < button
            ref={buttonRef}
            onClick={handleClick}
            className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
            //反引号是JavaScript的模板字符串语法，可以在字符串中嵌入变量和表达式
        >
            <MdRefresh className="w-6 h-6" />



        </button >
    )

}


export default RestartButton