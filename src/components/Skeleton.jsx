import React, {useEffect, useState } from "react";
import "../styles/Skeleton.css";
import SkeletonImg from "../assets/Skeleton.png";
import lungsIcon from "../assets/Icons/Lungs.svg";
import teethIcon from "../assets/Icons/Teeth.svg";
import boneIcon from "../assets/Icons/Bone.svg";
import HeartIcon from"../assets/Icons/Heart.svg";
import LegIcon from"../assets/Icons/Leg.svg";
import ZoomIcon from "../assets/Icons/Zoom.svg"
const cards=[
{title:"Lungs", icon:lungsIcon, status:"Bad", date:"24 may 2025", color:"#f87171", progress:70,},
{title:"Teeth", icon:teethIcon, status:"Good", date:"24 may 2025", color:"#34d399" ,progress:85,},
{title:"Bone", icon:boneIcon, status:"Weak", date:"24 may 2025", color:"#fbbf24",progress:60,},
];

const Skeleton = () =>{
    const [rotation, setRotation] =useState(0);

    useEffect(()=>{
        const handleScroll =() =>{
            const scrollY = window.scrollY;
            const angle=Math.sin(scrollY/50)*10;
            setRotation(angle);
        };
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    },[])
return (
    <div className="skeleton-section">
        <div className="skeleton-image-container">
            <div className="Zoom-icon" >
                <img src={ZoomIcon} alt="zoom"/>
            </div>
            <img src={SkeletonImg} alt="Skeleton"className="skeleton-image"
             style={{ transform:`rotateY(${rotation}deg)`}}/>

             
             <div className="health-tag heart-tag">
                <img src={HeartIcon} alt="Heart"/>
                Healthy Heart
             </div>
             <div className="health-tag leg-tag">
              <img src={LegIcon} alt="Leg"/>
                Healthy Leg
             </div>
</div>
<div className="card-list">
    {cards.map((card,index)=>(
            <div  key={index}className="card-new">
                <div className="card-content">
                    <img src={card.icon} alt={card.title} className="card-icon-img"/>
                      <div className="card-text">
                       <h4>{card.title}</h4>
                        <p className="card-date"> Date:{card.date}</p>
                         <div className="progress-bar">
                          <div className="progress-fill" style={{width:`${card.progress}%`,backgroundColor:card.color,}}>
                </div>
              </div>
            </div>      
        </div>
    </div>
        )) }
</div>
</div>
);
    
};
export default Skeleton;