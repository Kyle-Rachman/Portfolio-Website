import React from 'react'
import { useNavigate } from 'react-router-dom'
import ToggleOnScroll from '../../components/Navbar/ToggleOnScroll'
import styles from './Contact.module.css'

const Contact = () => {
    const formInput: string = "px-[15px] py-[5px] bg-white text-black placeholder:text-black placeholder:font-light rounded-md"
    const navigate = useNavigate();
    
    return (
        <div id={styles.container}>
            <div className={styles.contact}>
                <div className={styles.contactText}>
                    <h2 className='text-5xl font-semibold'>Want to work on solutions <span className='text-accent-purple'>together?</span></h2>
                    <p className='text-lg text-accent-yellow font-light'>|| Contact</p>
                    <br />
                    <p className='text-xl'>Fill in the form, or just send me an email at: <br /> <a className='text-accent-orange transition-color duration-500 hover:drop-shadow-accent-orange' href="mailto:kcrachman@gmail.com" target='_blank' rel="noopener" aria-label='Email'>kcrachman@gmail.com</a></p>
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
                <ToggleOnScroll>
                    <div>
                        <h2 className='text-4xl font-semibold w-[20vw] drop-shadow-black'>You can also find me on...</h2>
                        <div className='flex flex-col mt-10 gap-4 content-start pl-10'>
                            <a className='drop-shadow-black transition-all duration-200 hover:text-black hover:drop-shadow-accent-blue w-[100%] font-bold' href="https://github.com/Kyle-Rachman" target='_blank' rel="noopener" aria-label='Github'>Github</a>
                            <a className='drop-shadow-black transition-colors duration-200 hover:text-black hover:drop-shadow-accent-blue w-[100%] font-bold' href="https://www.linkedin.com/in/kyle-rachman/" target='_blank' rel="noopener" aria-label='LinkedIn'>LinkedIn</a>
                        </div>
                    </div>
                </ToggleOnScroll>
                <ToggleOnScroll>
                    <div>
                        <h2 className='text-4xl font-semibold w-[30vw] drop-shadow-black'>If you want to find out more about me check the page below:</h2>
                        <button className='border-2 border-white p-2 transition-color duration-500 hover:text-black hover:border-black mt-10 drop-shadow-black hover:drop-shadow-accent-blue' onClick={() => navigate('/about')}>More about me</button>
                    </div>
                </ToggleOnScroll>
            </div>
        </div>
    )
}

export default Contact
