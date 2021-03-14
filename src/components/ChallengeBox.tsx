import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css"

function ChallengeBox() {
    const contexData = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    return (
        <div className={styles.container}>
            { hasActiveChallenge ?
                (<div className={styles.active} >
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.failedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.succeededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>)
                :
                (
                    <div className={styles.notActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export default ChallengeBox;