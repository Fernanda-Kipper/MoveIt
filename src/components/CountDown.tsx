import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/CountDown.module.css'

import { CountDownContext } from '../contexts/CountDownContext'

export function CountDown(){
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountDown, 
        startCountDown } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinished ? (
                <button 
                disabled
                className={styles.countDownButton}
                >
                    Ciclo encerrado
                </button>
            ): (
                <>
                { isActive ? 
                    (
                        <button 
                        type="button" 
                        className={`${styles.countDownButton} ${styles.active}`}
                        onClick={resetCountDown}
                        >
                            Abandonar o ciclo
                        </button>
                    ):
                    (
                        <button 
                        type="button" 
                        className={styles.countDownButton}
                        onClick={startCountDown}
                        >
                            Iniciar um ciclo
                        </button>
                )}
                </>
            )}
        </div>
    )
}