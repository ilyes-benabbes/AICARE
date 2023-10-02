import React, { useEffect, useState } from 'react'
import styles from "./LoginPage.module.css";
import styles2 from "./SignUpPage.module.css";
import { Form} from "react-bootstrap";
import { useLocation , useNavigate} from 'react-router-dom';
import {ToggleButtonGroup , ToggleButton} from '@mui/material'
import my from "./mycss.module.css"
import Select from "react-select";
import axios from 'axios';
import Navbar from '../components/Navbar'
import Button from 'react-bootstrap/Button';
import Banner from '../components/banner';
import {PROFILE_OPTIONS_API} from './reducers/common' ;
// import Accordion from 'react-bootstrap/Accordion';
//?----------------
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyForm = () => {

    //! states 
    //* the form template gotten by options
    const [f, setF] = useState({});
    //* THE FORM THAT I AM FILLING NOW , THIS WILL BE POSTED
    const [fo, setFo] = useState({});
    //* prepopulated fomr
    const [pre,setPre] = useState({})


    const [banner , setBanner] = useState(false)
    const thisuser = localStorage.getItem("thisuser")
    const [page, setPage] = useState(1);
    const [ group , setGroup] = useState({})
    const itemsPerPage = 7; 
    const startIndex = (page ) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const navigate = useNavigate();
    const [Errors, setErrors] = useState({});

    const location = useLocation();
    const stateData = location.state;
    const [isLoading, setIsLoading] = useState(true); 

   

  
//! useEffects :

useEffect(() => {
  if (Object.keys(pre).length > 0 ) {
    setIsLoading(false);
  }
}, [pre]);

//***************** */

useEffect(() => {
  const prepopulate = axios.get( PROFILE_OPTIONS_API,  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem("authToken")}`
    }
  }).then ( res => {
    console.log('PredefinedDAta', res.data)
      setPre(res.data)   
  }
  )   
}, [])

//***************** */


    useEffect(() => {
  setF(JSON.parse(localStorage.getItem("form")));
  
}, []);

//***************** */
//! FUNCTIONS BEGINS FROM HERE 

    function print(e){
      e.preventDefault()
      console.log("------------")
      console.log("the pre ")
      console.log(pre)
      console.log("the f ")
      console.log(f)
      console.log("the group ")
      console.log(group)
      console.log("------------")
      console.log("the Fo : ")
      console.log(fo)
      
      console.log("------------")
    }
      //********************** */


 function standarizeList(list){
  if (list){
  const standard = []
    list.map( (item) =>{

        standard.push({value : item.id  , label : item.name})

    } )
  return  standard }
 }
      //********************** */
    function handleSelect(data , fieldname) {
      const mylist = []
      data.map((item) => {
        mylist.push(""+item.value )     
    })  
      setFo((prevF) => ({ ...prevF, [fieldname]: mylist}));    
    }

     //********************** */
   
      const handleInputChange = (field, value , type) => {    
        setFo((prevF) => ({ ...prevF, [field]: value }));
      };
      //********************** */
      
      //! this is where to send the current form .
      async function handlesubmit(e){
        e.preventDefault()    
        const json = JSON.stringify(fo)
      
        const response = await axios.put(PROFILE_OPTIONS_API, json, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem("authToken")}`    
          },
        }).then(
            (res) => {
              if ( res.data.user.allset == "true") {
                      //! modify the all set state in local storage.
                  if (thisuser.role == "seller")
                  navigate('/logGiver');
                  if (thisuser.role == "client")
                  navigate('/logTaker');
              }
              else {
              setBanner(true)
              }  }
        )
        
        .catch((err) => {
          console.log(err)
        })

      }
    
      //********************** */
  

//!-----------------------------------------------------

