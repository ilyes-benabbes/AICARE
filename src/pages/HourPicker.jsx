import React, { useState } from 'react';

function HourSelector({ getSelectedHours, preset, days , sameTime  }) {
  const [same , setSame] = useState(false)
  // Initialize the selected hours dictionary with preset values
  const [selectedHoursByDay, setSelectedHoursByDay] = useState(preset);

  const handleHourClick = (day, hour) => {
    const updatedHours = { ...selectedHoursByDay };

    if (!updatedHours[day]) {
      updatedHours[day] = [];
    }

    if (updatedHours[day].includes(hour)) {
      updatedHours[day] = updatedHours[day].filter((h) => h !== hour);
    } else {
      updatedHours[day].push(hour);
    }

    setSelectedHoursByDay(updatedHours);

    // Callback to pass the updated selected hours to the parent component
    getSelectedHours(updatedHours);
  };

  const renderSelectedHours = (day) => {
    const selectedHours = selectedHoursByDay[day];

    if (!selectedHours || selectedHours.length === 0) {
      return <p>No hours selected</p>;
    }

    const sortedHours = selectedHours.sort((a, b) => a - b);
    const hourRanges = [];
    let currentRange = [sortedHours[0]];

    for (let i = 1; i < sortedHours.length; i++) {
      if (sortedHours[i] === sortedHours[i - 1] + 1) {
        // Extend the current range
        currentRange.push(sortedHours[i]);
      } else {
        // Start a new range
        hourRanges.push(currentRange);
        currentRange = [sortedHours[i]];
      }
    }
    hourRanges.push(currentRange); // Add the last range

    return (
      <div>
        {hourRanges.map((range, index) => (
          <p key={index}>
            {range[0] < 10 ? `0${range[0]}:00` : `${range[0]}:00`} to{' '}
            {range[range.length - 1] + 1 < 10
              ? `0${range[range.length - 1] + 1}:00`
              : `${range[range.length - 1] + 1}:00`}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="col  hourpicker">
      <div className='drow-center g2 border' style={{marginBottom : "5vh"}}>
        <p className='sectionfont '> <span style={{color : "red"}}>Note:</span> Will the CareGiver come on the same time for all the selected days ( regular program ) ? </p>
        <input type="checkbox" name="sameTime" id="sameTime" style={{width : "50px", border: "solid red" , color : "red"}}  onClick={e=>{setSame(!same)}} />
          </div>
     
      { !same ? days.map((day) => {
        return (
          <div key={day.format('YYYY-MM-DD')}>
            <h2>Select Hours for {day.format('YYYY-MM-DD')}</h2>
            {console.log('selectedHoursPerDay', selectedHoursByDay)}
            <div className="drow">
              <div className="hour-list col">
                <div className="hour-row drow">
                  {Array.from({ length: 12 }, (_, index) => {
                    const hour = index;
                    const isSelected = selectedHoursByDay[day.format('YYYY-MM-DD')]?.includes(hour);

                    const containerClass = `container ${isSelected ? 'selected' : ''}`;

                    return (
                      <div
                        key={hour}
                        className={containerClass}
                        onClick={() => handleHourClick(day.format('YYYY-MM-DD'), hour)}
                      >
                        {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                      </div>
                    );
                  })}
                </div>
                <div className="hour-row drow">
                  {Array.from({ length: 12 }, (_, index) => {
                    const hour = index + 12; // Start from 12 for the second row
                    const isSelected = selectedHoursByDay[day.format('YYYY-MM-DD')]?.includes(hour);

                    const containerClass = `container ${isSelected ? 'selected' : ''}`;

                    return (
                      <div
                        key={hour}
                        className={containerClass}
                        onClick={() => handleHourClick(day.format('YYYY-MM-DD'), hour)}
                      >
                        {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                      </div>
                    );
                  })}
                </div>
                <h3>Selected Hours:</h3>
              {renderSelectedHours(day.format('YYYY-MM-DD'))}
              </div>
          
            </div>
          </div>
        );
      }) : <div>

<h2>Select Hours for all the days : </h2>
<div className="hour-row drow">
                  {Array.from({ length: 12 }, (_, index) => {
                    const hour = index;
                    const isSelected = selectedHoursByDay["generic"]?.includes(hour);

                    const containerClass = `container ${isSelected ? 'selected' : ''}`;

                    return (
                      <div
                        key={hour}
                        className={containerClass}
                        onClick={() => handleHourClick("generic", hour)}
                      >
                        {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                      </div>
                    );
                  })}
                </div>
<div className="hour-row drow">
                  {Array.from({ length: 12 }, (_, index) => {
                    const hour = index + 12; // Start from 12 for the second row
                    const isSelected = selectedHoursByDay["generic"]?.includes(hour);

                    const containerClass = `container ${isSelected ? 'selected' : ''}`;

                    return (
                      <div
                        key={hour}
                        className={containerClass}
                        onClick={() => handleHourClick("generic", hour)}
                      >
                        {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                      </div>
                    );
                  })}
                </div>
              {renderSelectedHours("generic")}

        </div>}
      
    </div>
  );
}

export default HourSelector;














