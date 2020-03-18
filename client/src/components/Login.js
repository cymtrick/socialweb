import React from 'react';
import '../App.css';

function Login()
{
    return (
        <div className="App">
      <header className="App-header">
      <h1> IRUN </h1>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">

  <div class="input-group mb-3">
  
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </input>
</div>
<div class="input-group mb-3">
    <input type="Password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
    </input>
</div>
  
<input class="btn btn-dark btn-block" type="submit" value="Login">
</input>

<p className="Login-txt"><b>Already have an account? Sign up </b></p>
<p className="Login-txt"><b>Forgot Password?</b></p>
  </div>
</div>
    </header>
    </div>
    );
}

export default Login;
