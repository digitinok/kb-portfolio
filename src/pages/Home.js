import React from "react";



function Home() {
  return (
    <div>
      <div className="row">
        <div className="col col-11 col-sm-5">
          <img id="me" src={require("../assets/me.png")} alt="KB avatar"/>
        </div>
        <div className="col col-11 col-sm-5 text-start m-5">
          <h2 className="mb-4">Konstanze Bartsch</h2>
          <h4 className="mb-3"> Software Engineer</h4>
          <p> I'm a Software Engineer working in the automotive industry.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
