import styles from '../styles/components/Profile.module.css';

export function Profile (){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/iAriel.png" alt="Ariel Sobreira"/>
            <div>
                <strong> Ariel Sobreira</strong>
                <p>
                    <img src="icons/level.svg" alt="seta level"/>
                    Level 1</p>
            </div>
        </div>
    );
}