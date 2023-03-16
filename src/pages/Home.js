import React from "react";


function Home() {
  return (
    <div>
      <div className="row">
        <div className="col col-11 col-sm-5">
          <img src={require("../assets/me.png")} alt="me"/>
        </div>
        <div className="col col-11 col-sm-5 text-start m-3">
          <h2 className="mt-5 mb-5">Konstanze Bartsch</h2>
          <h4> Software Engineer</h4>
          <p> I'm a Software Engineer working in the automotive industry.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
