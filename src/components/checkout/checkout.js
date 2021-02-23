import React,{ Component } from 'react'
import Header from '../header'
import Nav from '../nav'
import Footer from '../footer'
import CheckPage from './checkPage'

class Checkout extends Component{
    render(){
        return(
            <div>
                <Header />
                <CheckPage />
                <Footer />
            </div>
        )
    }
}
export default Checkout;