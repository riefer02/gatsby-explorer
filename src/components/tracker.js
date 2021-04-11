import React, { useRef, useEffect } from "react"
import * as styles from "./tracker.module.css"

export default function Tracker() {
  const tracker = useRef(null)
  console.log("tracker", tracker)

  const track = e => {
    console.log("tracking...")
    console.log(e)
    tracker.current.style.left = e.pageX + "px"
    tracker.current.style.top = e.pageY + "px"
    console.log("tracker", tracker.current.style.left)
  }

  useEffect(() => {
    console.log("effect", tracker)
  }, [])

  return (
    <div
      onMouseMove={e => {
        track(e)
      }}
      ref={tracker}
      className={styles.tracker}
    ></div>
  )
}
