import { useCallback  , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import axios from 'axios';
const SignUpPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);




  async function getTocken(){
    console.log('gIovz9fUcjaYLMVLybHDePMGuPfPQv7o'.length)
    const res = await axios.get('/csrf/')
    console.log(res.data.csrfToken + "ili")
    return res.data.csrfToken
  }


  async function handleSubmit (){
    console.log("this is doc :")
    console.log(document)
    console.log("this is doc.cookie :")
    console.log(document.cookie)
    const formData = new FormData();
    // formData.append("name", "John");
    formData.append("email", "john@example.com");
    formData.append("password1", "john@example.com");
    formData.append("password2", "john@example.com");
    // const csrfToken = await getTocken()

    const response = await axios.post("/accounts/signup/", formData, {
      responseType: 'json', 
      headers: {
        "X-CSRFToken" :  'gIovz9fUcjaYLMVLybHDePMGuPfPQv7o' ,
        "Content-Type": "multipart/form-data",
        'Accept': 'application/json',
      },
    }
    );
    // console.log(req)

    console.log(response.data);
  }

  // ----- stack over flow 
  function getCookie(name) {
    console.log('inside get COOkie ')
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


const csrftoken = getCookie('csrftoken');
console.log("hello , this is the csrf token : ")
// csrftoken = 
console.log(csrftoken)

const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};

  return (
    <div className={styles.signUpPage}>
      <div className={styles.navs}>
        <div className={styles.logo}>
          <img className={styles.logoChild} alt="" src="/star-111.svg" />
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
        <form className={styles.createAnAccountForFreeParent} method="post" action="/accounts/signup/">
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />

        {/* <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/> */}
          <b className={styles.createAnAccount}>Create an account for free</b>
          <div className={styles.fullName}>Full Name</div>
          <input
            className={styles.username}
            type="text"
            placeholder="Enter your Fullname"
          
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
            <b className={styles.label}  onClick={handleSubmit}  >Sign up</b>
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
