
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/CledirFL.png" alt="Kelton Cabral"/>
            <div>
                <strong>Kelton Cabral</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}
