import React from 'react'
import styles from './Home.module.css'

const Home = () => {

    return (
        <>
            <div id={styles.container}>
                <section className={styles.hero}>
                    <div className="title">
                        <h1 className=
                        'bg-clip-text text-transparent bg-gradient-to-b from-accent-blue via-accent-purple via-accent-orange to-accent-yellow text-7xl italic'>Kyle Rachman</h1>
                        <h2 className={`text-3xl text-gray-300 ${styles.subhero}`}>Web Design and Development</h2>
                    </div>
                    <div className={styles.skills}>
                        <img src="/logos/HTML5_Badge.svg" alt="HTML logo" className={styles.skill}/>
                        <img src="/logos/CSS3_logo.svg" alt="CSS logo" className={styles.skill}/>
                        <img src="/logos/logo-javascript.svg" alt="Javascript logo" className={styles.skill}/>
                        <img src="/logos/Typescript_logo_2020.svg" alt="Typescript logo" className={styles.skill}/>
                        <img src="/logos/logo-python.svg" alt="Python logo" className={styles.skill}/>
                        <img src="/logos/Bootstrap_logo.svg" alt="Bootstrap logo" className={styles.skill}/>
                        <img src="/logos/Tailwind_CSS_Logo.svg" alt="Tailwind logo" className={styles.skill}/>
                        <img src="/logos/jquery-logo.svg" alt="jQuery logo" className={styles.skill}/>
                        <img src="/logos/flask.svg" alt="Flask logo" className={styles.skill}/>
                        <img src="/logos/mysql-logo.svg" alt="MySQL logo" className={styles.skill}/>
                        <img src="/logos/mongodb.svg" alt="MongoDB logo" className={styles.skill}/>
                        <img src="/logos/expressjs-icon.svg" alt="Express.js logo" className={styles.skill}/>
                        <img src="/logos/React-icon.svg" alt="React logo" className={styles.skill}/>
                        <img src="/logos/Node.js_logo.svg" alt="Node.js logo" className={styles.skill}/>
                        <img src="/logos/Amazon_Web_Services_Logo.svg" alt="AWS logo" className={styles.skill}/>
                        <img src="/logos/postman.svg" alt="Postman logo" className={styles.skill}/>
                        <img src="/logos/Mathematica_Logo.svg" alt="Mathematica logo" className={styles.skill}/>
                    </div>
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
        </>
    )
}

export default Home
