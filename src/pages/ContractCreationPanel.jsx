import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HourSelector from './HourPicker';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel" ;
import "react-multi-date-picker/styles/layouts/mobile.css"
import { useState } from 'react';
import Modal from '@mui/material/Modal';
// import Button from "react-multi-date-picker/components/button"
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

const steps = ['Select Days', 'Select hours' , " last Step "];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height : "85%" ,
    marginTop : "30px" ,
    marginBottom : "30px" ,
    bgcolor: 'background.paper',
    border: '2px solid green',
    borderRadius : 5 ,
    boxShadow: 24,
    p: 4,
  };
export default function ContractCreationPanel() {
    const [preset , setPreset] = useState([])
  const [selectedHours, setSelectedHours] = useState(preset);
let values  ;
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isSameTime , setIsSameTime] = useState(false)
let sameTime = false ; 



    const [contract , setContract] = useState({}) ;
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  function getSelectedHours( hour) {
    if (selectedHours.includes(hour)) {
        setSelectedHours(selectedHours.filter((h) => h !== hour));
      } else {
        setSelectedHours([...selectedHours, hour]);
      }
      
  }

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  function print(e){
    // e.preventDefault()
    values.map(e => {
        console.log('e.format(YYYY-MM-DD)', e.format("YYYY-MM-DD"))
    })
    // values.map(val => {
    //     setStepsList(prev => [...preset , val])
    // })
    console.log('values', values)
  }
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  function handleChange(newValues){
    //   setValues(newValues)
    values = newValues ;
    console.log('values', values)
    // setOpen(true)
  
  }
    
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
        // if (noErrors ( activeStep))
    setActiveStep(newActiveStep);
 


  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // ! my new steps 
  const hourSelection = ()=>{
    //! asking number of days 
    //! Is n > 1 : asking if same time for all the days 
        // select the fucking days from react multi-selector w say. 
        //     ? if yes (same time) : 
        //     ? select the days >> react multiple Calendar >
        //     ? select the Time >> grab a Calendar ( from 8 to twelve ) if not found , select time ranges brk
        //*    else ( many days but with different times for each day )
        //*    not same time > do a boucle of n Days : 
        //*    select day > normal calendar , on click of next > save day > 
        //*    select the Time >> grab a Calendar ( from 8AM to 12PM ) if not found , select time ranges brk
    
    //! else ( n= 1  , it is only one day )
        //     ? select the Time >> grab a Calendar ( from 8 to twelve ) if not found , select time ranges brk

        //* ----------------- save all dates and send them to backend , the backend guy format them in------- 
        //*-------------- the contract has total hours infos , days , etc ,etc --------------------------
        //*------------- the Calendar has the dates and all .

        
    
    return <div className='step'>
        {}
<HourSelector preset={selectedHours } getSelectedHours = {getSelectedHours} days={values} sameTime={isSameTime}></HourSelector>
    </div>
  }
  const daysSelection = ()=>{
    return <div className='step col'> 
        <h1>Select the days please : </h1>
        <DatePicker
        //  multiple
        range
        // className='purple'
        value={values}
        onChange={newvalues =>handleChange(newvalues)}
        highlightToday="false"
        className="rmdp-mobile Purple"
        plugins={[
            <DatePanel />
           ]}
          //  render={<button className='primarybtn'> click me please to select the days </button>}
           render={(value, openCalendar) => {
            return (
              <button className='secondarybtn' onClick={openCalendar}>
                {value ? value : "click to select days please"}
              </button>
            )
          }}
          
        ></DatePicker>
        <div >

        </div>
    </div>
  }
  const step3 = ()=>{
    return <h1>sending money after that too</h1>
  }

  const [stepsList,setStepsList] = useState([daysSelection , hourSelection , step3])
  
  const isStepFailed = (step) => {
    return step === 1;
  };



  return (
    <Box sx={{ width: '100%' }}>
      <Stepper  activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
            
              {label}
            </StepButton>
          </Step>
        ))}
        
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {/* Step of this shit  {activeStep + 1} */}
              {console.log(typeof(stepsList[activeStep]))}
              {stepsList[activeStep]()}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              <Button onClick={print}>print</Button>

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
          <Box id="modal-modal-description"  sx={{ mt: 2  , border :"solid green" , height : "70vh" , overflowY: "auto"}} >
              <div className=' col g1 modalStep'>
                            <h1>will the careTaker be on a regular time for each one of the selected days : </h1>
                            <label htmlFor="yes"> the Seller will come on the same time for all the selected days </label>
                            <input type="checkbox" name="" id="yes" className='container' />
                            <button  className= "primarybtn" onClick={e =>{setOpen(false) ; sameTime= true ;setIsSameTime(true) , console.log('isSameTime', isSameTime) }}>submit</button>

             
                
              </div>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}