import { useContext } from 'react';
import { ChallengessContext } from '../context/ChellengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){

    const { challengessCompleted } = useContext(ChallengessContext);

    return(
        <div className={styles.completedChalengesContainer}>
            <span>Desafios completos</span>
            <span>{challengessCompleted}</span>
        </div>
    );

}