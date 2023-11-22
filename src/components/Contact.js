import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.contact}>
            <h3>Contact Us</h3>
        </div>
        <div className={styles.container__block}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor.</p>
        </div>
        <form className={styles.contact__form}>
            <div className={styles.form__item}>
                <label for='name'>Name*</label>
                <input placeholder='name' type='text' name='name'/>
            </div>
            <div className={styles.form__item}>
                <label for='email'>Email*</label>
                <input placeholder='email' type='email' name='email'/>
            </div>
            <div className={styles.form__item}>
                <label for='Message'>Message*</label>
                <textarea name='Message'/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default Contact
