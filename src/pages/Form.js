import React, { useEffect, useState } from 'react'
// last commit2 
import styles from "./LoginPage.module.css";
import styles2 from "./SignUpPage.module.css";
import { Form} from "react-bootstrap";
import { useLocation , useNavigate} from 'react-router-dom';
import my from "./mycss.module.css"
import Select from "react-select";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

  const MyForm = () => {
    
const [limit , setLimit] = useState(0)
const [user,SetUser] = useState()
 const [pre,setPre] = useState({})
    const [f, setF] = useState({});
    const [page, setPage] = useState(1);
    
    const [counter ,setCounter] = useState(1)
    const [ group , setGroup] = useState({})
    const itemsPerPage = 5; 
    const [personName, setPersonName] = useState([]);
    const startIndex = (page ) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageFields = Object.values(f).slice(startIndex, endIndex);
    const navigate = useNavigate();
    const [Errors, setErrors] = useState({});

    const location = useLocation();
    const stateData = location.state;

    const [fo, setFo] = useState({});
    
    const [isLoading, setIsLoading] = useState(true); 
    let cpt =1




    useEffect(() => {
  setF(JSON.parse(localStorage.getItem("form")));
}, []);

useEffect(() => {
  if (f) {
    setGroup(getElementsFromObjectByGroup(f, page));
  }
}, [page , f]);



    // useEffect(() => {
    //   console.log("the group is fucking set ")
    //     setGroup(getElementsFromObjectByGroup(f,page))
    // }, [page]);

    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

 useEffect(() => {
    
  console.log("ilyes , if 1 , it means for the firsu value ever : the zero " , limit)
  // console.log("ilyes , if 2 , it means for the firsu value ever : the 9 ")
}, [limit]);

// useEffect(() => {
//   if (Object.keys(pre).length > 0 && Object.keys(group).length > 0) {
//     console.log("the gropu lengh  : " , Object.keys(group).length)
//     console.log("the pre lengh  : " , Object.keys(pre).length)
//     console.log(' the and are set .')
//     // setIsLoading(false);
//     setLimit(Math.floor(Object.keys(f).length / itemsPerPage));
   
//   }
// }, [group ,  f]);
useEffect(() => {
  if (Object.keys(pre).length > 0 && Object.keys(group).length > 0) {
    setLimit(Math.floor(Object.keys(f).length / itemsPerPage));
    setIsLoading(false);
  }
}, [pre, group]);

 

    useEffect(() => {
      const prepopulate = axios.get("profile/ProfileAPIView/",  {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem("authToken")}`
        }
      }).then ( res => {
        console.log(res.data)
          // SetUser(res.data.user)
          setPre(res.data)   
      }
      )   
    }, [])
    

     

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
     
    }

    const [selectedOptions, setSelectedOptions] = useState();
 function standarizeList(list){
  if (list){
  const standard = []
    list.map( (item) =>{

        standard.push({value : item.id  , label : item.name})

    } )
  return  standard }
 }
 
    // Function triggered on selection
    function handleSelect(data , fieldname) {
      const mylist = []
      data.map((item) => {
        mylist.push(""+item.value )     
    })  
      setFo((prevF) => ({ ...prevF, [fieldname]: mylist}));    
    }

     
    
      const handleChange = (event , field) => {
        console.log(event.target.value)
        console.log(fo)
        setFo((prevF) => ({ ...prevF, [field]: event.target.value.slice(1) }));
        
        
          const { target: { value },} = event;
            setPersonName(   // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
              );
            };
          

   
      const handleInputChange = (field, value , type) => {    
        setFo((prevF) => ({ ...prevF, [field]: value }));
      };

     
      
      
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
              navigate('/log', { state: user });

            }
        )
        
        .catch((err) => {
          console.log(err)
        })

      }
    





      function getElementsFromObjectByGroup(obj, groupNumber) {
        const keys = Object.keys(obj);
        const startIndex = (groupNumber - 1) * 5;
        const selectedKeys = keys.slice(startIndex, startIndex + 5);
        const selectedElements = {};
        for (const key of selectedKeys) {
          selectedElements[key] = obj[key];
        }
      
        return selectedElements;
      }

      return (

        <>
        {isLoading ? <h1>loading...</h1> : 
        <form className={my.frame}>
        <div className={styles.hold}>
        <Button onClick={print}>print</Button>
          {Object.keys(group).map((key) => {
                                                                  
            if (f[key].type == "choice"){ 
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
                      handleInputChange(key, e.target.value)
                    }
                  >
                    <option disabled selected>------</option>
                    {f[key].choices.map((choice) => (
                      <option key={choice.value} value={choice.value} selected={choice.value === pre[key]}>
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
                    defaultValue={pre[key]}
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
                    onClick={(e) => handleInputChange(key, e.target.checked , f[key].type)}                   
                    defaultChecked={pre[key]}
                    
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
                    defaultValue={
                      standarizeList(
                      pre[key] )}
                   

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
                   defaultValue={pre[key]}
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
      </form> }
      <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous Page
        </Button>
        <Button 
        onClick={() => handlePageChange(page + 1)}
        disabled={page == limit}
        >
          Next Page
        </Button>
       </>
  )}

       
  
  

export default MyForm
           