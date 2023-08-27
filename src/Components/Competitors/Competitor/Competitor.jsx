import React from 'react'
import styles from './competitor.module.scss';

const Competitor = ({competitor}) => {
  return (
    <div className={styles.competitor}>
        <div className={styles.info}>
            <span className={styles.name}>{competitor.FirstName}</span>
            <span className={styles.state}>{competitor.RepresentingState}</span>
            <span className={styles.vote_count}>{competitor.NumberofVotes}</span>
        </div>
    </div>
  )
}

export default Competitor