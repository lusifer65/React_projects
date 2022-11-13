import React from 'react'

import '../styles/Contact.scss'
const Contact = () => {
  return (
    <>
        <div className="contactus">
        <main>
            <h1>Contact Us</h1>
            <form action="#" method="get">
                <label htmlFor="name">Name</label>
                <input type="text" name="username" id="name" placeholder='Enter your name'/>
                <label htmlFor="email">Email</label>
                <input type="email" name="Email" id="email" placeholder='Enter your Email' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="4" placeholder='Message'/>
                <button type="submit">Send</button>
            </form>
        </main>
        </div>
    </>
  )
}

export default Contact