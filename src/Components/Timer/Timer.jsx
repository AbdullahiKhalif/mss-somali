import React from 'react'
import styles from "./timer.module.scss"
const Timer = () => {
  return (
    <div className={styles.countdown}>
        <h1>VOTING ENDS IN</h1>
        <div className={styles.time}>
            <div className={styles.digit_text}>
                <span className={styles.digit}>08:</span>
                <span className={styles.text}>Days</span>
            </div>
            <div className={styles.digit_text}>
                <span className={styles.digit}>02:</span>
                <span className={styles.text}>Hours</span>
            </div>
            <div className={styles.digit_text}>
                <span className={styles.digit}>44:</span>
                <span className={styles.text}>Minites</span>
            </div>
            <div className={styles.digit_text}>
                <span className={styles.digit}>31</span>
                <span className={styles.text}>Seconds</span>
            </div>
        </div>
    </div>
  )
}

export default Timer