import { useState, useCallback } from "react";
import Tabs from "../components/Tabs";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProfileCard from "./profileCard";
/* 
plan :  for the caregiver

1. create a card componenet  : done
2. create the your patients( users ) components done . 
3. your inbox component done . 
4. the certificats component done 
5. the calendar

*/
const LoggedInCaregiverIfProfile = () => {
  const [isTabsOpen, setTabsOpen] = useState(false);
  const navigate = useNavigate();

  const openTabs = useCallback(() => {
    setTabsOpen(true);
  }, []);

  const closeTabs = useCallback(() => {
    setTabsOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "my caregiver profile" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <>
      <div className={styles.loggedInCaregiverIfProfile}>
        <div className={styles.navs}>
          <div className={styles.logo}>
            <img className={styles.logoChild} alt="" src="/star-1.svg" />
            <div className={styles.aicare}>aicare</div>
            <div className={styles.logoItem} />
          </div>
          <div className={styles.navLinks}>
            <div className={styles.home}>Home</div>
            <div className={styles.aboutParent}>
              <div className={styles.home}>About</div>
              <div className={styles.akarIconschevronDown} />
            </div>
            <div className={styles.home}>contact us</div>
            <div className={styles.myContractsWrapper}>
              <div className={styles.home}>My contracts</div>
            </div>
            <img className={styles.icon} alt="" src="/icon3.svg" />
            <img
              className={styles.icon1}
              alt=""
              src="/icon4.svg"
              onClick={openTabs}
            />
          </div>
          <div className={styles.t}>t</div>
        </div>
        <b className={styles.yourPatients}>your patients :</b>
        <b className={styles.yourProfile}>your profile :</b>
        <b className={styles.yourCertificats}>your certificats :</b>
          <ProfileCard></ProfileCard>
        <div className={styles.projListParent}>
          <div className={styles.projList}>
            <div className={styles.projListChild} />
            <div className={styles.copy}>
              <div className={styles.mainCopy}>
                <div className={styles.bookApp}>Patient A</div>
                <div className={styles.label}>
                  <img
                    className={styles.loadingAnimationIcon}
                    alt=""
                    src="/loading-animation@2x.png"
                  />
                  <div className={styles.techConsultant}>Tech Consultant</div>
                </div>
              </div>
              <div className={styles.bookTechnologies}>1 book Technologies</div>
            </div>
            <div className={styles.march2019}>March 2019 - March 2019</div>
            <div className={styles.linkIcon}>
              <div className={styles.techConsultant}>Link</div>
              <img className={styles.moreIcon} alt="" src="/icon5.svg" />
            </div>
            <button className={styles.linkIcon1}>
              <div className={styles.checkContract}>check contract</div>
              <img className={styles.moreIcon} alt="" src="/icon5.svg" />
            </button>
            <button className={styles.detailsIcon}>
              <div className={styles.checkContract}>check profile</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </button>
            <button className={styles.detailsIcon}>
              <div className={styles.checkContract}>open chat</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </button>
          </div>
          <div className={styles.projList1}>
            <div className={styles.projListChild} />
            <div className={styles.copy1}>
              <div className={styles.mainCopy}>
                <div className={styles.bookApp}>Patient A</div>
                <div className={styles.label}>
                  <img
                    className={styles.loadingAnimationIcon}
                    alt=""
                    src="/loading-animation@2x.png"
                  />
                  <div className={styles.techConsultant}>Tech Consultant</div>
                </div>
              </div>
              <div className={styles.bookTechnologies}>1 book Technologies</div>
            </div>
            <div className={styles.march2019}>March 2019 - March 2019</div>
            <div className={styles.linkIcon2}>
              <div className={styles.techConsultant}>Link</div>
              <img className={styles.moreIcon} alt="" src="/icon5.svg" />
            </div>
            <div className={styles.linkIcon3}>
              <div className={styles.techConsultant}>check contract</div>
              <img className={styles.moreIcon} alt="" src="/icon5.svg" />
            </div>
            <div className={styles.detailsIcon2}>
              <div className={styles.techConsultant}>check profile</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </div>
            <div className={styles.detailsIcon2}>
              <div className={styles.techConsultant}>open chat</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </div>
          </div>
        </div>
        <div className={styles.yourInboxParent}>
          <b className={styles.yourInbox}>your inbox :</b>
          <div className={styles.projListGroup}>
            <div className={styles.projList2}>
              <div className={styles.projListChild} />
              <div className={styles.patientAParent}>
                <div className={styles.bookApp}>Patient A</div>
                <div className={styles.messageFromA}>
                  message from a patient that is not contracted yet
                </div>
              </div>
              <div className={styles.copy2}>
                <div className={styles.mainCopy2}>
                  <div className={styles.label2}>
                    <img
                      className={styles.loadingAnimationIcon}
                      alt=""
                      src="/loading-animation@2x.png"
                    />
                    <div className={styles.techConsultant}>Tech Consultant</div>
                  </div>
                </div>
                <div className={styles.bookTechnologies2}>
                  1 book Technologies
                </div>
              </div>
              <div className={styles.march20192}>March 2019 - March 2019</div>
              <div className={styles.linkIcon4}>
                <div className={styles.techConsultant}>Link</div>
                <img className={styles.moreIcon} alt="" src="/icon5.svg" />
              </div>
              <button className={styles.detailsIcon}>
                <div className={styles.checkContract}>check profile</div>
                <img className={styles.moreIcon} alt="" src="/more.svg" />
              </button>
              <div className={styles.detailsIcon5}>
                <div className={styles.techConsultant}>open chat</div>
                <img className={styles.moreIcon} alt="" src="/more.svg" />
              </div>
            </div>
            <div className={styles.projList3}>
              <div className={styles.projListChild} />
              <div className={styles.patientAParent}>
                <div className={styles.bookApp}>Patient A</div>
                <div className={styles.messageFromA}>
                  HELLLO SIR , ARE YOU OKAY WITH TOUCHING OLD MAN THAT ...
                </div>
              </div>
              <div className={styles.copy3}>
                <div className={styles.mainCopy2}>
                  <div className={styles.label2}>
                    <img
                      className={styles.loadingAnimationIcon}
                      alt=""
                      src="/loading-animation@2x.png"
                    />
                    <div className={styles.techConsultant}>Tech Consultant</div>
                  </div>
                </div>
                <div className={styles.bookTechnologies2}>
                  1 book Technologies
                </div>
              </div>
              <div className={styles.march2019}>March 2019 - March 2019</div>
              <div className={styles.linkIcon2}>
                <div className={styles.techConsultant}>Link</div>
                <img className={styles.moreIcon} alt="" src="/icon5.svg" />
              </div>
              <div className={styles.detailsIcon2}>
                <div className={styles.techConsultant}>check profile</div>
                <img className={styles.moreIcon} alt="" src="/more.svg" />
              </div>
              <div className={styles.detailsIcon2}>
                <div className={styles.techConsultant}>open chat</div>
                <img className={styles.moreIcon} alt="" src="/more.svg" />
              </div>
            </div>
            <div className={styles.projList4}>
              <div className={styles.projListChild} />
              <div className={styles.patientAParent}>
                <div className={styles.bookApp}>Patient B</div>
                <div className={styles.messageFromA}>
                  Hello sir , can i ask you something ?
                </div>
              </div>
              <div className={styles.copy3}>
                <div className={styles.mainCopy2}>
                  <div className={styles.label2}>
                    <img
                      className={styles.loadingAnimationIcon}
                      alt=""
                      src="/loading-animation@2x.png"
                    />
                    <div className={styles.techConsultant}>Tech Consultant</div>
                  </div>
                </div>
                <div className={styles.bookTechnologies2}>
                  1 book Technologies
                </div>
              </div>
              <div className={styles.march2019}>March 2019 - March 2019</div>
              <div className={styles.linkIcon2}>
                <div className={styles.techConsultant}>Link</div>
                <img className={styles.moreIcon} alt="" src="/icon5.svg" />
              </div>
              <div className={styles.detailsIcon2}>
                <div className={styles.techConsultant}>check profile</div>
                <img className={styles.moreIcon} alt="" src="/more.svg" />
              </div>
              <div className={styles.detailsIcon2}>
                <div className={styles.techConsultant}>open chat</div>
                <img className={styles.moreIcon} alt="" src="/more.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projListContainer}>
          <div className={styles.projList5}>
            <div className={styles.projListChild} />
            <div className={styles.nursingCertificatParent}>
              <div className={styles.bookApp}>nursing certificat</div>
              <img className={styles.icon9} alt="" src="/icon6.svg" />
            </div>
            <div className={styles.frameDiv} />
            <div className={styles.copy3}>
              <div className={styles.mainCopy2}>
                <div className={styles.label2}>
                  <img
                    className={styles.loadingAnimationIcon}
                    alt=""
                    src="/loading-animation@2x.png"
                  />
                  <div className={styles.techConsultant}>Tech Consultant</div>
                </div>
              </div>
              <div className={styles.bookTechnologies2}>
                1 book Technologies
              </div>
            </div>
            <div className={styles.march2019}>March 2019 - March 2019</div>
            <div className={styles.linkIcon2}>
              <div className={styles.techConsultant}>Link</div>
              <img className={styles.moreIcon} alt="" src="/icon5.svg" />
            </div>
            <div className={styles.detailsIcon2}>
              <div className={styles.techConsultant}>check profile</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </div>
            <div className={styles.detailsIcon2}>
              <div className={styles.techConsultant}>open chat</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </div>
          </div>
          <div className={styles.projList}>
            <div className={styles.projListChild} />
            <div className={styles.toefelCertificatParent}>
              <div className={styles.bookApp}>toefel certificat</div>
              <img className={styles.icon9} alt="" src="/icon6.svg" />
            </div>
            <div className={styles.frameDiv} />
            <div className={styles.copy3}>
              <div className={styles.mainCopy2}>
                <div className={styles.label2}>
                  <img
                    className={styles.loadingAnimationIcon}
                    alt=""
                    src="/loading-animation@2x.png"
                  />
                  <div className={styles.techConsultant}>Tech Consultant</div>
                </div>
              </div>
              <div className={styles.bookTechnologies2}>
                1 book Technologies
              </div>
            </div>
            <div className={styles.march2019}>March 2019 - March 2019</div>
            <div className={styles.linkIcon2}>
              <div className={styles.techConsultant}>Link</div>
              <img className={styles.moreIcon} alt="" src="/icon5.svg" />
            </div>
            <div className={styles.detailsIcon2}>
              <div className={styles.techConsultant}>check profile</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </div>
            <div className={styles.detailsIcon2}>
              <div className={styles.techConsultant}>open chat</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
            </div>
          </div>
          <button
            className={styles.button}
            id="login"
            type="undefined"
            onClick={onButton1Click}
          >
            <div className={styles.buttonInner}>
              <div className={styles.logInWrapper}>
                <div className={styles.logIn}>add</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.yourCalendarWrapper}>
            <b className={styles.yourInbox}>
              <p className={styles.yourCalendar1}>your calendar</p>
            </b>
          </div>
          <div className={styles.frameChild} />
        </div>
      </div>
      {isTabsOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeTabs}
        >
          <Tabs onClose={closeTabs} />
        </PortalDrawer>
      )}
    </>
  );
};

export default LoggedInCaregiverIfProfile;
