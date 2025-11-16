import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import MyComponent from "./components/Icon";
import { Contact } from "./components/Forms";
import Leaders from "./components/Leaders";

const App = () => (
  <div className="bg-[#121212] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#121212] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-[#121212] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        {/* <div className="h-20 w-full"></div> */}
        <Business />

        <Leaders/>
        <Testimonials />
        <MyComponent/>
        <Contact/>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
