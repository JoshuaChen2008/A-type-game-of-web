import { useEffect, useState } from "react"


const START_TEXT = "Click me"
const THANKS_TEXT = "Thanks,been clicked!"





const TTest = () => {
    const [ButtonText, setButtonText] = useState(START_TEXT)
    const [isClicked, setClicked] = useState(false)

    function handleClick() {
        setClicked((prev)=>(!prev))
    }


    useEffect(() => {
        if (isClicked) {
            setButtonText(THANKS_TEXT)
        }
        else {
            setButtonText(START_TEXT)
        }
    }, [isClicked])
    

    return <button className="bg-purple-800" onClick={handleClick}>{ButtonText }</button>


}

export default TTest