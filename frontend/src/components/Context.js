// import React, { Component } from 'react'
// import Details from './Details'
// import ItemList from './ItemList'
// import Navbar from './Navbar'
// import Cart from './Cart'

// // const ProductContext = React.createContext();

// class Context extends Component {
//     constructor(){
//         super()
//         this.state = {
//          paintings: [],
//           isLoading: false,
//           displaypaintings:[],
//           inCart: false,
//           total:0,
//           count:0,
//           selecteditem: {}
//         }
//       }
      



//      componentDidMount(){
//         fetch(`http://localhost:3000/items`)
//         .then(res => res.json())
//         .then(data => {
          
//           console.log(data)
//           debugger
//         this.setState({
//           paintings: data,
//           displaypaintings: data,
//           isLoading: false,
         
//         })
//       })
//       }

      

// handleDetail = (painting) => {
//   console.log("clicked:",painting)

//    this.setState({
//      ...this.state,
//      selecteditem: painting
//    })
  

   
// }

// addToCart = () => {
// console.log('hello from add to cart');
// }

//     render() {
//         return (
//             <ItemList displaypaintings={this.state.displaypaintings} handleDetail={this.handleDetail} addToCart={this.addToCart}/> 
                
           
      
            
//         )
//     }
   
// }


// export default Context;
