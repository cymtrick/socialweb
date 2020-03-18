import React from 'react';
import '../App.css';
import profile from '../img/profile.png';

function ForumPost(){
    return(
<div className="App">
        <nav class="navbar  navbar-dark bg-dark">
            <div class="navbar-brand ">IRUN - Create Post</div>

            <img src = {profile} className="img-pro"></img>
        
</nav>
<header className="App-header">
<div class="card bg-light shadow-lg mb-3" className="App-card-Topic">
  <div class="card-header"><b>Create Post</b> &nbsp; &nbsp; 

 </div>
  <div class="card-body shadow-lg ">
  <div class="form-group">
  <label for="usr" className="user-txt"><b>Title:</b></label>
  <input type="text" class="form-control" id="usr">
      </input>
</div>

<div class="form-group">
  <label for="comment" className="user-txt"><b> Post: </b></label>
  <textarea class="form-control" rows="10" cols="5" id="comment"></textarea>
</div>


<div class= "row">
<button type="button" class="btn shadow-lg  rounded btn-primary btn-block">Publish Post</button>

</div>
</div>
</div>


</header>
</div>
    );
}

export default ForumPost;