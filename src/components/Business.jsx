
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="w-16 h-16 rounded-full bg-dimBlue flex items-center justify-center">
      <img src={icon} alt="star" className="w-8 h-8 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h2 className="fontHeaderBuissness font-semibold text-[28px] text-gradient text-white text-xl leading-6 mb-3">
        {title}
      </h2>
      <ul className="font-normal text-white text-lg leading-6 ">
        {content.map((item, i) => (
          <li key={i} className="py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex  items-start flex-col`}>
      <h2 className={styles.heading2}>
        What do I get Access to ? <br className="sm:block hidden" />
      </h2>
      <p className={`fontparaBuissness font-normal text-white text-[22px] leading-[30.8px] max-w-[480px] mt-5`}>
        <ul className="space-y-4">
          <li className="">
        <p>  Work around<span className="text-[orange]"> like minded people </span>and from <span className="text-[orange]">like-minded mentors.</span>  </p>
          </li>
          <li className="">
         <p> We get our clients making money <span className="text-[orange]"> as quick as possible</span></p>
          </li>
          <li className=""> 
         <p> Assiting how to<span className="text-[orange]"> make money through action</span> by actually applying laws , not the textbook .</p>
          </li>
        </ul>
      </p>

     <a href="mailto:agarwalyashco@gmail.com"> <Button styles={`mt-10`}  /></a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
