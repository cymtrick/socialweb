import React from 'react';
import '../App.css';
import profile from '../img/profile.png';

function User(){
    return (

        <div className="App">
        <nav class="navbar  navbar-dark bg-dark">
           <a href="/stats">  <div class="navbar-brand ">IRUN - User Settings</div></a>
            <a href="user">  <img src = {profile} className="img-pro"></img></a>
            <a href="/"><div class="navbar-brand ">Logout</div></a>
</nav>
<header className="App-header">

<div class="card shadow p-3 mb-5 bg-white rounded" >
  <div class="card-body">
      <div class="mb-5">
          <img src = {profile} class="shadow-lg bg-white rounded" className="img-topi"></img>
 <a href="/"><div class="navbar-brand ">Logout</div></a>
       </div> 

       <label className="user-txt"><b>Full Name</b></label> &nbsp;&nbsp;&nbsp;&nbsp;
       <label className="user-txt"><b>Username</b></label> 
          <div class="row mb-2">
              < div class="col">
          <div class="input-group input-group ">
             
              
          <input type="text" placeholder="Sundar Pichai" class="form-control shadow-lg  bg-white rounded" aria-label="Sizing example input">
            </input>
            </div></div>
            
            < div class="col">
<div class="input-group input-group ">
   
   
<input type="text" placeholder="THECEO@ABC" class="form-control shadow-lg   bg-white rounded" aria-label="Sizing example input">
  </input>
  </div></div>
  
          
          </div>





          <label className="user-txt"><b>Date of Birth</b></label> 

<div class="row mb-2">
    < div class="col">
<div class="input-group input-group">
   
   
<input type="Date" placeholder="" class="form-control shadow-lg   bg-white rounded" aria-label="Sizing example input">
  </input>
  </div></div>
  </div>
       




<label className="user-txt"><b>Email</b></label> &nbsp; &nbsp; &nbsp;&nbsp;
<label className="user-txt"><b>Password</b></label> 

<div class="row mb-5">
    < div class="col">
<div class="input-group input-group">
   
   
<input type="Email" placeholder="sundar@google.com" class="form-control shadow-lg   bg-white rounded" aria-label="Sizing example input">
  </input>
  </div></div>
  < div class="col">
<div class="input-group input-group">
   
   
<input type="Password" placeholder="*****" class="form-control shadow-lg  bg-white rounded" aria-label="Sizing example input">
  </input>
  </div></div>


</div>


<div class="row">

    <div class="col-md-6">
    <div class="input-group mb-5 shadow-lg  bg-white rounded">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Study Level</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
    </div>

    
    <div class="col-md-6">
    <div class="input-group mb-5 shadow-lg  bg-white rounded">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Class/Year</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
    </div>
</div>

<div class= "row">
<button type="button" data-toggle="modal" data-target="#myModal" class="btn shadow-lg  rounded btn-primary btn-block">Save Changes</button>

</div>

<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
       
        <div class="modal-body">
          <p>Changes are saved Successfully. You are Awesome. Cheers!!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


          </div>
      </div>
    
</header>
</div>

    );

}

export default User;