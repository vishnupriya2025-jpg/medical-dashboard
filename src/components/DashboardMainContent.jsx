import React from "react";
import"../styles/Dashboard.css"
import Skeleton from "./Skeleton";
import Activity from "./Activity";
import Arrowright from "../assets/Icons/Arrow-right.svg";
import Arrowleft from "../assets/Icons/Arrow-left.svg";
import TeethIcon from "../assets/Icons/Teeth.svg";
import HandIcon from "../assets/Icons/Hand.svg";
import CheckIcon from "../assets/Icons/Check.svg";
import EyeIcon from "../assets/Icons/Eye.svg";
import HeartIcon from "../assets/Icons/Heart.svg";
import BrainIcon from "../assets/Icons/Brain.svg";


const DashboardMainContent =()=>{
    const calendarSlots = [
    { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
    { day: "Tues", date: 26, times: ["08:00", "09:00", "10:00", "12:00"], highlight: true, selected: "09:00" },
    { day: "Wed", date: 27, times: ["12:00", "13:00"] },
    { day: "Thurs", date: 28, times: ["10:00", "11:00"], selected: "11:00" },
    { day: "Fri", date: 29, times: ["14:00", "16:00"] },
    { day: "Sat", date: 30, times: ["12:00", "14:00", "15:00"] ,selected: "12:00"},
    { day: "Sun", date: 31, times: ["09:00", "10:00", "11:00"] },
  ];
    return(
        
        <div className="dashboard-container">
            
         <div className="dashboard-left">
    
                 <h2>Dashboard</h2>
                   <Skeleton/>
                    <Activity/>
</div>
<div className="dashboard-right">
    <div className="calender-section">
        <div className="calender-header">
         <h3>October 2025</h3>
         <div className="calender-nav">
<img src={Arrowright} alt="Previous"/>
<img src={Arrowleft} alt="Next"/>


         </div>
        </div>

<div className="calendar-grid">
            {calendarSlots.map((slot, index) => (
              <div
                key={index}
                className={`calendar-column ${slot.highlight ? "highlight-column" : ""}`}
              >
                <p className="day-label">{slot.day}</p>
                <p className="date-label">{slot.date}</p>
                <div className="time-slots">
                  {slot.times.map((time, i) => (
                    <span
                      key={i}
                      className={`time-slot ${time === slot.selected ? "selected-slot" : ""}`}
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>


<div className="appointments">
   <div className="appointment dentist highlighted">
    <img src={TeethIcon} alt="Dentist"/>
    <div>
        <p>Dentist</p>
        <small>09:00-11:00</small><br/>
        <small> Dr.Cameron Williamson</small>
    </div>    
   </div>
<div className="appointment physio">
    <img src={HandIcon} alt="Physio"/>
    <div>
        <p>Physiotherapy Appointment</p>
        <small>11:00-1:00</small> <br/>
        <small> Dr.Kevin Djones</small>
    </div>    
   </div>
</div>

 <div className="upcoming-schedule">
    <h3 className="schedule-heading">The Upcoming Schedule</h3>
    
    <h4>On Thursday</h4>
    <div className="schedule-group">
     <div className="schedule-item">
    <p> Health complete checkup </p>
    <span>11:00 AM</span>
    <img src={CheckIcon} alt="check"/>    
</div>
<div className="schedule-item">
    <p> opthalmologist</p>
    <span>14:00 AM</span>
    <img src={EyeIcon} alt="Eye"/>    
</div>
</div>

<h4>On Saturday</h4>
<div className="schedule-group">
<div className="schedule-item">
   <p> Cardiologist</p>
    <span>12:00 PM</span>
    <img src={HeartIcon} alt="Heart"/>  
</div>
<div className="schedule-item">
   <p> Neurologist</p>
    <span>16:00 PM</span>
    <img src={BrainIcon} alt="Brain"/>  
</div>
 </div>
</div>


    </div>
    </div>
   </div>

    );
};
export default DashboardMainContent;