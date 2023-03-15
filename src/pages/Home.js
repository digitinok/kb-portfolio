import React from "react";

function Home() {
  return (
    <div>
      <h2 className="m-5">Konstanze Bartsch</h2>
      <div className="row">
        <div className="col">
          <image src="public/me.png" alt="me"></image>
        </div>
      </div>
      <div className="col text-start m-3">
        <h4> Software Engineer</h4>
        <p> I'm a Software Engineer working in the automotive industry.</p>
      </div>
    </div>
  );
}

export default Home;
