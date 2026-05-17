import Caret from "./Caret"
const Usertypings = ({
    userInput,
    className,
    words
}: {
    userInput: string;
    className?: string;
    words: string;
}) => {

    const typedCharacters = userInput.split("")
    return (

        <div className={className}>
            {typedCharacters.map((char, index) => {//遍历字符，用行内标签把他显示出来
                return <Character char={char} key={index} expected={words[index]} />
            })}
            <Caret />
        </div>


    )
}

const Character = ({ char, expected }: { char: string; expected: string }) => {

    const isCorrect = char === expected
    const isWhitespace = char === " "
    return (
        <span className=
            {cn({

                "dark:text-primary-500": isCorrect,

                "dark:text-red-500": !isCorrect && !isWhitespace,

                "dark:bg-red-500/50": isWhitespace && !isCorrect,

                "text-violet-900": !isCorrect && !isWhitespace,

                "text-pink-500": isCorrect,

                "bg-red-500/50": isWhitespace && !isCorrect,
            })}>
            {expected}
        </span>)

    function cn(classes: { [key: string]: boolean }) {
        return Object.entries(classes).filter(([, value]) => value).map(([key]) => key).join(" ")
    }

}





export default Usertypings