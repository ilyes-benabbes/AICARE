import Navbar from "../components/Navbar";
import WHYSECTION from "../components/WHYSECTION";
import FEEDBACK from "../components/FEEDBACK";
import LEFTARROW from "../components/LEFTARROW";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.joshAppel0nkfvdcmX4UnsplasWrapper}>
        <img
          className={styles.joshAppel0nkfvdcmX4UnsplasIcon}
          alt=""
          src="/joshappel0nkfvdcmx4unsplash-3@2x.png"
        />
      </div>
      <img className={styles.landingPageChild} alt="" src="/polygon-1.svg" />
      <Navbar />
      <div className={styles.findThePerfectCareForYourParent}>
        <b className={styles.findThePerfect}>
          FIND THE PERFECT CARE FOR YOUR BELOVED ONES
        </b>
        <img
          className={styles.joshAppel0nkfvdcmX4UnsplasIcon1}
          alt=""
          src="/joshappel0nkfvdcmx4unsplash-1@2x.png"
        />
        <div className={styles.aicarecomIsTheContainer}>
          <span className={styles.aicarecomIsTheContainer1}>
            <p className={styles.aicarecomIsTheFirstToolT}>
              <span
                className={styles.aicarecomIsThe}
              >{`aicare.com is the first tool that uses       `}</span>
              <span className={styles.artificialIntelligence}>
                Artificial Intelligence
              </span>
              <span>
                {` to `}
                <span
                  className={styles.findTheBest}
                >{`find the best match between caregivers and caregivers `}</span>
              </span>
            </p>
            <p className={styles.p}>
              <span>
                <span className={styles.findTheBest}>{` `}</span>
              </span>
            </p>
          </span>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <button className={styles.button}>
          <div className={styles.buttonInner}>
            <div className={styles.logInWrapper}>
              <div className={styles.logIn}>{`find out more `}</div>
            </div>
          </div>
        </button>
        <img
          className={styles.expandRightIcon}
          alt=""
          src="/expand-right.svg"
        />
        <button className={styles.button1}>
          <div className={styles.buttonInner}>
            <div className={styles.logInWrapper}>
              <div className={styles.logIn}>{`Sign up for free `}</div>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.landingPageItem} />
      <div className={styles.whatDoWeProvideWrapper}>
        <b className={styles.whatDoWe}>WHAT DO WE PROVIDE ?</b>
      </div>
      <div className={styles.landingPageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frame18variant4Wrapper}>
            <div className={styles.frame18variant4}>
              <img className={styles.icon} alt="" src="/icon7.svg" />
              <b className={styles.lowestPricing}>Lowest pricing</b>
              <div
                className={styles.findTheBest1}
              >{`find the best fees , that suits both caretakers and caregivers and maybe fill the rest of this with text or add an arrow `}</div>
              <div className={styles.frame18variant4Child} />
            </div>
          </div>
          <WHYSECTION />
          <div className={styles.frame18variant41}>
            <div
              className={styles.findTheBest2}
            >{`find the best custommer support and shitload of thing with proffessionals on our website `}</div>
            <div className={styles.frame18variant4Item} />
            <b className={styles.customerSupport}>{`Customer support `}</b>
            <img
              className={styles.frame18variant4Inner}
              alt=""
              src="/vector-189.svg"
            />
          </div>
        </div>
      </div>
      <img className={styles.lineIcon} alt="" src="/line-3.svg" />
      <div className={styles.feedbackGroup}>
        <div className={styles.leftArrowWrapper}>
          <div className={styles.leftArrow}>
            <div className={styles.leftArrowChild} />
            <img
              className={styles.icons8LeftArrow6411}
              alt=""
              src="/icons8leftarrow64-1-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.whatDoesOurClientsSayAbouWrapper}>
          <b className={styles.whatDoesOur}>
            WHAT DOES OUR CLIENTS SAY ABOUT US ?
          </b>
        </div>
        <img className={styles.feedbackGroupChild} alt="" src="/line-5.svg" />
        <FEEDBACK />
        <div className={styles.leftArrowContainer}>
          <div className={styles.leftArrow1}>
            <LEFTARROW />
            <img
              className={styles.icons8LeftArrow64111}
              alt=""
              src="/icons8leftarrow64-1-11@2x.png"
            />
          </div>
        </div>
      </div>
      <Footer />
      <div className={styles.findTheCareYouDeserveFromParent}>
        <b className={styles.findTheCare}>
          Find the care you deserve from someone you trust
        </b>
        <button className={styles.button2}>
          <div className={styles.frameDiv}>
            <div className={styles.signUpContainer}>
              <div className={styles.signUp1}>join now</div>
            </div>
          </div>
        </button>
        <img
          className={styles.nationalCancerInstituteBxxgIcon}
          alt=""
          src="/nationalcancerinstitutebxxgtqew1m4unsplash-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LandingPage;
