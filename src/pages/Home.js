import React from "react";



function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img className="" id="me" src={require("../assets/me.png")} alt="KB avatar"/>
        </div>
        <div className="col-sm text-start">
          <h2 className="my-4">Konstanze Bartsch</h2>
          <h4 className="mb-3"> Software Engineer</h4>
          <p> I'm a Software Engineer working in the automotive industry.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
