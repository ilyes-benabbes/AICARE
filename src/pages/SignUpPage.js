import { useCallback  , useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import './DatePickerStyles.css';
import axios from 'axios';
import React from "react";
import { typography } from "@mui/system";
const SignUpPage = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const onButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);
  
  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

   function print(e){
    localStorage.setItem('state', JSON.stringify({ a:1, b:2, c:3 }));
    e.preventDefault()
    console.log(Errors)
    onButtonClick()
  }
  
  //  export const UserContext = React.createContext(10);
  //  export const UserContext = createContext();

  const [FormData , setFormData] = useState({

    dob: '',
    role : '',
    fullname: '' , 
    gender: '',
    email: '',
    password1 : '', 
    phone : '',
    password2 : ''

  })

  const [Errors , setErrors] = useState({
    dob: '',
    role : '',
    fullname: '' , 
    gender: '',
    email: '',
    password1 : '', 
    phone : '',
    password2 : ''
  })



  function handleInputChange(e) {
    console.log(FormData)

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  
  async function handleSubmit (e){
    e.preventDefault()
    console.log("this is the form now")
    // console.log(FormData)
    // const json = JSON.stringify(FormData)
    
    const json = {"role":"seller","fullname":"ben ilyes","gender":"male","email":"1213544644s4s456s5@gmail.cz" , "password1": "ilyes1" , "password2": "ilyes1" , "phone":"04567" , "dob":"2008-05-13"   }
    console.log(json)

  
    const response = await axios.post("dj-rest-auth/registration/", json , {
      headers: {
        'Content-Type': 'application/json',
      },
    }


    
    ).then((response) => {
      if (response.status === 201 || response.status === 204){
        alert("yay")
    localStorage.setItem('newUser', true);

        // onButtonClick()
        // window.location.replace("/login-page")
        navigate('/login-page')
        // navigate('/login-page');
      }
      
      // You can access the response data using response.data
    })
    
    
    
    
    
    
    
    
    
    .catch((error) => {
      console.log('here')
      console.log(error)
      if (error.response.status === 400){
        console.log("error in form ")
      }


      // console.log(typeof(error.response.data))
      setErrors({})
        const test = error.response.data
      // console.log(error.response.data)
      for (const key in test) {
         setErrors((prevErrors) => ({ ...prevErrors, [key]: test[key] })) ; 
      }
       
  
        
      // console.log(error.response.data)
      if (error.response) {
        if (error.response.status === 405) {
          console.error('Error: Method Not Allowed (405)');
        }
        else {
          console.log("i dunno but this is the erors")
          console.log(Errors)
        }
        
      }
    }
    )

    console.log(response)
     



      

        
    }
  return (
    <div className={styles.signUpPage}>
      {/* {Errors.non_field_errors && alert("there is a fucking mistake ")} */}
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
        <form className={styles.createAnAccountForFreeParent} method="" action="">
        {/* <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} /> */}

        {/* <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/> */}
          <b className={styles.createAnAccount}>Create an account for free</b>
          <div className={styles.fullName}>Full Name</div>
          <input
            className={styles.username}
            type="text"
            name="fullname"
            placeholder="Enter your Fullname"
            onChange={handleInputChange}
          
            id="fullname"
          />
          <div className={styles.fullName}>Role</div>
          <Form.Select
            className={Errors.role ? styles.err : styles.usernameFormselect}
            name="role"
            id="role"
            onChange={handleInputChange}
            // onSelect={handleInputChange}
          >
            <option>Enter your Role</option>
            <option value="seller" onSelect={handleInputChange}>CareGiver</option>
            <option value="client" onChange={handleInputChange}>Caretaker (patient)</option>
          </Form.Select>
      {Errors.role && <div className={styles.errormessage}>{Errors.role[0]}</div>}

          <div className={styles.gender}>{`Gender `}</div>
          <Form.Select
            className={ Errors.gender ? styles.err :styles.passwordFormselect}
            name="gender"
            id="gender"
            onChange={handleInputChange}


          >
            <option>Enter your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
      {Errors.gender && <div className={styles.errormessage}>{Errors.gender[0]}</div>}

          {/* <div className={styles.dateOfBirth}>Date of Birth</div> */}
          {/* <div className={styles.password}> */}
            {/* <div className={styles.placeholder}>Enter BD</div> */}
          {/* </div> */}

          {/* <div className={styles.dateOfBirth}>Address</div>
          <input
            className={styles.password1}
            type="text"
            placeholder="Enter address"
            onChange={handleInputChange}

            id="address"
            name="address"
          /> */}
          {/* <div className={styles.zipCode}>Zip code</div> */}
          <label>
        Date of Birth:
        <div></div>
        <input 
          type="date"
          name="dob"
          className={styles.email}
          onChange={handleInputChange}
        />
      </label>
      {Errors.dob && <div className={styles.errormessage}>{Errors.dob[0]}</div>}
      {/* {Errors.email && <div className={styles.errormessage}>{Errors.email[0]}</div>} */}

      


      {/* <label>
        Date of Birth:
        <DatePicker
          // selected={formData.dateOfBirth}
          // onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          // Add any custom styles here
        />

      </label>
       */}
          {/* <input
            className={styles.password2}
            type="text"
            placeholder="Enter zip"
            id="zip"
          /> */}
          <div className={styles.phoneNumber}>Phone number</div>
          <input
            className={Errors.phone ? styles.err :styles.password1}
            type="text"
            placeholder="Enter phone number"
            id="phone"
            name="phone"
            onChange={handleInputChange}
          />
      {Errors.phone && <div className={styles.errormessage}>{Errors.phone[0]}</div>}


          {/* <input type="date">enter the fuciknig date </input> */}
          <div className={ Errors.email ? styles.errormessage : styles.yourName}>Email</div>
          <input

            className={ Errors.email ? styles.err : styles.email}
            type="text"
            placeholder="Please enter your email"
            maxLength
            minLength
            id="email"
            name="email"
            onChange={handleInputChange}
          />
      {Errors.email && <div className={styles.errormessage}>{Errors.email[0]}</div>}

          <div className={styles.phoneNumber}>Password1</div>
          <input
            className={Errors.password1 ? styles.err : styles.password5 }
            type="password"
            placeholder="Enter password"
            maxLength
            minLength
            id="password"
            name="password1"
            onChange={handleInputChange}
          />
      {Errors.password1 && <div className={styles.errormessage}>{Errors.password1[0]}</div>}

          <div className={styles.phoneNumber}>Password2</div>
          <input
            className={ Errors.password2 ? styles.err :styles.password5}
            type="password"
            placeholder="confirm password"
            maxLength
            minLength
            id="password"
            name="password2"
            onChange={handleInputChange}
          />
      {Errors.password2 && <div className={styles.errormessage}>{Errors.password2[0]}</div>}
      {Errors.non_field_errors && <div className={styles.errormessage}>{Errors.non_field_errors[0]}</div>}

      {/* {Errors.non_field_errors && alert("there is a fucking mistake ")} */}


                <button onClick={print}>print</button>



          <button className={styles.cta} type="button" onClick={handleSubmit}>
            <b className={styles.label}    >Sign up</b>
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
