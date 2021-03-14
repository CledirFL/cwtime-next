import { createContext, ReactNode, useState } from 'react'
import challenges from "../../challenge.json";

interface ChallengeProviderProps {
    children: ReactNode
}

interface ChallengeProps {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: ChallengeProps;
    levelUp: () => void;
    startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);


    function levelUp() {
        setLevel(level + 1);
    }


    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}