import React, { useState } from 'react';
import { motion } from 'framer-motion';


import img1 from '../assets/Leaders/YA.jpeg'
import img2 from '../assets/Leaders/DR.jpeg'
import img3 from '../assets/Leaders/VG.jpeg'
import img4 from '../assets/Leaders/RB.jpeg'
import img5 from '../assets/Leaders/SA.jpeg'
import img6 from '../assets/Leaders/ShiA.jpeg'
import img7 from '../assets/Leaders/ST.jpeg'


import styles from "../style";
// Import other images as needed

function Leaders() {
  const allIcons = [
    {
      image: img1,
      title: 'Yash Agarwal',
      education:"Chartered Accountant",
      description: 'Company Secretary (Prof-1grp(A)), B.Com',
      exp:''
    },
    {
      image: img2,
      title: 'Dr. Mahendra Kumar Goyal ',
      education:"ACA (Australia)",
      description: 'CPA, P.H.D, M.COM',
      exp:' Experience of 35+ years'
    },
    {
        image: img3,
        title: 'Vidhi Garg',
        education:"Fellow Chartered Accountant",
        description: 'All India Rank-32 (Year-2016) ,CS , B.Com ',
        exp:' Experience of 7+ years'
      },
      {
        image: img4,
        title: 'Rajesh Bairathi',
        education:"M.B.A (Finance)",
        description: 'B.Com ',
        exp:'Experience of 30+ years'
      },
      
      {
        image: img6,
        title: 'Shivani Agarwal',
        education:"Fellow Chartered Accountant",
        description: 'B.Com ',
        exp:'Experience of 10+ years '
      },
      {
        image: img7,
        title: 'Shafali Temani',
        education:"Company Secretary",
        description: 'LLB, M.Com ',
        exp:'Experience of 8+ years'
      },
      
   
  ];

 
  return (
    <section id='leaders' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className='flex flex-col'>
       <div className="w-full  flex sm:flex-row  flex-col items-center   sm:mb-10 mb-6 relative z-[1]" >
      <h2 className={styles.heading2}>
      Let's have a look at our   <br className="sm:block hidden" />   <span className="text-gradient">Leadership.</span>
      </h2>
     
    </div>
    {/* <div className="flex flex-wrap justify-center p-4">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-center border-2 border-gray-800 rounded-lg p-4 h-full">
            <motion.img
              src={icon.image}
              alt={icon.title}
              className="object-cover rounded-lg"
              style={{ width: "100px", height: "100px" }}
              
            />
            <h3 className="text-lg font-semibold text-white mt-2">{icon.title}</h3>
            <p className="text-gray-500 mt-2">{icon.description}</p>
          </div>
        </motion.div>
      ))}
    </div> */}


<div className="flex flex-wrap justify-center p-4">
  
      {allIcons.map((icon, index) => (
        
        <motion.div
          key={index}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}

        >
          <div className="flex flex-col justify-center items-center border-2 border-gray-800 rounded-lg p-2 h-full bg-[#212121]">
            <motion.img
              src={icon.image}
              alt={icon.title}
              className="object-fill rounded-lg"
              style={{ width: "210px", height: "250px" }}
             
            />
            <h3 className="text-lg font-semibold text-white mt-2">{icon.title}</h3>
            <h2 className="text-base font-bold text-[#FFA500] mt-2" >{icon.education}</h2>
            <p className="text-slate-400 mt-2" >{icon.description}</p>
            <p className="text-slate-400 mt-2">{icon.exp}</p>
          </div>
        </motion.div>
      ))}
      
    </div>
    </div>

    </section>
  );
}

export default Leaders;