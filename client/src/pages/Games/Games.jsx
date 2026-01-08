import styles from "./games.module.css";

export default function Games() {
    return (
        <section className={styles.games}>
            <h3>Available Games</h3>
            <div className={styles.gamesContainer}>
                <p>No games found!</p>
            </div>
        </section>
    );
}
