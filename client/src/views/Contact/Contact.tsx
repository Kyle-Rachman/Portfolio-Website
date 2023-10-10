import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    const formInput: string = "px-[15px] py-[5px] bg-white text-black placeholder:text-black placeholder:font-light rounded-md"
    return (
        <div id={styles.container}>
            <div className={styles.contact}>
                <div className={styles.contactText}>
                    test
                </div>
                <form id={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className="font-semibold">Name *</label>
                        <input type="text" className={formInput} id="name" placeholder="Your name"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className="font-semibold">Email *</label>
                        <input type="email" className={formInput} id="email" placeholder="Your email"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className="font-semibold">Phone</label>
                        <input type="tel" className={formInput} id="phone" placeholder="Your phone number (optional)"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="help" className="font-semibold">How can I best help you? *</label>
                        <textarea className={formInput} id="help" rows={2} placeholder="What are you looking for from me?"></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="happy" className="font-semibold">What would make you happy in this project?</label>
                        <textarea className={formInput} id="happy" rows={2} placeholder="Share about the project goals. What does success look like? (optional)"></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="timeframe" className="font-semibold">Do you have a defined timeframe?</label>
                        <select className={formInput} id="timeframe" defaultValue={"none"}>
                            <option value="none">Not yet</option>
                            <option value="short">2-4 weeks</option>
                            <option value="medium">1-2 months</option>
                            <option value="long">2+ months</option>
                        </select>
                    </div>
                    <button type="submit" className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white font-bold'>Get In Touch</button>
                </form>
            </div>
            <div className={styles.moreInfo}>
                test
            </div>
        </div>
    )
}

export default Contact
