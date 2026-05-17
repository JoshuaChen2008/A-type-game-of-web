import useDarkMode from "./useDarkMode"
import { MdNightlight } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { useRef } from "react";


export const DarkModeToggle = () => {

    const { isDark, setIsDark } = useDarkMode()
    const toggleRef = useRef<HTMLButtonElement>(null)


    const handleToggleClick = () => {
        toggleRef.current?.blur()


        setIsDark(!isDark)
    }


    return (
        <button
            ref={toggleRef}
            className="fixed top-2 right-3 z-50 flex h-12 w-12  text-4xl"
            onClick={handleToggleClick}
        >
            {isDark ? < MdNightlight className="text-white" /> : <IoMdSunny />}
        </button >
    )
}
