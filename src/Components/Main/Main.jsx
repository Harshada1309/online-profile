import React from 'react'
import './Main.css'

const Main = () => {

  const handlePrint=()=>{
    window.print();
  }


  return ( 
    <div className='main' id='main'>
      <div className='maindiv'>
        <center>
          <h3 className='main1'>About me</h3>
        </center>
        <p>Aspiring software developer eager to apply academic knowledge to real-world projects. <br />
Recent graduate in computer science seeking opportunities to grow as a software developer.<br/>
Eager to join a supportive team and develop skills in software development best practices.<br/>
Aspiring software developer with a strong foundation in coding and problem-solving.<br/>
Seeking an entry-level role to kick-start a career in software development and gain practical experience.<br/>
Having a knowledge of HTML, CSS, JAVASCRIPT, REACT, SQL, CORE & ADVANCED JAVA.<br/>
Developing and implementing highly responsive user interface components using react concepts. <br />
Writing application interface codes using JavaScript following react.js workflows. <br />
Having knowledge of deploying paltform such as Github, Netlify, Vercel, Firebase, Emailjs.<br/>
</p>
        <button onClick={handlePrint}>download resume</button>
      </div>
    </div>
  )
}

export default Main