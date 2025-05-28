import React from "react";
import "../styles/Activity.css";
const data= [
{day:"Mon",value:40},
{day:"Tue",value:80},
{day:"Wed",value:55},
{day:"Thurs",value:100},
{day:"Fri",value:90},
{day:"sat",value:60},
{day:"sun",value:30},
];
const Activity=()=>{
    return(
    <div className="activity-con">
        <div className="activity-header">
            <h3>Activity</h3>
            <p>3 appointmnets on this week</p>
            </div>
            <div className="bar-chart">
                {data.map((item,index)=>(
                 <div key={index} className="bar-group">
                   <div className="bar"
                   style={{height:`${item.value}px`}}
                   title={`${item.value}%`}/>
                   <span className="day-label">{item.day}</span>
                   </div>
                ))}
                
            </div>
        </div>
    );
            };
           
export default Activity;

































            
       
