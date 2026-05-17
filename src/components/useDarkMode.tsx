import { useEffect,useState } from "react"

const matchDark = "(prefers-color-scheme: dark)"





const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => window.matchMedia && window.matchMedia(matchDark).matches)
    //监听事件
    useEffect(
        () => {
            const media = window.matchMedia(matchDark)
            const handler = () => setIsDark(media.matches)
            media.addEventListener("change", handler)
            return () => media.removeEventListener("change", handler)

        }, []
    )

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    })

    return { isDark, setIsDark }

}

export default useDarkMode