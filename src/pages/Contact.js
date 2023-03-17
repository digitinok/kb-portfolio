import React from "react";


function Contact() {
  return (
    <div>
      <h2 className="m-5">Contact Me</h2>
      <p>Feel free to contact me via email.  
        You could check out my profiles on LinkedIn and GitHub or download
         my  <a href="https://drive.google.com/file/d/1c1oPIudzItG8Jv365rSu1aNB3Q-bwlb9/view?usp=share_link" target="_blank" rel="noreferrer"><b>CV</b></a>!
      </p>
      <ul>
        <li className="list-inline-item mr-3">
          <a href="https://github.com/digitinok" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-2x fa-fw"></i>
          </a>
        </li>            
        <li className="list-inline-item mr-3">
          <a href="https://www.linkedin.com/in/konstanze-bartsch-83b4aa26a/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-2x fa-fw"></i>
          </a>
        </li>
        <li className="list-inline-item mr-3">
          <a href="mailto: abc@example.com">
            <i className="fa fa-envelope fa-2x fa-fw"></i>
          </a>
        </li>
        <li className="list-inline-item mr-3">
          <a href="tel:00441234567890">
            <i className="fa fa-phone fa-2x fa-fw"></i>
          </a>
        </li>
      </ul>
  
  
    </div>
  );
}

export default Contact;
