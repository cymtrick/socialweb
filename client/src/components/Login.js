import React from 'react';
import '../App.css';
import axios from 'axios';

export default class Login extends React.Component {
  state = {
    username: '',
    password:''
  }



    // checking()
    // {
    //     access_token = localStorage.getItem('access_token');
    //     if (access_token!=="") 
    //     {           
    //         console.log(access_token);
    //         axios({
    //             method:"get",
    //             url: 'https://api.wibes.app/v0.1/verify/token',
    //             headers:{
    //                 "Authorization":"Bearer "+localStorage.getItem("access_token")
    //             }
                
    //         }).then((res)=>
    //         {
    //             console.log(res.data.access_token);

    //             if(res.data.access_token==="ok")
    //             {
    //                 document.location="/stats"
    //             }
    //             else
    //             {
    //                 document.location="/"
    //             }
    //         });
    //     }       
    // }

    handleChange = event => {
  const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    

    axios.post(`http://localhost:5000/login`,  {
      username: this.state.username,
      password: this.state.password
    } )
      .then(res => {
        if(res.data["jwt_access_token"])
        {
          localStorage.setItem("access_token",res.data["jwt_access_token"])
          document.location = "stats"
        }
        else
        {
          // srinivas can u write a dialog box here that login failed
        }
      })
  }

      componentDidMount()
    {
        
        // this.checking();
    }

render(){
    return (
<div className="App">
      <header className="App-header">
      <h1> IRUN </h1>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">

<form onSubmit={this.handleSubmit}>
  <div class="input-group mb-3">
  
  <input type="text" class="form-control" name="username" placeholder="Username"  onChange={this.handleChange} aria-label="Username" aria-describedby="basic-addon1">
    </input>
  </div>

  <div class="input-group mb-3">
    <input type="Password" class="form-control" name="password" placeholder="Password" onChange={this.handleChange} aria-label="Username" aria-describedby="basic-addon1">
    </input>
  </div>

   <input class="btn btn-dark btn-block" type="submit" value="Login"></input>
</form>
  

<p className="Login-txt"><b>Already have an account? <a href="signup">Sign up </a></b></p>
<p className="Login-txt"><b>Forgot Password?</b></p>
  </div>
</div>
    </header>
</div>
    );
  }
}

