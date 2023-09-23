import React from 'react'
import styles from "./Button.module.css"

function banner( {text}) {
  return (
    <div className={styles.banner}
    // your form has been sumbitted , please consider finishing all the form , so you can use the website
    >{text}</div>
  )
}

export default banner