// ?? ************* beginign of the  componenet ***********
//!-----------------------------------------------------


      return (

        <>
        {isLoading ? <h1>loading...</h1> : 
            <div className="col formpage">
              {banner  && <Banner text={"please fill all the fields of the form so you can continue"}> </Banner>}
        {/* <Button onClick={print}>print</Button> */}
               <Navbar></Navbar>

               <div className="bigtitle col-center">
                <h1 className='header'>welcome to Aicare </h1>
                <p className='sectionfont'> please fill this form so you can get started</p>
               </div>
              
<div className="formcontainer drow-around pad ">

          <div className="accordion col pad g2">
              
          {Object.keys(f).map((mainkey) => {
            console.log('mainkey', mainkey)
            console.log('f[mainkey]', f[mainkey])
            return  (
              <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel2a-header">

                <Typography
                align='center'
                sx={{color : "black" , fontFamily:"oswald" , textAlign: "center" , alignItems:"center" , display:"flex" , justifyContent:"center"}}
                >
                  {mainkey}
                </Typography>
              </AccordionSummary>

            

        <AccordionDetails>
 

{Object.keys(f[mainkey]).map((key) => {
    const obj = f[mainkey][key] ;
        if (obj.type == "choice"){ 
          return (                    
            <>                        
               
              <label>
                {obj.label}
              </label>
              <Form.Select
                key={key}
                className={Errors.role ? styles2.err : styles2.form}
                name={obj.label}                  
                onChange={(e) =>
                  handleInputChange(key, e.target.value)
                }
                // defaultValue={fo[key] ? fo[key] : pre[key] }
              >
                <option disabled selected>------</option>
                {obj.choices.map((choice) => (
                  <option key={choice.value} value={choice.value} 
                  selected={choice.value === pre[key]}
                  >
                  {choice.display_name}
                </option>
                
                ))}
              </Form.Select>
            </>
          );

        } else if (obj.type == "string") {
          return (
            <>
              <label> {obj.label}</label>
              <input
                type="text"
                placeholder={`please enter ${obj.label}`}
                id="email"
                className="form-control"
                name="email"
                defaultValue={fo[key] ? fo[key] : pre[key]}
                onChange={(e) => handleInputChange(key, e.target.value , obj.type)}
              />
            </>
          );
        }
        else if (obj.type == "boolean") {
          return (
            <div className={my.center}>
              <label> {obj.label}</label>
              <input
                label={obj.label}
                className="form-check-input"
                required={obj.required}
                type="checkbox"
                onClick={(e) => handleInputChange(key, e.target.checked , obj.type)}                   
                defaultChecked={fo[key] != null ? fo[key] : pre[key]}
                ></input>

            </div>
          );
        } 

        else if (obj.type === "field" ) {
          // console.log(f[obj.label.toLowerCase().replace(/\s/g, '')])
          return (
            <div>
            <label>{obj.label}</label>
              <Select
                options={standarizeList(
                  obj.options
                )}
                placeholder= {obj.label}
                onChange={(e) => {
                  handleSelect(
                    e,
                    key
                  );
                }}
                isSearchable={true}
                isMulti
                defaultValue={ fo[key] ?

                  standarizeList(
                  pre[key] ) :  standarizeList(
                    pre[key] )}
              //   fix this here to get the new file

              />
            </div> 
          );
       }
        else if (obj.type == "integer" && key != "id") {
          return (
            <>
              <label> {obj.label}</label>
              <div class="invalid-feedback">
              </div>
              <input
                type="number"
               placeholder={`please enter ${obj.label}`}
              //  defaultValue={pre[key]}
              defaultValue={fo[key] ? fo[key] : pre[key]}
              //  it is maybe gonna be pre[mainkey][item][key].value , or something like that for all of them 
              // 
                className="form-control"
                onChange={(e) =>
                  handleInputChange(key, e.target.valueAsNumber)
                }
              />
            </>
          );
        }

          })}

 
        </AccordionDetails>

             
            </Accordion>

            )

          })}


          <Button variant='success' onClick={handlesubmit}>submit</Button>
          </div>









        {/* <div className="r border form col grow">
        {/* <form className="b drow-center">

          {Object.keys(group).map((key) => {
            
           
                                                                  
            if (f[key].type == "choice"){ 
              return (                    
                <>                        
                   
                  <label                  
                    >
                    {f[key].label}
                  </label>
                  <Form.Select
                    key={key}
                    className={Errors.role ? styles2.err : styles2.form}
                    name={f[key].label}                  
                    onChange={(e) =>
                      handleInputChange(key, e.target.value)
                    }
                    defaultValue={fo[key] ? fo[key] : pre[key] }
                  >
                    <option disabled selected>------</option>
                    {f[key].choices.map((choice) => (
                      <option key={choice.value} value={choice.value} 
                      // selected={choice.value === pre[key]}
                      >
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
                    id="email"
                    className="form-control"
                    name="email"
                    defaultValue={fo[key] ? fo[key] : pre[key]}
                    onChange={(e) => handleInputChange(key, e.target.value , f[key].type)}
                  />
                </>
              );
            }
            else if (f[key].type == "boolean") {
              return (
                <div className={my.center}>
                  <label> {f[key].label}</label>
                  <input
                    label={f[key].label}
                    className="form-check-input"
                    required={f[key].required}
                    type="checkbox"
                    onClick={(e) => handleInputChange(key, e.target.checked , f[key].type)}                   
                    defaultChecked={fo[key] != null ? fo[key] : pre[key]}
                    
                    ></input>

                </div>
              );
            } 

            else if (f[key].type === "field" ) {
              console.log(f[f[key].label.toLowerCase().replace(/\s/g, '')])
              return (
                <div>
                <label>{f[key].label}</label>
                  <Select
                    options={standarizeList(
                      f[f[key].label.toLowerCase().replace(/\s/g, "")]
                    )}
                    placeholder= {f[key].label}
                    onChange={(e) => {
                      handleSelect(
                        e,
                        key
                      );
                    }}
                    isSearchable={true}
                    isMulti
                    defaultValue={ fo[key] ?

                      standarizeList(
                      pre[key] ) :  standarizeList(
                        pre[key] )}
                  //   fix this here to get the new file

                  />
                </div> 
              );
           }
            else if (f[key].type == "integer" && key != "id") {
              return (
                <>
                  <label> {f[key].label}</label>
                  <div class="invalid-feedback">
                  </div>
                  <input
                    type="number"
                   placeholder={`please enter ${f[key].label}`}
                  //  defaultValue={pre[key]}
                  defaultValue={fo[key] ? fo[key] : pre[key]}
                    className="form-control"
                    onChange={(e) =>
                      handleInputChange(key, e.target.valueAsNumber)
                    }
                  />
                </>
              );
            }
          })}

       
        </form>  */}
      
        {/* </div> */} 
        
        </div>

      </div> 
      }
       </>
  )}

       
  
  

export default MyForm
           