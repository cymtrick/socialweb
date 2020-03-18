import React from 'react';
import '../App.css';
import profile from '../img/profile.png';
import expert from '../img/expert.png';
import ripper from '../img/ripper.png';

function Stats(){
    return(
<div className="App">
        <nav class="navbar  navbar-dark bg-dark">
            <a href="/stats"><div class="navbar-brand ">IRUN</div></a>

            <a href="user">  <img src = {profile} className="img-pro"></img></a>
        
</nav>
<header className="App-header">

<div class="card bg-light shadow-lg mb-3" className="App-card-Topic">
  <div class="card-header"><b>Basic C++</b> &nbsp; &nbsp; 
  <span class="badge badge-success">Rank : 102</span>
 </div>
  <div class="card-body">
      <div class="row mb-5">
          <div class="col-md-6">
            <img src={ripper} className="img-pro"></img>
            <p class="card-text">Ripper</p>
      </div>

      <div class="col-md-6">
      <img src={expert} className="img-pro"></img>
            <p class="card-text">Expert</p>
</div>




  </div>


  <div class="row">
          <div class="col-md-6">
  <p className="small-txt"><b>Progress</b></p>
      </div>

      <div class="col-md-6">
            <p className="small-txt"><a href="forum"><b>Go to Forum</b></a></p>
</div>




  </div>

  <div class="progress">
  <div class="progress-bar bg-success" className="progress-value" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
</div>
</div>
</div>

<br></br>

<div class="card bg-light shadow-lg mb-5" className="App-card-Topic">
  <div class="card-header"><b>Basic Java</b> &nbsp; &nbsp; 
  <span class="badge badge-success">Rank : 1034</span>
 </div>
  <div class="card-body">
      <div class="row mb-5">
          <div class="col-md-6">
            <img src={ripper} className="img-pro"></img>
            <p class="card-text">Ripper</p>
      </div>

      <div class="col-md-6">
      <img src={expert} className="img-pro"></img>
            <p class="card-text">Expert</p>
</div>




  </div>


  <div class="row">
          <div class="col-md-6">
  <p className="small-txt"><b>Progress</b></p>
      </div>

      <div class="col-md-6">
            <p className="small-txt"><a href="forum"><b>Go to Forum</b></a></p>
</div>




  </div>

  <div class="progress">
  <div class="progress-bar bg-success" className="progress-value" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
</div>
</div>
</div>


</header>

</div>
    );

}

export default Stats;