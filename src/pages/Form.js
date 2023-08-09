import React, { useEffect, useState } from 'react'
// last commit2 
import styles from "./LoginPage.module.css";
import styles2 from "./SignUpPage.module.css";
import { Form} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import my from "./mycss.module.css"
import Select from "react-select";
import axios from 'axios';
import Button from 'react-bootstrap/Button';


  
  const MyForm = () => {

    function print(e){
      console.log(fo)
      e.preventDefault()
      console.log(selectedOptions)
    }

    const [selectedOptions, setSelectedOptions] = useState([ { value: "red", label: "Red" },]);
 function standarizeList(list){
  const standard = []
    list.map( (item) =>{

        standard.push({value : item.id  , label : item.name})

    } )
  return  standard
 }

    // Function triggered on selection
    function handleSelect(data , fieldname) {
      const mylist = []
      data.map((item) => {
        mylist.push(""+item.value )     
    })  
      setFo((prevF) => ({ ...prevF, [fieldname]: mylist}));    
    }


    const [selected, setSelected] = useState([]);

    const handleChange2 = (event ) => {

      console.log(event.target.value.slice(1))
      setPersonName(event.target.value);
    };

      const [personName, setPersonName] = useState([]);
    
      const handleChange = (event , field) => {
        console.log(event.target.value)
        console.log(fo)
        setFo((prevF) => ({ ...prevF, [field]: event.target.value.slice(1) }));
        
        
          const { target: { value },} = event;
            setPersonName(   // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
              );
            };
          
       const [showOptions, setShowOptions] = useState(false);
      function clk() {
        console.log(f);
      }

      const [Errors, setErrors] = useState({});

      const location = useLocation();
      const stateData = location.state;

      const [fo, setFo] = useState({});
      const handleInputChange = (field, value , type) => {
        if ( type == "string" || type == "field"){
        }      
        console.log(fo);

        setFo((prevF) => ({ ...prevF, [field]: value }));
      };

      const [f, setF] = useState({});
 
  

      useEffect(() => {
        setF(JSON.parse(localStorage.getItem("form")));
      }, []);



      async function handlesubmit(e){
        console.log(fo)
        e.preventDefault()    
        const json = JSON.stringify(fo)
      
        const response = await axios.put("profile/ProfileAPIView/", json, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem("authToken")}`    
          },
        }).then(
            (res) => {
              console.log(res)
            }

        )
        
        .catch((err) => {
          console.log(err)
        })

      }
    



      return (
        <form className={my.frame}>
          <div className={styles.hold}>
          <Button onClick={print}>print</Button>
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
                      <option >------</option>
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
                      className="form-control"
                      name="email"
                      onChange={(e) => handleInputChange(key, e.target.value , f[key].type)}
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
              } 

              else if (f[key].type === "field" ) {
                console.log(f[f[key].label.toLowerCase().replace(/\s/g, '')])
                standarizeList(f[f[key].label.toLowerCase().replace(/\s/g, '')])
                return (
                  <div>
                    <Select
                      options={standarizeList(
                        f[f[key].label.toLowerCase().replace(/\s/g, "")]
                      )}
                      placeholder= {f[key].label.toLowerCase().replace(/\s/g, "")}
                      onChange={(e) => {
                        handleSelect(
                          e,
                          f[key].label.toLowerCase().replace(/\s/g, "")
                        );
                      }}
                      isSearchable={true}
                      isMulti
                    />
                  </div> // fin du container du all
                );
             }
              else if (f[key].type == "integer") {
                return (
                  <>
                    <label> {f[key].label}</label>
                    <div class="invalid-feedback">
                    </div>
                    <input
                      type="number"
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
          <Button variant='success' onClick={handlesubmit}>Submit</Button>
        </form>
      );

      }
  

export default MyForm
           