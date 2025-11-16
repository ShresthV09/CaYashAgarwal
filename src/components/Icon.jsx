import React, { useState } from 'react';
import { motion } from 'framer-motion';


import img1 from '../assets/Services/bookkeeping.png'
import img2 from '../assets/Services/tax-calculate.png'
import img3 from '../assets/Services/individual-services.png'
import img4 from '../assets/Services/global-advisory.png'
import img5 from '../assets/Services/project-management.png'
import img6 from '../assets/Services/bitcoin .png'
import img7 from '../assets/Services/payables.png'
import img8 from '../assets/Services/yearend-accounting.png'
import img9 from '../assets/Services/travel.png'
import img10 from '../assets/Services/payroll .png'
import img11 from '../assets/Services/accounts-recivable.png'
import img12 from '../assets/Services/software.png'

import styles from "../style";
// Import other images as needed

function MyComponent() {
  const allIcons = [
    {
      image: img1,
      title: 'Accounting and Bookkeeping',
      description: 'Chart of Accounts Preparation, Invoices & Expenses posting.',
    },
    {
      image: img2,
      title: 'TAX Return Processing',
      description: 'Income Statement, Tax Calculation, Returns Preparation, Tax Submissions, etc.',
    },
    {
        image: img3,
        title: 'Individual Services',
        description: 'Personal services such as Personal tax return, ITIN, crypto-currency, foreign asset information etc',
      },
      {
        image: img4,
        title: 'Cross-Border Advisory',
        description: 'Overseas investment decisions, tax and regulatory aspects.',
      },
      {
        image: img5,
        title: 'Management Reporting',
        description: 'Income Statement, Cash Flow Statement, Profit & Loss Statements, KPI Indicators, etc.',
      },
      {
        image: img6,
        title: 'Cryptocurrency and Blockchain',
        description: 'Crypto Tax Advisory ,Compliances, Assessments Fema Compliances',
      },
      {
        image: img7,
        title: 'Accounts Payable',
        description: 'Bill.com, Dext Processing & Payment sheet updation, and analysis.',
      },
      {
        image: img8,
        title: 'Year-End Accounting',
        description: 'Improve your Bookkeeping methods, which will allow you to manage your business more efficiently',
      },
      {
        image: img9,
        title: 'Travel and Expense Claims',
        description: 'Expenses for a personal vehicle or public transportation Taxi Travel, Expense claims for Accommodation and Air Travel',
      },

      {
        image: img10,
        title: 'Payroll Processing',
        description: 'Payroll Sheet, Paycheck, Federal Dues, State Dues, Form 940, Form 941, etc.',
      },

      {
        image: img11,
        title: 'Accounts Receivable',
        description: 'Invoice Processing, Lodgement, Reconciliations & aging analysis, etc.',
      },

      {
        image: img12,
        title: 'Accounting Software Migration',
        description: 'Migration from Xero, QB online, Sage, Netsuite, etc.',
      },
    // Add more images as needed
  ];

  const [visibleIcons, setVisibleIcons] = useState(6);
  const showMoreIcons = () => {
    setVisibleIcons(prevVisibleIcons => prevVisibleIcons + 6);
  };

  return (
    <section id='services' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className='flex flex-col'>
       <div className="w-full  flex sm:flex-row  flex-col items-center   sm:mb-10 mb-6 relative z-[1]" >
      <h2 className={styles.heading2}>
      <span className="text-gradient ">Services</span> we provide 
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Experience <span className='text-[orange]'> Excellence </span>in every service we offer,<span className='text-[orange]'>  Tailored </span>to meet your<span className='text-[orange]'>  Unique needs</span> and surpass your <span className='text-[orange]'> Expectations</span>.
        </p>
      </div>
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
      {allIcons.slice(0, visibleIcons).map((icon, index) => (
        <motion.div
          key={index}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-center border-2 border-gray-800 rounded-lg p-4 h-full bg-[#212121]">
            <motion.img
              src={icon.image}
              alt={icon.title}
              className="object-cover rounded-lg"
              style={{ width: "75px", height: "75px" }}
              whileHover={{ scale: 1.2 }}
            />
            <h3 className="text-lg font-semibold text-white mt-2">{icon.title}</h3>
            <p className="text-gray-500 mt-2">{icon.description}</p>
          </div>
        </motion.div>
      ))}
      {visibleIcons < allIcons.length && (
        <div className="w-full text-center mt-4">
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded-lg"
            onClick={showMoreIcons}
          >
            See More
          </button>
        </div>
      )}
    </div>
    </div>

    </section>
  );
}

export default MyComponent;