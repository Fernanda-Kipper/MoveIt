import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Challenges from '../../challenges.json'
import { LevelUpModal } from '../components/levelUpModal'

interface ChallengeProviderProps{
    children: ReactNode,
    level: number;
    currentExperience: number,
    challengesCompleted: number
}

interface ChallengeContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void,
    startNewChallenge: () => void,
    activeChallenge: {
        type: "body" | "eye",
        description: string,
        amount: number
    },
    resetChallenge: ()=>void;
    experienceToNextLevel: number;
    completeChallenge: ()=> void;
    closeLevelUpModal: ()=>void;
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ children, ...rest }: ChallengeProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModal, setIsLevelUpModal] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(()=>{
        Notification.requestPermission()
    }, [])

    useEffect(()=>{
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [level, currentExperience, challengesCompleted])

    function levelUp(){
        setLevel(level + 1)
        setIsLevelUpModal(true)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * Challenges.length)
        const challenge = Challenges[randomChallengeIndex]
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === "granted"){
            new Notification('Novo desafio! 🎉🎉', {
                body: `Valendo ${challenge.amount} xp`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    function closeLevelUpModal(){
        setIsLevelUpModal(false)
    }

    return(
        <ChallengeContext.Provider value={{
        level, 
        levelUp, 
        currentExperience, 
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal
        }}>
            {children}
            {
                isLevelUpModal && <LevelUpModal/>
            }
        </ChallengeContext.Provider>
    )
}