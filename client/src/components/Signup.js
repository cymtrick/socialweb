import React from 'react';

import '../App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, browserHistory, IndexRoute } from 'react-router-dom';

function Signup() {
  return (
    <div className="App">
    
   <div className="App-header"> 

<h2 className="App-header-text"> IRUN </h2>
<br>
</br>

<div class="shadow bg-white mb-5 rounded">
<div class="input-group  flex-nowrap input-group-lg shadow bg-white rounded">
  
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
  </input>
</div>
</div>


<div class="shadow bg-white mb-5 rounded">
<div class="input-group flex-nowrap input-group-lg ">
  
  <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping">
  </input>
  
</div>
</div>
<div className="Login-btn">
<input  class="btn btn-dark" type="submit" value="Signup">
</input>

</div>

<div className="Login-txt">
<p> <b>  Already have an account? 
<BrowserRouter>
 <Link to='/Signup'> Login </Link>
 </BrowserRouter>

  </b></p>

<p> <b>  Forgot Password? </b></p>

</div>

</div>
</div>
    
  );
}

export default Signup;
