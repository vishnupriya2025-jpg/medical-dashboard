import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from"./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
const App = () => {
  return(
    <div className="App">
      <div className="AppHolder">
          <Sidebar />
            <div className="MainContentWrapper">
              <Header/>
          <DashboardMainContent/>
          </div>
      </div>
    </div>
  );
}

export default App;