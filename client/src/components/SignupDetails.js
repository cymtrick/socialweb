import React from 'react';
import '../App.css';



function SignupDetails()
{
    return (

        <div className="App">
        <header className="App-header">
        <h1> IRUN  </h1>
        
    <div class="card-body">
  
    <div class="input-group mb-3 shadow-lg   rounded">
    
    <input type="text" class="form-control" placeholder="Username" aria-label="Email" aria-describedby="basic-addon1">
      </input>
  </div>
  <div class="input-group mb-3 shadow-lg rounded">
      <input type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
      </input>
  </div>

  <div class="input-group mb-3 shadow-lg rounded">
      <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
      </input>
  </div>

  <div class="input-group mb-3 shadow-lg rounded">
      <input type="text" class="form-control" placeholder="Date of Birth" aria-label="DOB" aria-describedby="basic-addon1">
      </input>
  </div>

  <div class="row">
      <div class="col-md-6">
      <div class="input-group mb-3">

  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Study Level</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
      </div>

      <div class="col-md-6">
      <div class="input-group mb-3">

  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Class / Year</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
      </div>
  </div>
    
    <div class="input-group-text mb-3">
      <input type="checkbox" aria-label="Checkbox for following text input">
          </input> 
          <p className="Agree-txt"><b> I agree with the terms and conditions</b></p>
      
    </div>
    
  <input class="btn btn-dark btn-block shadow-lg " type="submit" value="Next">
  </input>
  
    </div>
  
      </header>
      </div>
    );
}

export default SignupDetails