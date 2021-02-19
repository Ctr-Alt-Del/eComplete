import React, { Component } from 'react';
import Header from '../header'
import Nav from '../nav'
import CatalogueMale from './catalogueMale'
import Footer from '../footer'

class CategoryMale extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <CatalogueMale />
                <Footer />
            </div>
        )
    }
}

export default CategoryMale