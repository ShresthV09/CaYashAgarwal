
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import emailjs from '@emailjs/browser';

import  { useRef } from 'react';
import { motion } from "framer-motion";
import img1 from '../assets/Services/dashboard.png'
import styles from "../style";
export const Contact = () => {
    
    const formInitialDetails = {
        name: '',
        organisation: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

  const form = useRef();

  const sendEmail = (e) => {
   
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_22qqpch', 'template_nvh7wim', form.current, 'ywu4iO3T1PCjPkYl5')
      .then((result) => {
        setButtonText("Sent !");
        setTimeout(()=>{
          setButtonText("Send");
        },3000)
        setStatus({ succes: true});
      }, (error) => {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      });
      
      setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect" >
      <Container>
        <Row className="align-items-center ColReverse">
          <Col size={12} md={6}>
          <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5 }}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                                                                    >
                <img src={img1} style={{borderRadius:"20px"}} className="imageContact"></img>
                </motion.div>
              
            
          </Col>
          <Col size={12} md={6}>
          <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5 }}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                                                                    >
                <h2 className={`${styles.heading2} inline`}>
        <span className="text-gradient mb-6">Contact </span> Us
      </h2>
                <form ref={form} onSubmit={sendEmail} className="mt-10">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="organisation"  value={formDetails.organisation}  placeholder="Organisation" onChange={(e) => onFormUpdate('organisation', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email"  value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone}  placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message}  placeholder="Enquiry Description" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                    status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
             
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}