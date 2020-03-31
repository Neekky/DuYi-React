import { useEffect } from "react"
import reset from "./resetScroll"

export default function useScroll(pathname) {
    console.log(pathname,'看看')
    useEffect(reset, [pathname])
}