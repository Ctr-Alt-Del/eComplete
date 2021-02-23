import React, { Component } from 'react';
import Header from '../header'
import Nav from '../nav'
import Catalogue from './catalogue'
import HotSellers from './hotSellers'
import Footer from '../footer'

class Home extends Component {
    render(){
        return(
            <div>
                <Header />
                <Nav />
                <Catalogue />
                <HotSellers />
                <Footer />
            </div>
        )
    }
}

export default Home