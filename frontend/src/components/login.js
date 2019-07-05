import React, { Component } from 'react';
import Title from './Title'

export default class login extends Component {
    state = {
        name: "",
        // password: "",
        // currentCustomer: {}
      };
  
      componentDidMount() {
        const token = localStorage.token;
        console.log(token)
        fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
              console.log(data)
            if (!data.error) {
              this.setState({
                currentCustomer: data
              });
            }
          });
      }






    login = (e) => {
        e.preventDefault()
         let name = e.target[0].value
         let password = e.target[1].value
        //  debugger
    
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
        .then(data => {
            console.log(data)
if (!data.error){
    localStorage.token = data.token;
    
    this.setState({
        name: data.name

      });
      
}
    
           else {
            console.log("error")
            this.setState({
              loginError: data.error})}
       
    })
}



    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="name" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="submit" value="login"/>
                </form>
                <Title name={this.state.name}/>
            </div>
        )
    }

}