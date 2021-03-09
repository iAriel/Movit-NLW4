import { useContext } from 'react';
import { ChallengessContext } from '../context/ChellengesContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengesBox(){
    const { activeChallenges, resetChallenges, completeChallenge } = useContext(ChallengessContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenges();
        resetCountdown();
    }

    return(
        <div className={ styles.challengesBoxContainter }>
            {activeChallenges ? (
                <div className={styles.challengesActive}>
                    <header>Ganhe {activeChallenges.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenges.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenges.description}</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className = {styles.challengesFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                        type="button"
                        className = {styles.challengessucceededButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={ styles.challengesNotActive }>
                <strong>Finalize um ciclo para receber um desafio.</strong>
                <p>
                    <img src="icons/level-up.svg" alt=""/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    );
}