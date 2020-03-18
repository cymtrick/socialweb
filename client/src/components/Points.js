import React from 'react';
import '../App.css';
import profile from '../img/profile.png';

function Points() {

    return (
        <div className="App">
        <nav class="navbar  navbar-dark bg-dark">
            <a href="/stats"><div class="navbar-brand ">IRUN - User Settings</div></a>
           <a href="user">  <img src = {profile} className="img-pro"></img></a>
           <a href="/"><div class="navbar-brand ">Logout</div></a>
</nav>
<header className="App-header">

<div class="card" >
  <div class="card-body">
    <div class="row mb-3">
        <div class="col">
            <h5 class="card-title"> Basic C++</h5>
        </div>

        
        <div class="col">
            <h5 class="card-title"> Leaderboard <span class="badge badge-primary">103rd Rank</span></h5>
        </div>
    </div>
    <hr></hr>

    <div class="row">
        <div class="col">
         <h6>Name</h6>
        </div>
        
        <div class="col">
         <h6>Points</h6>
        </div>
    </div>

<hr></hr>

<div class="row">
        <div class="col">
           <ol>
               <li className="user-txt">
                Prashanth
               </li>
               <li className="user-txt">
                Neeraj
               </li>
               <li className="user-txt">
                Srinivas               </li>
               <li className="user-txt">
                Zainab
               </li>
               <li className="user-txt">
                Vignesh
               </li>
           </ol>
        </div>
        
        <div class="col">
            <ul>
                <li className="points-li user-txt">1899</li>
                <li className="points-li user-txt">1700</li>
                <li className="points-li user-txt">1690</li>
                <li className="points-li user-txt">1686</li>
                <li className="points-li user-txt">1337</li>


            </ul>
        </div>
    </div>

  </div>
</div>

</header>
</div>
    );
}

export default Points;