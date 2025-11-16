import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import  linkedin  from "../assets/SocialMedia/linkedin.png";


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
      <h1 className="text-white text-[30px] font-bold  tracking-wide Logo_text ">
        CA Yash Agarwal
      </h1>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        Money Making & Saving is an addicting formula when you pay attention to our experts. 
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        
          <div  className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Work Office(Australia)
            </h4>
            <ul className="list-none mt-4">
             
                <li
                 
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                   "mb-4"
                  }`}
                >
                56 Tralee Circuit<br className="sm:block hidden" />
Narre Warren, Victoria 3805<br className="sm:block hidden" />
Melbourne, Australia<br className="sm:block hidden" />+61 403507432
                </li>
             
            </ul>
          </div>
          <div  className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Work Office(India)
            </h4>
            <ul className="list-none mt-4">
             
                <li
                 
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                   "mb-4"
                  }`}
                >
               67, Bhragu Nagar Ajmer Road , <br className="sm:block hidden" />  Jaipur 302021 <br className="sm:block hidden " /> 9587807070
                </li>
               
            </ul>
          </div>
          {/* <div  className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Other Links
            </h4>
            <ul className="list-none mt-4">
             
                <li
                 
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                   "mb-4"
                  }`}
                >
                Address
                </li>
                <li
                 
                 className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  "mb-4"
                 }`}
               >
               Address
               </li>
               <li
                 
                 className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  "mb-4"
                 }`}
               >
               Address
               </li>
             
            </ul>
          </div> */}
        
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white Shresth_Link inline">
        Copyright Ⓒ 2023 . All Rights Reserved  <span className="text-[orange]"> AGARWAL YASH & CO</span>
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
