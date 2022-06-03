import React from 'react'
import Search from './Search';
import Footer from './Footer';

function MainPage() {
    return (
      <div className="mainpage">
        <div>
          <h1 className="mainheader">Welcome to All Star Events</h1>
        </div>
        <br />
        <Search />
        <Footer />
      </div>
    );
  }
  
  export default MainPage;