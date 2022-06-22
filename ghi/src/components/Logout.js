import React from "react";

function Logout(props) {
  props.logout();
  return (
    <div className="px-4 goodbye py-5 my-5">
      <h1 className="display-5 fw-bold header">You Are Now Logged Out</h1>
      <h2 className="display-5 fw-bold header">Catch you on the Flipside...</h2>
      <div className="col-lg-6 mx-auto"></div>
    </div>
  );
}

export default Logout;
