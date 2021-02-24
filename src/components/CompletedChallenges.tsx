import { useContext } from 'react'
import styles from '../styles/components/CompletedChallenges.module.css'

import { ChallengeContext } from '../contexts/ChallengeContext'

export function CompletedChallenges(){
    const { challengesCompleted } = useContext(ChallengeContext)
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}