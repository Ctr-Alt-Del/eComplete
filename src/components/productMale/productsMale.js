import React,{ Component } from 'react'
import Header from '../header'
import Nav from '../nav'
import Product from './product'
import Footer from '../footer'

class Products extends Component{
    render(){
        return(
            <div>
                <Header />
                <Nav />
                <Product />
                <Footer />
            </div>
        )
    }
}

export default Products