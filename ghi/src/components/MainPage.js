import React from "react";
import Search from "./Search";

function MainPage(props) {
  return (
    <main className="welcome">
      &nbsp;
      <div className="mainpage">
        <div>
          <h1 className="mainheader">Welcome to All Star Events</h1>
        </div>
        <br />
        <Search sSData={props.sSearchData} token={props.token} />
      </div>
    </main>
  );
}

export default MainPage;
