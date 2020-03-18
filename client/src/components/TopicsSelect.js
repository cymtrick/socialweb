import React from 'react';
import '../App.css';
import cplus from '../img/cplus.png'
import Java from '../img/Java.png'
import devops from '../img/devops.png'
import networking from '../img/networking.png'

function TopicsSelect(){
    return (

        <div className="App">
        <nav class="navbar  navbar-dark bg-dark">
            <div class="navbar-brand ">IRUN</div>

        <div class="navbar-brand">Skip</div>
</nav>
    
        <header className="App-header">
            <h2>Select Your Topics</h2>
            <div class="row">
        <div class="col mb-3">
        <div class="card shadow-lg" >
  <div class="card-body" className="App-card-Topic">
      <img src = {cplus} class="rounded-circle card-img-top" className="img-topi"></img>
    
  <h5 class="card-title"> <input type="checkbox" aria-label="Checkbox for following text input">
          </input>C++</h5>
  </div>
</div>
        </div>

        <div class="col mb-3">
        <div class="card shadow-lg" >
  <div class="card-body" className="App-card-Topic">
  <img src = {Java} class="rounded-circle card-img-top" className="img-topi"></img>
  
  <h5 class="card-title"> <input type="checkbox" aria-label="Checkbox for following text input">
          </input>Java</h5>

  </div>
</div>
        </div>

        
    
        <div class="col mb-3">
        <div class="card shadow-lg" >
  <div class="card-body" className="App-card-Topic">
  <img src = {devops} class="rounded-circle card-img-top" className="img-topi"></img>

  <h5 class="card-title"> <input type="checkbox" aria-label="Checkbox for following text input">
          </input>Devops</h5>

  </div>
</div>
        </div>

        <div class="col mb-3">
        <div class="card shadow-lg" >
  <div class="card-body" className="App-card-Topic">
  <img src = {networking} class="rounded-circle card-img-top" className="img-topi"></img>

   <h5 class="card-title"> <input type="checkbox" aria-label="Checkbox for following text input">
          </input> Networking</h5>


  </div>
</div>
        </div>

 
        </div>

<br></br>

               
        <input class="btn btn-dark shadow-lg " type="submit" value="Next">
  </input>
        
        </header>

        </div>
      
    );


}

export default TopicsSelect