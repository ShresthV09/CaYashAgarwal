import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full orange__gradient bottom-40" />

    <div className="w-full flex color-[#121212] justify-between items-center  flex-col   relative z-[1]">
      <h2 className={styles.heading2}>
        Get real <span className="text-gradient">Results</span>
      </h2>
      <div className="w-full ">
        <p className=" text-left max-w-[500px]   text-white text-2xl fontparaBuissness">
        We appreciate feedback from our customers
        </p>
      </div>
    </div>

    <div className="flex flex-wrap  sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
