import React from 'react'
import Search from './Search';

function MainPage() {
    return (
      <div className="mainpage">
        <div>
          <h1 className="mainheader">Welcome to All Star Events</h1>
        </div>
        <br />
        <Search />
        <div className="footer">
          <p>Just four dudes missing sunlight</p>
        </div>
          
      </div>
    );
  }
  
  export default MainPage;