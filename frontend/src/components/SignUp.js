import React, { Component } from 'react';
import { Col, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {

    SignUp = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let password1 = e.target[2].value
        let password2 = e.target[3].value
        if(password1 !== password2){
            alert("Password doesn't match. Please try again.")
            e.target[2].value = ""
            e.target[3].value = ""
        }
        if (name !== "" && password1 !== "") {
            fetch('http://localhost:3000/SignUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    name, email, password: password1
            })
        })
        .then(res => res.json())
        .then(obj => {
            console.log(obj, "account-created")
            if(obj.error){
                alert(obj.error)
            }
        })
        .catch(err => {
            alert(err)
        })
        .then(e.target.reset())
    }
}


    render() {
        return(
            
                 <Container>
                 <Col sm="12" md={{ size: 4, offset: 3 }}>
                 <form
            className="form-signin lower-content" onSubmit={this.SignUp}>
<h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
<label className="sr-only">Username</label>
<input className="form-control"
              name="name"
              placeholder="UserName"/>
            <br />
<label className="sr-only">Password</label>
            

            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"/>
            <br />

            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"/>
            <br />


              <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Confirm Password"/><br/>
              <Button
              className="btn btn-lg btn-primary btn-block black-button"
              type="submit">
              Sign Up
            </Button>
            <br/>
          </form>
          <br />
          Have an account already? <Link to="/login">LogIn</Link>
        </Col>
      </Container>
    );
  }
}

               




    //              <div>

    //             <form onSubmit={this.SignUp}>
    //                 <input type="text" name="name" placeholder="Username"/>
    //                 <input type="text" name="email" placeholder="Email" />
    //                 <input type="password" name="password" placeholder="Password"/>
    //                 <input type="password" name="password" placeholder="Confirm Password"/>
    //                 <input type="submit" value="Create Account"/>
    //             </form>
    //         </div>
    //     )
    // }

// }