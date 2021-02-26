import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css'

import { ChallengeContext } from '../contexts/ChallengeContext'
import { CountDownContext } from '../contexts/CountDownContext';

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext)
    const { resetCountDown } = useContext(CountDownContext)

    function handleChallengeSucceeded(){
        completeChallenge()
        resetCountDown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        resetCountDown()
    }

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`}/>
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button
                            type='button'
                            onClick={handleChallengeFailed}
                            className={`${styles.challengeButton} ${styles.buttonFailed}`}
                            >
                                Falhei
                            </button>
                            <button
                            type='button'
                            onClick={handleChallengeSucceeded}
                            className={`${styles.challengeButton} ${styles.buttonSucceeded}`}
                            >
                                Completei
                            </button>
                        </footer>
                    </div>
                )
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber um desafio
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    )
}