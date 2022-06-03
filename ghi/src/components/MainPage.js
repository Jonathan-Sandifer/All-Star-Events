import React from 'react'
import Search from './Search';

function MainPage() {
    return (
      <div className="mainpage">
        <div className="mainpage">
          <h1 className="display-5 fw-bold">Welcome to All Star Events</h1>
        </div>
        <Search />
        <div className="footer">
          <p>Just four dudes missing sunlight</p>
        </div>
          
      </div>
    );
  }
  
  export default MainPage;