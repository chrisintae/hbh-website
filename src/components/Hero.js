import styles from '@styles/components/hero.module.scss'

const Hero = () => {
    return (
        <section className={`wrapper ${styles.hero}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.copyContainer}>
                    <h1>Discover what makes a home. Not just a house.</h1>
                    <p>Easily distinguish the amenities that matter most with a side-by-side comparison guide before you purchase your next home.</p>
                    <img className={styles.appStoreBadge} src="/App_Store_Badge.svg" alt="App Store Badge" />
                </div>
            </div>
        </section>
    )
}

export default Hero
