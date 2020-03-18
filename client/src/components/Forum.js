import React from 'react';
import '../App.css';
import profile from '../img/profile.png';
import profile1 from '../img/profile1.png';

function Forum(){
    return (
        <div className="App">
        <nav class="navbar  navbar-dark bg-dark">
            <div class="navbar-brand ">IRUN - Forum</div>

            <img src = {profile} className="img-pro"></img>
        
</nav>
<header className="App-header">

<div class="card  shadow-lg mb-5 p-3 bg-white" className ="App-card-Topic">
  <div class="card-body">
      <div class="row mb-3">
          <div class="col-md-2">
              <img src={profile} className="imgcard-pro"></img>
          </div>
          <div class="col-md-4">
          <h5 class="card-title">Neeraj</h5>
          <p className="small-txt"><b>3h ago</b></p>
          </div>

          <div class="col-md-6">
          <span class="badge badge-primary">Pro</span>
          </div>
          </div>
          <hr></hr>
    <p className="forum-txt">With supporting text below as a natural lead-in to additional content.</p>
    
   
        
  </div>
</div>

<br></br>

<div class="card  shadow-lg mb-5 p-3 bg-white" className ="App-card-Topic">
  <div class="card-body">
      <div class="row mb-3">
          <div class="col-md-2">
              <img src={profile1} className="imgcard-pro"></img>
          </div>
          <div class="col-md-4">
          <h5 class="card-title">Sundar Pichai</h5>
          <p className="small-txt"><b>5h ago</b></p>
          </div>

          <div class="col-md-6">
          <span class="badge badge-success">Expert</span>
          </div>
          </div>
          <hr></hr>
    <p className="forum-txt">With supporting text below as a natural lead-in to additional content.</p>
    
   
        
  </div>
</div>
    </header>
    </div>
    );
}

export default Forum;