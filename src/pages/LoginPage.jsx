import styles from "./LoginPage.module.css";
import styles2 from "./SignUpPage.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import { useNavigate, useLocation } from "react-router-dom";

import MyForm from "./Form";

const LoginPage = () => {
  //! states and variables :
  const location = useLocation();
  const { newUser } = location.state || {};

  const [user, setUser] = useState("");
  const [FormData, setFormData] = useState({});
  const [Errors, setErrors] = useState({});
  const navigate = useNavigate();

  //! useeffect

  useEffect(() => {
    if (newUser) setUser(newUser);
  });

  //! functions :


  //********************** */
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  //********************** */

  //********************** */

  
 

  async function handleLogin(e) {
    e.preventDefault();
    const response = await axios
      .post("api/dj-rest-auth/login/", FormData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        //! decoment this and comment what is under it .
        // localStorage.setItem("authToken", response.data.key);
        localStorage.setItem("authToken", "e33287616e621ad977375b1409a6ec992b9db05f");
        axios
          .get("/api/profile/my_info/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${response.data.key}`,
            },
          })
          .then((res) => {
            localStorage.setItem("thisuser", JSON.stringify(res.data.myself));
            console.log('this user is done')
            if (
              res.data.myself.allset == "true" &&
              res.data.myself.role == "seller"
            ) {
              navigate("/logGiver");
            } else if (
              res.data.myself.allset == "true" &&
              res.data.myself.role == "client"
            ) {
              navigate("/logTaker");
            } else {
              /**
               * ! get the options to send it to the form */

              fetch("api/profile/ProfileAPIView/", {
                method: "OPTIONS",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${response.data.key}`,
                },
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }
                  console.log("after thrroe ")
                  response.json()
                })
                .then((data) => {
                  // console.log("data", data);
                  //! check this later , it was changed from data.Put...
                 //! var formbefore = JSON.stringify(data.all_categories); tell slimane to fix it later , without using the options api , or make it ready and deliver it with an get call , how to do that i don't know really i hope we will find a fix for it soon.
                 const form = {
                  "all_categories": {
                    "Situation": [{
                        "need": {
                          "type": "string",
                          "required": true,
                          "read_only": false,
                          "label": "Need",
                          "max_length": 45
                        }
                      },
                      {
                        "sickness_severity": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Sickness Severity",
                          "choices": [{
                              "value": "severe",
                              "display_name": "Severe"
                            },
                            {
                              "value": "medium",
                              "display_name": "Medium"
                            },
                            {
                              "value": "stable",
                              "display_name": "Stable"
                            }
                          ]
                        }
                      },
                      {
                        "mental_state": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Mental Status",
                          "choices": [{
                              "value": "sharp",
                              "display_name": "Sharp"
                            },
                            {
                              "value": "confused",
                              "display_name": "Confused"
                            },
                            {
                              "value": "mild dementia",
                              "display_name": "Mild Dementia"
                            },
                            {
                              "value": "severe dementia",
                              "display_name": "Severe Dementia"
                            }
                          ]
                        }
                      },
                      {
                        "medical_condition": {
                          "type": "field",
                          "required": false,
                          "read_only": true,
                          "label": "Medical condition",
                          "child": {
                            "type": "nested object",
                            "required": false,
                            "read_only": true,
                            "children": {
                              "id": {
                                "type": "integer",
                                "required": false,
                                "read_only": true,
                                "label": "ID"
                              },
                              "name": {
                                "type": "string",
                                "required": true,
                                "read_only": false,
                                "label": "Name",
                                "max_length": 100
                              }
                            }
                          }
                        }
                      },
                      {
                        "aggression": {
                          "type": "boolean",
                          "required": false,
                          "read_only": false,
                          "label": "Aggression"
                        }
                      },
                      {
                        "hearing": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Hearing",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            }
                          ]
                        }
                      },
                      {
                        "vision": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Vision",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            }
                          ]
                        }
                      },
                      {
                        "speech": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Speech",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            }
                          ]
                        }
                      },
                      {
                        "standing": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Standing",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            },
                            {
                              "value": "unable",
                              "display_name": "Unable to stand alone, needs help"
                            }
                          ]
                        }
                      },
                      {
                        "walking": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Walking",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            },
                            {
                              "value": "unable",
                              "display_name": "Unable to walk"
                            }
                          ]
                        }
                      },
                      {
                        "assistive_devices": {
                          "type": "field",
                          "required": false,
                          "read_only": true,
                          "label": "Assistive devices",
                          "child": {
                            "type": "nested object",
                            "required": false,
                            "read_only": true,
                            "children": {
                              "id": {
                                "type": "integer",
                                "required": false,
                                "read_only": true,
                                "label": "ID"
                              },
                              "name": {
                                "type": "string",
                                "required": true,
                                "read_only": false,
                                "label": "Name",
                                "max_length": 100
                              }
                            }
                          }
                        }
                      },
                      {
                        "personal_hygiene": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Personal Hygiene",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            },
                            {
                              "value": "unable",
                              "display_name": "Unable to perform"
                            }
                          ]
                        }
                      },
                      {
                        "eating": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Eating",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            },
                            {
                              "value": "unable",
                              "display_name": "Unable to eat"
                            }
                          ]
                        }
                      },
                      {
                        "drinking": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Drinking",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            },
                            {
                              "value": "unable",
                              "display_name": "Unable to drink"
                            },
                            {
                              "value": "peg-tube",
                              "display_name": "PEG tube"
                            }
                          ]
                        }
                      },
                      {
                        "urinary_incontinence": {
                          "type": "boolean",
                          "required": false,
                          "read_only": false,
                          "label": "Urinary Incontinence"
                        }
                      },
                      {
                        "fecal_incontinence": {
                          "type": "boolean",
                          "required": false,
                          "read_only": false,
                          "label": "Fecal Incontinence"
                        }
                      },
                      {
                        "assistive_devices2": {
                          "type": "field",
                          "required": false,
                          "read_only": true,
                          "label": "Assistive devices2",
                          "child": {
                            "type": "nested object",
                            "required": false,
                            "read_only": true,
                            "children": {
                              "id": {
                                "type": "integer",
                                "required": false,
                                "read_only": true,
                                "label": "ID"
                              },
                              "name": {
                                "type": "string",
                                "required": true,
                                "read_only": false,
                                "label": "Name",
                                "max_length": 100
                              }
                            }
                          }
                        }
                      },
                      {
                        "special_activities": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Special Activities",
                          "choices": [{
                              "value": "mobilizing",
                              "display_name": "Mobilizing"
                            },
                            {
                              "value": "antithrombotic-injections",
                              "display_name": "Subcutaneous injections (antithrombotic)"
                            },
                            {
                              "value": "insulin-injections",
                              "display_name": "Subcutaneous injections (insulin)"
                            },
                            {
                              "value": "transfer",
                              "display_name": "Transfer from bed to wheelchair"
                            }
                          ]
                        }
                      }
                    ],
                    "Environment": [{
                        "environment": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Environment and Accommodation",
                          "choices": [{
                              "value": "house",
                              "display_name": "House"
                            },
                            {
                              "value": "apartment",
                              "display_name": "Apartment"
                            }
                          ]
                        }
                      },
                      {
                        "elevator": {
                          "type": "boolean",
                          "required": false,
                          "read_only": false,
                          "label": "Elevator"
                        }
                      },
                      {
                        "size": {
                          "type": "integer",
                          "required": false,
                          "read_only": false,
                          "label": "Size in m2",
                          "min_value": -2147483648,
                          "max_value": 2147483647
                        }
                      },
                      {
                        "location": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Location",
                          "choices": [{
                              "value": "city",
                              "display_name": "City"
                            },
                            {
                              "value": "country",
                              "display_name": "Country"
                            },
                            {
                              "value": "suburb",
                              "display_name": "Suburb"
                            }
                          ]
                        }
                      },
                      {
                        "bathroom": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Bathroom",
                          "choices": [{
                              "value": "private_bathroom",
                              "display_name": "Private Bathroom/Toilet"
                            },
                            {
                              "value": "private_bathroom_shared_toilet",
                              "display_name": "Private Bathroom, Shared Toilet"
                            },
                            {
                              "value": "shared_bathroom_toilet",
                              "display_name": "Shared Bathroom and Toilet"
                            }
                          ]
                        }
                      },
                      {
                        "bedroom": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Bedroom",
                          "choices": [{
                              "value": "private_bedroom",
                              "display_name": "Private Bedroom"
                            },
                            {
                              "value": "couch",
                              "display_name": "Couch"
                            }
                          ]
                        }
                      },
                      {
                        "television": {
                          "type": "boolean",
                          "required": false,
                          "read_only": false,
                          "label": "Television"
                        }
                      },
                      {
                        "wifi_internet": {
                          "type": "boolean",
                          "required": false,
                          "read_only": false,
                          "label": "WiFi/Internet"
                        }
                      },
                      {
                        "pets": {
                          "type": "boolean",
                          "required": false,
                          "read_only": false,
                          "label": "Pets"
                        }
                      }
                    ],
                    "Caregiver Requirements": [{
                        "caregiver_requirements": {
                          "type": "string",
                          "required": false,
                          "read_only": false,
                          "label": "Requirements for Caregiver from Patient's Side"
                        }
                      },
                      {
                        "driver_license": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Driver's License",
                          "choices": [{
                              "value": "yes",
                              "display_name": "Yes"
                            },
                            {
                              "value": "no",
                              "display_name": "No"
                            },
                            {
                              "value": "doesnt_matter",
                              "display_name": "Doesn't Matter"
                            }
                          ]
                        }
                      },
                      {
                        "gender": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Gender",
                          "choices": [{
                              "value": "male",
                              "display_name": "Male"
                            },
                            {
                              "value": "female",
                              "display_name": "Female"
                            },
                            {
                              "value": "doesnt_matter",
                              "display_name": "Doesn't Matter"
                            }
                          ]
                        }
                      },
                      {
                        "qualification": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Qualification",
                          "choices": [{
                              "value": "good",
                              "display_name": "Good"
                            },
                            {
                              "value": "fair",
                              "display_name": "Fair"
                            },
                            {
                              "value": "poor",
                              "display_name": "Poor"
                            }
                          ]
                        }
                      },
                      {
                        "smoker": {
                          "type": "choice",
                          "required": false,
                          "read_only": false,
                          "label": "Smoker",
                          "choices": [{
                              "value": "yes",
                              "display_name": "Yes"
                            },
                            {
                              "value": "no",
                              "display_name": "No"
                            },
                            {
                              "value": "doesnt_matter",
                              "display_name": "Doesn't Matter"
                            }
                          ]
                        }
                      },
                      {
                        "age_of_caregiver_min": {
                          "type": "integer",
                          "required": false,
                          "read_only": false,
                          "label": "Minimum age of Caregiver",
                          "min_value": -2147483648,
                          "max_value": 2147483647
                        }
                      },
                      {
                        "age_of_caregiver_max": {
                          "type": "integer",
                          "required": false,
                          "read_only": false,
                          "label": "Maximum Age of Caregiver",
                          "min_value": -2147483648,
                          "max_value": 2147483647
                        }
                      }
                    ]
                  }
                }
              
                  // for (const prop in data) {
                  //   if (data[prop][0] && data[prop][0].id) {
                  //     console.log(data[prop]);
                  //     formbefore =
                  //       formbefore.slice(0, -1) +
                  //       "," +
                  //       `"${prop}" : ` +
                  //       JSON.stringify(data[prop]) +
                  //       "}";
                  //   }
                  // }
                  console.log("----")
                  localStorage.setItem("form", JSON.stringify(form.all_categories))
                  navigate("/my-form");
                })
                .catch((error) => {
                  console.log("Error:", error);
                });
              
            
            }
          });
      })
      .catch((error) => {
        console.log(Errors);
        setErrors({});
        const test = error.response.data
        for (const key in test) {
          setErrors((prevErrors) => ({ ...prevErrors, [key]: test[key] }));
        }
      });
  } // fin handlelogin
//********************** */





//!-----------------------------------------------------

// ?? ************* beginign of the fucking function ***********
//!-----------------------------------------------------

  return (
    <div className="login col ">
      <Navbar></Navbar>


      {user && (
  <Banner text = "please consider confirming your email , so you can access the website">
    this is a fucking new user{" "}
  </Banner>
)}
      
    <div className="logcontent   g2  col-center">
      <div className= "logbox col g2  border">

        <div  className="inputs col g1">

            <p className="header">log in</p>
            <div >Email</div>
          <input
            className={Errors.email ? styles2.err : styles2.email}
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

          <div className={styles.email}>Password</div>
          <input
            className={Errors.password ? styles2.err : styles2.email}
            type="password"
            placeholder="Please enter your password"
            maxLength
            minLength
            id="password"
            name="password"
            onChange={handleInputChange}
          />
          {Errors.password && (
            <div className={styles2.errormessage}>{Errors.password[0]}</div>
          )}

          {Errors.non_field_errors && (
            <div className={styles2.errormessage}>
              {Errors.non_field_errors[0]}
            </div>
          )}
        </div>
            <div className="btncont col-center g2">
        <button className="btnsecondary full" onClick={handleLogin}>
          log in
        </button>
        <Link to={"/sign"}>
        <div >new here ? sign up</div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
