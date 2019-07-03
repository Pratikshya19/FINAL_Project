import React, { Component } from 'react'
// import Details from './Details'
// import Item from './Item'

const ProductContext = React.createContext();


//Provider
//Consumer
class ProductProvider extends Component {
    constructor(){
        super()
        this.state = {
         paintings: [],
          isLoading: false,
          displaypaintings:[],
          inCart: false,
          total:0,
          count:0,
          selecteditem: {}
        }
      }
      



     componentDidMount(){
        fetch(`http://localhost:3000/items`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        this.setState({
          paintings: data,
          displaypaintings: data,
          isLoading: false,
         
        })
      })
      }

      

handleDetail = (painting) => {
  console.log("clicked:",painting)

   this.setState({
     ...this.state,
     selecteditem: painting
   })
  

   
}

addToCart = () => {
console.log('hello from add to cart');
}

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                
            }}>
              {this.props.children}
            </ProductContext.Provider>
            
        )
    }
   
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
