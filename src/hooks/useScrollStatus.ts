import { useEffect, useState } from "react"

type ScrollStatus = {
  isAtTop: boolean
  isAtBottom: boolean
  scrollDirection: "up" | "down" | ""
}

const useScrollStatus = (): ScrollStatus => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true)
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | "">("")

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setIsAtTop(scrollTop === 0)
      setIsAtBottom(scrollTop + windowHeight >= documentHeight)

      if (scrollTop > lastScrollY) {
        setScrollDirection("down")
      } else if (scrollTop < lastScrollY) {
        setScrollDirection("up")
      }

      lastScrollY = scrollTop
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { isAtTop, isAtBottom, scrollDirection }
}

export default useScrollStatus
