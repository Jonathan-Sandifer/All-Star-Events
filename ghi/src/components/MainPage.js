import React from 'react'
import Search from './Search';
import Footer from './Footer';

function MainPage() {
    return (
      <main className='welcome'>&nbsp;
        <div className="mainpage">
          <div>
            <h1 className="mainheader">Welcome to All Star Events</h1>
          </div>
          <br />
          <Search />
        </div>
      </main>
    );
  }
  
  export default MainPage;