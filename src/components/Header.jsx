import React from "react";
import "../styles/Header.css"
import SearchIcon from "../assets/Icons/Search.svg";
import UserIcon from "../assets/Icons/user.svg";
import addItemIcon from "../assets/Icons/Add.svg"
import BellIcon from "../assets/Icons/Bell.svg"

const Header = () => {
    return(
        <div className="main" >
            <div className="topbar">
             <div className="searchbar">
              <label className="search-label">
                <img src={SearchIcon} alt="search" className="search-icon"/>
                  <input type="text" placeholder="search here"/>
                  <img src={BellIcon} alt="Notifications" className="bell-icon" />
                  </label>
                </div>
                <div className="right-icons">
                    <img src={UserIcon} alt="User Avatar"  className="User-avatar"/>
                 
                 <button className="add-item-button">
                   <img src={addItemIcon} alt="Add Item"  className="add-icon"/> 
</button>

</div>
</div> 
</div>
    );
}

export default Header;