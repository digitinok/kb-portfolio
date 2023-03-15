import React from "react";

function Home() {
  return (
    <div>
      <h2 className="m-5">Konstanze Bartsch</h2>
      <div className="row">
        <div className="col col-11 col-sm-5">
          <image src={require("../assets/me.png")} alt="me"></image>
        </div>
        <div className="col col-11 col-sm-5 text-start m-3">
          <h4> Software Engineer</h4>
          <p> I'm a Software Engineer working in the automotive industry.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
