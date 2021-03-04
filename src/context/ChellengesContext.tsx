import { createContext, useState, ReactNode } from 'react';
import challengess from '../../challenges.json';

interface Challenges{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengessContextData{
    level: number;
    currentExperience: number;
    challengessCompleted: number;
    activeChallenges: Challenges;
    experienceToNextLevel: number,
    levelUp: () => void;
    startNewChallenges: () => void;
    resetChallenges: () => void;
}

interface ChallengessProviderProps{
    children: ReactNode;
}

export const ChallengessContext = createContext({} as ChallengessContextData)

export function ChallengessProvider({children}: ChallengessProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengessCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenges, setActiveChallenges] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  
    function levelUp(){
      setLevel(level + 1);
    }

    function startNewChallenges(){
        const randomChallengesIndex = Math.floor(Math.random() * challengess.length);
        const challenges = challengess[randomChallengesIndex];

        setActiveChallenges(challenges);
    }

    function resetChallenges(){
        setActiveChallenges(null)
    }
    return(
        <ChallengessContext.Provider 
            value={{
                level, 
                currentExperience, 
                challengessCompleted, 
                experienceToNextLevel,
                levelUp,
                startNewChallenges,
                activeChallenges,
                resetChallenges
            }}
        >
            {children}
        </ChallengessContext.Provider>
    )
}