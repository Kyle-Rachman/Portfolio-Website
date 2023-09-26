import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div id={styles.container}>
            <section className={styles.hero}>
                <h1 className=
                'bg-clip-text text-transparent bg-gradient-to-b from-accent-blue via-accent-purple via-accent-orange to-accent-yellow text-7xl italic'>Kyle Rachman</h1>
                <h2 className={`text-3xl text-gray-300 ${styles.subhero}`}>Web Design and Development</h2>
            </section>
            <section className={styles.about}>
                <p>test</p>
            </section>
            <section className={styles.work}>
                <p>test</p>
            </section>
            <section className={styles.contact}>
                <p>test</p>
            </section>
        </div>
    )
}

export default Home
