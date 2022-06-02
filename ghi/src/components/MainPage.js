import React from 'react'
import Search from './Search';

function MainPage() {
    return (
      <div className="mainpage">
        <h1 className="display-5 fw-bold">Welcome to All Star Events</h1>
        <div className="col-lg-6 mx-auto">
        <Search />
          <p className="lead mb-4">
            Who are we?
            <br />
            <br />
            
            Just four dudes missing sunlight!
          </p>
          
        </div>
      </div>
    );
  }
  
  export default MainPage;