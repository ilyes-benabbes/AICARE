import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css";
import axios from "axios";
import React from "react";
const SignUpPage = () => {
  // ! states and variables
const [image ,setimage] = useState(false)






  const [FormData, setFormData] = useState({
    dob: "",
    role: "",
    fullname: "",
    gender: "",
    email: "",
    password1: "",
    phone: "",
    password2: "",
    //! add the profile picture later baby 
    // profile_picture : "" 
  });
  const navigate = useNavigate();
  const [Errors, setErrors] = useState({
    dob: "",
    role: "",
    fullname: "",
    gender: "",
    email: "",
    password1: "",
    phone: "",
    password2: "",
  });

  //! function

  const onButtonClick = useCallback(() => {
    navigate("/log");
  }, [navigate]);

  //******************* */
  function removeimg (e){
    e.preventDefault()
    FormData.profile_picture = ""
    setimage(false) ;
    const image = document.getElementById("signupimage")
    image.style.backgroundImage = "" ;

  }
  //******************* */


  function loadFile(e){
    e.preventDefault()
    const image = document.getElementById("signupimage")
    image.style.backgroundImage = "url(" + URL.createObjectURL(e.target.files[0]) + ")" ;
    setimage(true )
    FormData.profile_picture = e.target.files[0] ;
    console.log('image', image)
  }
  //******************* */

  function handleInputChange(e) {
    console.log(FormData);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  //******************* */
  async function handleSubmit(e) {
    e.preventDefault();
    // const json = {"role":"seller","fullname":"ben ilyes","gender":"male","email":"ab@ab.ab1" , "password1": "ilyes1" , "password2": "ilyes1" , "phone":"04567" , "dob":"2008-05-13"   }

    const response = await axios
      .post("/api/dj-rest-auth/registration/", FormData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201 || response.status === 204) {
          // navigate('/log', { state: { newUser: true } });
          navigate('/log', { state: { newUser: true } });
          // localStorage.setItem("newUser", true);
          // navigate("/log");
        }

        // You can access the response data using response.data
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          console.log("error in form ");
        }
        setErrors({});
        const test = error.response.data;
        console.log('test', test)
        for (const key in test) {
          setErrors((prevErrors) => ({ ...prevErrors, [key]: test[key] }));
        }
        if (error.response) {
          if (error.response.status === 405) {
            console.error("Error: Method Not Allowed (405)");
          } else {
            console.log(Errors);
          }
        }
      });
    //******************* */
  }
  return (
    <div className="signup   col-center g3  ">
    <Navbar></Navbar>
      <div className=" drow-center formcontainer g2 border ">
        <form
          className="formcol  col"
          method=""
          action=""
        >
          <p className="header">Create an account for free</p>
          <div >Full Name</div>
          <input

            type="text"
            name="fullname"
            placeholder="Enter your Fullname"
            onChange={handleInputChange}
            id="fullname"
          />
          <div >Role</div>
          <Form.Select
            className={Errors.role ? styles.err : styles.usernameFormselect}
            name="role"
            id="role"
            onChange={handleInputChange}
          >
            <option>Enter your Role</option>
            <option value="seller" onSelect={handleInputChange}>
              CareGiver
            </option>
            <option value="client" onChange={handleInputChange}>
              Caretaker (patient)
            </option>
          </Form.Select>
          {Errors.role && (
            <div className={styles.errormessage}>{Errors.role[0]}</div>
          )}

          <div >{`Gender `}</div>
          <Form.Select
            className={Errors.gender ? styles.err : styles.passwordFormselect}
            name="gender"
            id="gender"
            onChange={handleInputChange}
          >
            <option>Enter your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
          {Errors.gender && (
            <div className={styles.errormessage}>{Errors.gender[0]}</div>
          )}

            <label>
            Date of Birth:
            </label>
            <br></br>
            <input
            className="dob border "
              type="date"
              name="dob"
              
              onChange={handleInputChange}
            />
          {Errors.dob && (
            <div className={styles.errormessage}>{Errors.dob[0]}</div>
          )}

          <div >Phone number</div>
          <input
            className={Errors.phone ? styles.err :null}
            type="text"
            placeholder="Enter phone number"
            id="phone"
            name="phone"
            onChange={handleInputChange}
          />
          {Errors.phone && (
            <div className={styles.errormessage}>{Errors.phone[0]}</div>
          )}

          <div >
            Email
          </div>
          <input
            className={Errors.email ? styles.err : null}
            type="text"
            placeholder="Please enter your email"
            maxLength
            minLength
            id="email"
            name="email"
            onChange={handleInputChange}
          />
          {Errors.email && (
            <div className={styles.errormessage}>{Errors.email[0]}</div>
          )}

          <div >Password1</div>
          <input
            className={Errors.password1 ? styles.err : null}
            type="password"
            placeholder="Enter password"
            maxLength
            minLength
            id="password1"
            name="password1"
            onChange={handleInputChange}
          />
          {Errors.password1 && (
            <div className={styles.errormessage}>{Errors.password1[0]}</div>
          )}

          <div >Password2</div>
          <input
            className={Errors.password2 ? styles.err : null}
            type="password"
            placeholder="confirm password"
            maxLength
            minLength
            id="password2"
            name="password2"
            onChange={handleInputChange}
          />
          {Errors.password2 && (
            <div className={styles.errormessage}>{Errors.password2[0]}</div>
          )}
          {Errors.non_field_errors && (
            <div className={styles.errormessage}>
              {Errors.non_field_errors[0]}
            </div>
          )}



          <button className={styles.cta} type="button" onClick={handleSubmit}>
            <b className={styles.label}>Sign up</b>
          </button>
          <Link to={"/log"}>
            Already have an account
          </Link>
        </form>
              <div className="col">
        <label className="signimg cursor" id="signupimage" >
      
              { !image && <img src="/public/sign.svg" alt="" className="cursor icon"  />   }
              { !image && <p className="cursor">add image</p>}
            





              {/* <img src="public/sign.svg" alt="img" className="add"></img> */}
          <input style={{display:"none"}} type="file" onChange={loadFile} />
          <div className={styles.addImageHereContainer}>
            <span className={styles.addImageHereContainer1}>
            </span>
          </div>
        </label>
        {image && <button className="btnsecondary remove" onClick={removeimg}> X</button>}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
