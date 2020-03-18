import React from 'react';
import '../App.css';
import profile from '../img/profile.png';

function ProblemSol(){
    return (

        <div className="App">
        <nav class="navbar  navbar-dark bg-dark">
            <div class="navbar-brand ">IRUN - Basic C++</div>
            <img src = {profile} className="img-pro"></img>
        
</nav>
<header className="App-header">
<div class="card" className="App-card-Topic">
  <div class="card-body">
    <h5 class="card-title mb-3">What is the size of int Data Type?</h5>
    <b><hr></hr></b>
    <b>
    <p class="card-text mb-5" className="small-txt"><ol>
        <li>
            2 Bytes
            </li>
            <li>
                4 Bytes
            </li>
            <li>
                1 Byte
            </li>
            <li>
                Depends on the Compiler
            </li>
            </ol>
            </p>
            </b>
            <div class="input-group input-group-sm mb-3">

  <input type="text" class="form-control" placeholder="Answer here" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
      </input>
</div>
  </div>

  <div class= "row">
<button type="button" class="btn shadow-lg  rounded btn-primary btn-block">Next</button>

</div>
</div>
</header>

</div>
    );
}

export default ProblemSol;