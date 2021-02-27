import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ChallengeContext } from "./ChallengeContext"

interface CountDownContextData{
    minutes: number,
    seconds: number,
    isActive: boolean,
    hasFinished: boolean,
    startCountDown: ()=>void,
    resetCountDown: ()=>void
}

interface CountDownProviderProps{
    children: ReactNode
}

let countDownTimeout : NodeJS.Timeout;

export const CountDownContext = createContext({} as CountDownContextData)

export function CountProvider({ children } : CountDownProviderProps){
    const { startNewChallenge } = useContext(ChallengeContext)
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setTime(25 * 60)
        setHasFinished(false)
    }

    useEffect(()=>{
        if (isActive && time > 0){
            countDownTimeout = setTimeout(()=>{
                setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time === 0){
            setIsActive(false)
            setHasFinished(true)
            startNewChallenge()
        }
    }, [isActive, time])

    return(
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    )
}