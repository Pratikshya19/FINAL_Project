import React, { Component } from 'react';


export default class login extends Component {

    login = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let password = e.target[1].value
        if (name !== "" && password !== "") {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    name: name, 
                    password: password
            })
        })
        .then(res => res.json())
        .then(obj => {
            console.log(obj.token)
            localStorage.setItem('token', obj.token)
            fetch('http://localhost:3000/items', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    
                })
                
            
            })
        
        })
    }
    
}


    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="name" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }

}