import React, { useEffect, useState } from 'react'
// last commit 
import styles from "./LoginPage.module.css";
import styles2 from "./SignUpPage.module.css";
import { Form  , checkbox} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import my from "./mycss.module.css"
// import * as React from 'react';
import { MultiSelect } from "react-multi-select-component";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Select from "react-select";
import axios from 'axios';






  
  
  
  
  const MyForm = () => {


    function print(e){
      console.log(fo)
      e.preventDefault()
      console.log(selectedOptions)
    }

    const [selectedOptions, setSelectedOptions] = useState([ { value: "red", label: "Red" },]);

    // Array of all 
    

 function standarizeList(list){
  const standard = []
    list.map( (item) =>{

        standard.push({value : item.id  , label : item.name})

    } )

  return  standard
 }



  
    // Function triggered on selection
    function handleSelect(data , fieldname) {
      setFo((prevF) => ({ ...prevF, [fieldname]: data}));
      // setSelectedOptions(data);
      
    }


    const [selected, setSelected] = useState([]);

    const handleChange2 = (event ) => {

      console.log(event.target.value.slice(1))
      // console.log(personName)
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
      // console.log(props)
      const [Errors, setErrors] = useState({});

      const location = useLocation();
      const stateData = location.state;

      // Access the state data
      // if (props )
      //    { console.log(stateData.props); }// "hello there from the login"

      const [fo, setFo] = useState({});
      const handleInputChange = (field, value , type) => {
        // console.log(v)
        if ( type == "string" || type == "field"){
          alert("yay")
        }
        
        console.log(fo);

        setFo((prevF) => ({ ...prevF, [field]: value }));
      };

      const [f, setF] = useState({});
 
  

      useEffect(() => {
        // const key = "id"
        setF(JSON.parse(localStorage.getItem("form")));
      }, []);

      async function handlesubmit(e){
        console.log(fo)
        e.preventDefault()
      //  const json =  {"email":"ils1155s1yssefss4s456s@gmail.cz" , "password": "ilyes1"}
      
          const json = JSON.stringify(fo)
      
        const response = await axios.put("profile/ProfileAPIView/", json , {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 247aa3de94a6394e3004f1ac25d4eaa2be870dd0'
          },
        }).catch((err) => {
          console.log(err)
        })

      }
    

      return (
        <form className={my.frame}>
          <div className={styles.hold}>
          <button onClick={handlesubmit}>print</button>
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
              else if (f[key].type === "field" && f[key].label !== "User") {
                // console.log(f[f[key].label.toLowerCase().replace(/\s/g, '')])
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

                    {/* <Select
          options={standarizeList(f[f[key].label.toLowerCase().replace(/\s/g, '')])}
          placeholder="Select color"
          // value={selectedOptions}
          onChange={(e) => {handleSelect(e, f[key].label.toLowerCase().replace(/\s/g, ''))}}
          isSearchable={true}
          isMulti
        /> */}
                  </div> // fin du container du all
                );
//                   // <>
//                   //   <label
//                   //     className={
//                   //       Errors.email ? styles2.errormessage : styles2.yourName
//                   //     }
//                   //   >
//                   //     {f[key].label.toLowerCase().replace(/\s/g, '')}
//                   //   </label>
              
//                   //   { 
//                   //     <Form.Select
//                   //       key={key}
//                   //       multiple
//                   //       className={Errors.role ? styles2.err : styles2.form}
//                   //       name={f[key].label}
//                   //       onChange={(e) => handleInputChange(key, e.target.value  )}
//                   //     >
//                   //       {f[f[key].label.toLowerCase().replace(/\s/g, '')].map((choice) => (
//                   //         <option
//                   //           key={choice.id}
//                   //           value={choice.id}
//                   //           label={choice.name}
//                   //         />
//                   //       ))}
//                   //     </Form.Select>
//                   //   }
//                   // </>
//                   <div>


//                     {/* <pre>{JSON.stringify(selected)}</pre> */}
// <MultiSelect
//         options={options}
//         value={selected}
//         onChange={setSelected}
//         // onSelect={(e) => {console.log}}
//         labelledBy="Select"
//       />










//                   <FormControl sx={{ m: 1, width: 300 }}>
//                     <InputLabel id="demo-multiple-checkbox-label">{f[key].label.toLowerCase().replace(/\s/g, '')}</InputLabel>
//                     <Select
//                     // onChange={handleInputChange(f[key].label.toLowerCase().replace(/\s/g, '') , value)}
//                     // onChange={(e) => handleInputChange(f[key].label.toLowerCase().replace(/\s/g, ''), e.target.value.slice(1)  )}
//                     // hereh
//                       labelId="demo-multiple-checkbox-label"
//                       id="demo-multiple-checkbox"
//                       multiple
//                       onSelectCapture={console.log("heheha  ")}
//                       value={personName}
//                       // onChange={ (e) => {handleChange(e ,f[key].label.toLowerCase().replace(/\s/g, '') )}}
//                       // onChange={setSelected}
//                       input={<OutlinedInput label={f[key].label.toLowerCase().replace(/\s/g, '')} />}
//                       renderValue={(selected) => selected.join(', ')}
//                       MenuProps={MenuProps}
//                     >
//                       {f[f[key].label.toLowerCase().replace(/\s/g, '')].map((name) => (
//                         <MenuItem key={name.name} value={name.id}>
//                           <Checkbox checked={personName.indexOf(name.id) > -1} />
//                           <ListItemText primary={name.name} />
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </div>
//                 );
              }
              else if (f[key].type == "integer") {
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
           