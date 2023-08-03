import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { addContact } from '../services/api'
import Success from '../components/Success'

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [required, setRequired] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && message) {
      addContact(name, email, message)
        .then((response) => {
          console.log(response)
          setShowSuccess(true)
          setTimeout(() => {
            setShowSuccess(false)
          }, 2000)
          setName("")
          setEmail("")
          setMessage("")
        })
        .catch((error) => {
          console.log(error)
        })
        setRequired(false)
    } else {
      setRequired(true)
    }
  }
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-screen bg-[url('../public/contactuspic.jpg')] bg-cover bg-no-repeat bg-fixed">
          <div className="bg-black bg-opacity-50 w-full h-screen flex flex-col items-center justify-center text-white">
            <h1 className="font-semibold text-2xl md:text-5xl w-3/4 md:w-1/2 text-center md:tracking-tighter text-white">
              <span className="font-serif">" </span>
              REACH OUT TO US ABOUT JOB DATA SOFTWARE
              <span className="font-serif"> "</span>
            </h1>
            <p className="w-3/4 md:w-1/2 text-left mt-8 leading-7">We are more than happy to assist you with any queries you might be having about the software in general. We would also be
              glad to answer questions that would make your experience smooth and enjoyable today and in the long-run. Our assistants are always
              available to offer informed guidance as as needs arise.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 bg-gray-900 text-white p-8">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl md:text-4xl mb-4 text-white">Get in Touch</h1>
            <p className="mb-4 w-11/12 md:w-1/2 text-center">Do you have any inquiry or question? Our team is ready to assist you</p>
            <form action="" method="post" className="w-11/12 md:w-3/4 flex flex-col">
              <label htmlFor="firstAndLastName" className="mb-2">Name:</label>
              <input
                type="text"
                name="firstAndLastName"
                id="firstAndLastName"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border rounded mb-6 w-full h-12 text-black p-3 outline-none"
              />
              <label htmlFor="email" className="mb-2">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border rounded mb-6 w-full h-12 text-black p-3 outline-none"
              />
              <label htmlFor="firstAndLastName" className="mb-2">How can we help?</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                value={message}
                className="border w-full mb-6 text-black p-3 rounded outline-none"
                onChange={e => setMessage(e.target.value)}
              />
              {required && <p className='text-red-500'>All fields are required *</p>}
              <button onClick={(e) => handleSubmit(e)} type="submit" className="mt-4 bg-[#F4ECC2] text-black h-12 hover:bg-[#e9dea9] hover:text-white rounded outline-none focus:outline-none">SUBMIT</button>
            </form>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14987.06700871494!2d57.5624505!3d-20.1020349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5522a5ca9c1f%3A0x3bdb9ec034be93fa!2sAfrican%20Leadership%20College!5e0!3m2!1sen!2smu!4v1688651359672!5m2!1sen!2smu"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map direction to ALC"
              className="rounded h-[50vh] md:h-full"
            />
          </div>
        </div>
      </div>
      {showSuccess && <Success />}
      <Footer />
    </>
  )
}

export default Contact