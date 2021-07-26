import styles from '@styles/components/card.module.scss'

const Card = ({ sub, headline }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <h4>{sub}</h4>
                <h3>{headline}</h3>
            </div>
        </div>
    )
}

export default Card
