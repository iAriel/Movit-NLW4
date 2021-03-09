import { useContext } from 'react';
import { ChallengessContext } from '../context/ChellengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile (){

    const {level} = useContext(ChallengessContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/iAriel.png" alt="Ariel Sobreira"/>
            <div>
                <strong> Ariel Sobreira</strong>
                <p>
                    <img src="icons/level.svg" alt="seta level"/>
                    Level {level}</p>
            </div>
        </div>
    );
}