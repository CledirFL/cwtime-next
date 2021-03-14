import { createContext, ReactNode, useState } from 'react'

export const ChallengesContext = createContext({})

interface ChallengeProviderProps {
    children: ReactNode
}

export function ChallengesProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);


    function levelUp() {
        setLevel(level + 1);
    }


    function startNewChallenge() {
        console.log("new challege")
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}