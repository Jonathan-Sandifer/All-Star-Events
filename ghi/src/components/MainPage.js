import React from 'react'
import Search from './Search';

function MainPage() {
    return (
      <main className='welcome'>
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
      </main>
    );
  }
  
  export default MainPage;