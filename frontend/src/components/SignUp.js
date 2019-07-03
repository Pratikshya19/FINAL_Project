import React, { Component } from 'react';


export default class SignUp extends Component {

    signUp = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let password1 = e.target[2].value
        let password2 = e.target[3].value
        if(password1 !== password2){
            alert("Please try again.")
            e.target[2].value = ""
            e.target[3].value = ""
        }
        if (name !== "" && password1 !== "") {
            fetch('http://localhost:3000/signup', {
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
            if(obj.error){
                alert(obj.error)
            }
        })
        .catch(err => {
            alert(err)
        })
    }
}


    render() {
        return(
            <div>
                <form onSubmit={this.signUp}>
                    <input type="text" name="name" placeholder="Username"/>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="password" placeholder="Confirm Password"/>
                    <input type="submit" value="Create Account"/>
                </form>
            </div>
        )
    }

}