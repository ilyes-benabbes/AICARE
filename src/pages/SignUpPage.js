import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
const SignUpPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <div className={styles.navs}>
        <div className={styles.logo}>
          <img className={styles.logoChild} alt="" src="/star-11.svg" />
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
          <div className={styles.pricingWrapper}>
            <div className={styles.home}>Pricing</div>
          </div>
          <button
            className={styles.button}
            id="login"
            type="undefined"
            onClick={onButtonClick}
          >
            <div className={styles.buttonInner}>
              <div className={styles.logInWrapper}>
                <div className={styles.logIn}>Log in</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.t}>t</div>
      </div>
      <div className={styles.formElements}>
        <form className={styles.createAnAccountForFreeParent} method="post">
          <b className={styles.createAnAccount}>Create an account for free</b>
          <div className={styles.fullName}>Full Name</div>
          <input
            className={styles.username}
            type="text"
            placeholder="Enter your Fullname"
            maxLength
            minLength
            required
            id="fullname"
          />
          <div className={styles.fullName}>Role</div>
          <Form.Select
            className={styles.usernameFormselect}
            name="role"
            id="role"
          >
            <option>Enter your Role</option>
            <option value="CareGiver">CareGiver</option>
            <option value="Caretaker (patnient)">Caretaker (patnient)</option>
          </Form.Select>
          <div className={styles.gender}>{`Gender `}</div>
          <Form.Select
            className={styles.passwordFormselect}
            name="gender"
            id="gender"
          >
            <option>Enter your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
          <div className={styles.dateOfBirth}>Date of Birth</div>
          <div className={styles.password}>
            <div className={styles.placeholder}>Enter BD</div>
          </div>
          <div className={styles.dateOfBirth}>Address</div>
          <input
            className={styles.password1}
            type="text"
            placeholder="Enter address"
            maxLength
            minLength
            required
            id="address"
          />
          <div className={styles.zipCode}>Zip code</div>
          <input
            className={styles.password2}
            type="text"
            placeholder="Enter zip"
            maxLength
            minLength
            id="zip"
          />
          <div className={styles.phoneNumber}>Phone number</div>
          <input
            className={styles.password1}
            type="text"
            placeholder="Enter phone number"
            maxLength
            minLength
            required
            id="phone"
          />
          <div className={styles.yourName}>Email</div>
          <input
            className={styles.email}
            type="text"
            placeholder="Please enter your email"
            maxLength
            minLength
            id="email"
          />
          <div className={styles.phoneNumber}>Password</div>
          <input
            className={styles.password5}
            type="text"
            placeholder="Enter password"
            maxLength
            minLength
            id="password"
          />
          <button className={styles.cta}>
            <b className={styles.label}>Sign up</b>
          </button>
          <div className={styles.alreadyHaveAn} onClick={onAlreadyHaveAnClick}>
            Already have an account
          </div>
        </form>
        <div className={styles.rectangleParent}>
          <input className={styles.frameChild} type="file" />
          <div className={styles.addImageHereContainer}>
            <span className={styles.addImageHereContainer1}>
              <p className={styles.addImageHere}>add image here</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
