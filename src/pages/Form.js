import React, { useEffect, useState } from 'react'
import styles from "./LoginPage.module.css";
import styles2 from "./SignUpPage.module.css";
import { Form  , checkbox} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import my from "./mycss.module.css"




// function MyForm() {

    


    const MyForm = () => {
      function clk() {
        console.log(f);
      }
      // console.log(props)
      const [Errors, setErrors] = useState({});

      const location = useLocation();
      const stateData = location.state;

      // Access the state data
      // if (props )
      //    { console.log(stateData.props); }// "hello there from the login"

      const [fo, setFo] = useState({});
      const handleInputChange = (field, value) => {
        console.log(fo);
        setFo((prevF) => ({ ...prevF, [field]: value }));
      };

      const [f, setF] = useState({});
      //     "id": {
      //       "type": "integer",
      //       "required": false,
      //       "read_only": true,
      //       "label": "ID"
      //     },
      //     "need": {
      //       "type": "string",
      //       "required": true,
      //       "read_only": false,
      //       "label": "Need",
      //       "max_length": 45
      //     },
      //     "weight": {
      //       "type": "integer",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Weight in Kg",
      //       "min_value": -2147483648,
      //       "max_value": 2147483647
      //     },
      //     "sickness_severity": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Sickness Severity",
      //       "choices": [
      //         {"value": "severe", "display_name": "Severe"},
      //         {"value": "medium", "display_name": "Medium"},
      //         {"value": "stable", "display_name": "Stable"}
      //       ]
      //     },
      //     "mental_state": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Mental Status",
      //       "choices": [
      //         {"value": "sharp", "display_name": "Sharp"},
      //         {"value": "confused", "display_name": "Confused"},
      //         {"value": "mild dementia", "display_name": "Mild Dementia"},
      //         {"value": "severe dementia", "display_name": "Severe Dementia"}
      //       ]
      //     },
      //     "aggression": {
      //       "type": "boolean",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Aggression"
      //     },
      //     "hearing": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Hearing",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"}
      //       ]
      //     },
      //     "vision": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Vision",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"}
      //       ]
      //     },
      //     "speech": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Speech",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"}
      //       ]
      //     },
      //     "standing": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Standing",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"},
      //         {"value": "unable", "display_name": "Unable to stand alone, needs help"}
      //       ]
      //     },
      //     "walking": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Walking",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"},
      //         {"value": "unable", "display_name": "Unable to walk"}
      //       ]
      //     },
      //     "assistive_devices": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Assistive Devices",
      //       "choices": [
      //         {"value": "anti-decubitus", "display_name": "Anti-decubitus mattress"},
      //         {"value": "patient-lift", "display_name": "Patient lift"},
      //         {"value": "walker", "display_name": "Walker"},
      //         {"value": "stair-climber", "display_name": "Stair climber"},
      //         {"value": "bathtub-lift", "display_name": "Bathtub lift"},
      //         {"value": "commode-chair", "display_name": "Commode chair"},
      //         {"value": "wheelchair", "display_name": "Wheelchair"},
      //         {"value": "shower-seat", "display_name": "Shower seat"},
      //         {"value": "hospital-bed", "display_name": "Hospital bed"},
      //         {"value": "cane", "display_name": "Cane"}
      //       ]
      //     },
      //     "personal_hygiene": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Personal Hygiene",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"},
      //         {"value": "unable", "display_name": "Unable to perform"}
      //       ]
      //     },
      //     "eating": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Eating",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"},
      //         {"value": "unable", "display_name": "Unable to eat"}
      //       ]
      //     },
      //     "drinking": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Drinking",
      //       "choices": [
      //         {"value": "good", "display_name": "Good"},
      //         {"value": "fair", "display_name": "Fair"},
      //         {"value": "poor", "display_name": "Poor"},
      //         {"value": "unable", "display_name": "Unable to drink"},
      //         {"value": "peg-tube", "display_name": "PEG tube"}
      //       ]
      //     },
      //     "urinary_incontinence": {
      //       "type": "boolean",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Urinary Incontinence"
      //     },
      //     "fecal_incontinence": {
      //       "type": "boolean",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Fecal Incontinence"
      //     },
      //     "assistive_devices2": {
      //       "type": "choice",
      //       "required": false,
      //       "read_only": false,
      //       "label": "Assistive Devices 2",
      //       "choices": [
      //         {"value": "indwelling-catheter"}] }

      // })

      useEffect(() => {
        // const key = "id"
        setF(JSON.parse(localStorage.getItem("form")));
      }, []);

      return (
        <form className={my.frame}>
          <div className={styles.hold}>
            {/* <button onClick={clk} className="btn btn-primary">
              click me senpai 
            </button> */}

            {Object.keys(f).map((key) => {
              if (f[key].type == "choice") {
                return (
                  <>
                    <label
                      className={
                        Errors.email ? styles2.errormessage : styles2.yourName
                      }
                    >
                      {f[key].label}
                    </label>

                    <Form.Select
                      key={key}
                      className={Errors.role ? styles2.err : styles2.form}
                      name={f[key].label}
                      onChange={(e) =>
                        handleInputChange(e.target.name, e.target.value)
                      }
                    >
                      {f[key].choices.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                          {choice.display_name}
                        </option>
                      ))}
                    </Form.Select>
                  </>
                );
              } else if (f[key].type == "string") {
                return (
                  <>
                    <label> {f[key].label}</label>
                    <input
                      type="text"
                      placeholder={`please enter ${f[key].label}`}
                      maxLength
                      minLength
                      id="email"
                      //  className={Errors.email ? styles2.err : styles2.email}
                      className="form-control"
                      name="email"
                      onChange={(e) => handleInputChange(key, e.target.value)}
                    />
                  </>
                );
              }

              // Form.
              else if (f[key].type == "boolean") {
                return (
                  <div className={my.center}>
                    <label> {f[key].label}</label>
                    <input
                      label={f[key].label}
                      className="form-check-input"
                      required={f[key].required}
                      type="checkbox"
                      onChange={(e) => handleInputChange(key, e.target.checked)}
                    ></input>
                  </div>
                );
              } else if (f[key].type == "integer") {
                return (
                  <>
                    <label> {f[key].label}</label>
                    <div class="invalid-feedback">
        Please choose a username.
      </div>
                    <input
                      type="number"
                      //   className={Errors.email ? styles2.err : styles2.email}.
                      placeholder={`please enter ${f[key].label}`}

                      className="form-control"
                      onChange={(e) =>
                        handleInputChange(key, e.target.valueAsNumber)
                      }
                    />
                  </>
                );
              }
            })}
          </div>
          <button type='submit'> sub</button>
        </form>
      );
    }


export default MyForm
           