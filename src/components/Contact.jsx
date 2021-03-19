import React from "react";
import { motion } from "framer-motion";
import "./contact.scss"
import * as emailjs from "emailjs-com";
import Flip from 'react-reveal/Flip';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_awdrflt",
        "template_fcleeep",
        e.target,
        "user_8WAGqaF5JX37wZJiO3WZ7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };


  
  return (
    <div  className='Contact'>
      <form className='formEmail' onSubmit={sendEmail}>
        <h2>Let's keep in touch!</h2>
        <div className='form-wrap'>
          <div className='form-name'>
            <input type='text' placeholder='Name' name='name' />
          </div>
          <div className='form-email'>
            <input type='email' placeholder='Enter Email' name='email' />
          </div>
          <div className='form-subject'>
            <input type='text' placeholder='subject' name='subject' />
          </div>
          <div className='form-text'>
            <textarea
              name='message'
              id=''
              cols='30'
              rows='10'
              placeholder=' your message'
            ></textarea>
          </div>
          <div className='form-submit'>
            <input type='submit' id='' cols='30' rows='10' value='Send' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
