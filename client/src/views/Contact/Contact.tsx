import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ToggleOnScroll from '../../components/Navbar/ToggleOnScroll'
import styles from './Contact.module.css'

const Contact = () => {
    const [submittedStatus, setSubmittedStatus] = useState(false);
    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        phone: "",
        help: "",
        happy: "",
        timeframe: "None"
    })
    const [missing, setMissing] = useState({
        missingName: false,
        missingEmail: false,
        missingHelp: false
    })
    const formInput: string = "px-[15px] py-[5px] bg-white text-black placeholder:text-black placeholder:font-light rounded-md"
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formDetails.name && formDetails.email && formDetails.help) {
            setMissing({
                missingName: false,
                missingEmail: false,
                missingHelp: false
            })
            let response = await axios.post("http://localhost:8000/api/submitContactForm", {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: formDetails,
            })
            setSubmittedStatus(true)
            setFormDetails({
                name: "",
                email: "",
                phone: "",
                help: "",
                happy: "",
                timeframe: "None"
            })
        } else {
            if (!formDetails.name) {
                setMissing((prev) => ({...prev, missingName: true}))
            } else {
                setMissing((prev) => ({...prev, missingName: false}))
            }
            if (!formDetails.email) {
                setMissing((prev) => ({...prev, missingEmail: true}))
            } else {
                setMissing((prev) => ({...prev, missingEmail: false}))
            }
            if (!formDetails.help) {
                setMissing((prev) => ({...prev, missingHelp: true}))
            } else {
                setMissing((prev) => ({...prev, missingHelp: false}))
            }
        }
    }

    return (
        <div id={styles.container}>
            <div className={styles.contact}>
                <div className={styles.contactText}>
                    <h2 className='text-5xl font-semibold'>Want to work on solutions <span className='text-accent-purple'>together?</span></h2>
                    <p className='text-lg text-accent-yellow font-light mb-4'>|| Contact</p>
                    <p className='text-xl'>Fill in the form, or just send me an email at: <br /> <a className='text-accent-orange transition-color duration-500 hover:drop-shadow-accent-orange' href="mailto:kcrachman@gmail.com" target='_blank' rel="noopener" aria-label='Email'>kcrachman@gmail.com</a></p>
                </div>
                {!submittedStatus ?
                <form id={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className="font-semibold">Name *</label>
                        <input type="text" className={formInput} id="name" name="name" placeholder="Your name" value={formDetails.name} onChange={(e) => setFormDetails((prev) => ({...prev, name: e.target.value}))}/>
                        {
                            missing.missingName && <p className='text-md text-red-600'>Please add your name!</p>
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className="font-semibold">Email *</label>
                        <input type="email" className={formInput} id="email" name="email" placeholder="Your email" value={formDetails.email} onChange={(e) => setFormDetails((prev) => ({...prev, email: e.target.value}))}/>
                        {
                            missing.missingEmail && <p className='text-md text-red-600'>Please add an email!</p>
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className="font-semibold">Phone</label>
                        <input type="tel" className={formInput} id="phone" name="phone" placeholder="Your phone number (optional)" value={formDetails.phone} onChange={(e) => setFormDetails((prev) => ({...prev, phone: e.target.value}))}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="help" className="font-semibold">How can I best help you? *</label>
                        <textarea className={formInput} id="help" rows={2} name="help" placeholder="What are you looking for from me?" value={formDetails.help} onChange={(e) => setFormDetails((prev) => ({...prev, help: e.target.value}))}></textarea>
                        {
                            missing.missingHelp && <p className='text-md text-red-600'>Please add some details!</p>
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="happy" className="font-semibold">What would make you happy in this project?</label>
                        <textarea className={formInput} id="happy" rows={2} name="happy" placeholder="Share about the project goals. What does success look like? (optional)" value={formDetails.happy} onChange={(e) => setFormDetails((prev) => ({...prev, happy: e.target.value}))}></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="timeframe" className="font-semibold">Do you have a defined timeframe?</label>
                        <select className={formInput} id="timeframe" name="timeframe" value={formDetails.timeframe} onChange={(e) => setFormDetails((prev) => ({...prev, timeframe: e.target.value}))}>
                            <option value="None">Not yet</option>
                            <option value="2-4 weeks">2-4 weeks</option>
                            <option value="1-2 months">1-2 months</option>
                            <option value="2+ months">2+ months</option>
                        </select>
                    </div>
                    <button type="submit" className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white font-bold'>Get In Touch</button>
                </form> :
                <div>
                    <p className='text-4xl'>Thank you!</p>
                    <p className='text-2xl'>Your submission has been received!</p>
                </div>}
            </div>
            <div className={styles.moreInfo}>
                <ToggleOnScroll>
                    <div>
                        <h2 className='text-4xl font-semibold md:w-[20vw] drop-shadow-black'>You can also find me on...</h2>
                        <div className='flex flex-col mt-10 gap-4 content-start pl-10'>
                            <a className='drop-shadow-black transition-all duration-200 hover:text-black hover:drop-shadow-accent-blue w-[100%] font-bold' href="https://github.com/Kyle-Rachman" target='_blank' rel="noopener" aria-label='Github'>Github</a>
                            <a className='drop-shadow-black transition-colors duration-200 hover:text-black hover:drop-shadow-accent-blue w-[100%] font-bold' href="https://www.linkedin.com/in/kyle-rachman/" target='_blank' rel="noopener" aria-label='LinkedIn'>LinkedIn</a>
                        </div>
                    </div>
                </ToggleOnScroll>
                <ToggleOnScroll>
                    <div>
                        <h2 className='text-4xl font-semibold md:w-[30vw] drop-shadow-black'>If you want to find out more about me check the page below:</h2>
                        <button className='border-2 border-white p-2 transition-color duration-500 hover:text-black hover:border-black mt-10 drop-shadow-black hover:drop-shadow-accent-blue' onClick={() => navigate('/about')}>More about me</button>
                    </div>
                </ToggleOnScroll>
            </div>
        </div>
    )
}

export default Contact
