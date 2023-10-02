import React, { useEffect, useRef, useState } from "react";
import Layout from "./Layout";
import { isSameDay } from 'date-fns';

import "react-multi-date-picker/styles/colors/purple.css";
// import { Calendar} from "react-multi-date-picker"
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/layouts/mobile.css";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';

import { Profile } from "../components/sub/Inboxprofile";

import Calendar from "react-calendar";

function CalendarPage() {
    //!vars :
    const today = new Date();
    const tomorrow = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = React.useState(null);
    const [selected, setselected] = useState(true);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const calendarRef = useRef();
  


    //!funcsts ; 

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  useEffect(() => {
    console.log("rerender");
  }, [selected]);


  // const datesToAddClassTo = [tomorrow, today ];
  // function tileClassName({ date, view }) {
  //   // Add class to tiles in month view only
  //   if (view === 'month') {
  //     // Check if a date React-Calendar wants to check is on the list of dates to add class to
  //     if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
  //       return 'selectedDay';
  //     }
  //     else {
  //       return 'tile'
  //     }
  //   }
  // }



  const [values, setValues] = useState([today, tomorrow]);
  function handleChange(e) {
    console.log("e.day", e.day);
  }

  return (
    <Layout isCaregiver pageName={"Calendar"}>
      <div className="calendarPage col g2 ">
        <div className="theCalendar col meetings">
          <h1 className="">{"Calendar :"}</h1>

          <Calendar
            onChange={(e) => console.log('e', e)}
            className="reactCal border"
            activeStartDate={today}
            defaultValue={[tomorrow , today]}
            value={values}
          ></Calendar>



          {/* <DatePicker   multiple className="purple"  */}
{/* /> */}
        
        </div>

        <div className="meetings col ">
          <h1>{"Meetings :"}</h1>
          {values.map((meet) => {
            return <Profile msg={"25/sep/2023 @ meet.startingTime"}></Profile>;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default CalendarPage;

class CustomComponent extends React.Component {
  render() {
    return (
      <button className="primarybtn" onClick={this.props.openCalendar}>
        {"open calendar to see tes RVs"}
      </button>
    );
  }
}


       {/* <DatePicker
   id='myDatePicker'
   className='purple'
    
  multiple
  plugins={[
   <DatePanel />
  ]}
  value={values} 
  onChange={setValues}
>

<button
        style={{ margin: "5px 0" }}
        onClick={() => alert("clicked")}
      >
        click me
      </button>
        </DatePicker> */}

          {/* <DatePicker
      value="2020/10/19"
     onOpenPickNewDate
      render={<CustomComponent />}
    /> */}

          {/* <DatePicker
    inputClass="primarybtn"
 
    className="custom-calendar"
    numberOfMonths={2}
        // currentDate={today}
    // mobileButtons={[
    //   {
    //     label: "RESET",
    //     type: "button",
    //     className: "rmdp-button rmdp-action-button",
    //     onClick: () => setValue({}),
    //   },
    // ]}
    
    value={values}
    ></DatePicker> */}

          {/* { <Calendar
  onFocusedDateChange={e => handleChange(e)}
  numberOfMonths={2}
  ref={calendarRef}
  editable = {false}
  // onClick={e => console.log('click')}
  // readOnly
  className='purple rmdp-mobile'
  onPropsChange={e => console.log('e', e)}
  
  // mapDays={({ date, today, selectedDate, currentMonth, isSameDate }) => {

  //   let props = {}

  // selectedDate.map(value => {
  //   if (isSameDate(value , date)){
  //     console.log("found one")
  //     console.log("value" , value)
  //     // alert("hh")
  //     console.log('date', date)
  //     return
  //   }
  //   else {
  //     console.log("note one")
  //     props.hidden = true
  //     return props
        
      
  //   }
  // })





  //   return props
  // }}

 
  // readOnly
  onChange={e => handleChange(e)}
  value={values}
  
  ></Calendar>
}
   */}

          {/* **! helooo there  */}