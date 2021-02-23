import React, { Component } from 'react';
import Header from '../header'
import Nav from '../nav'
import CatalogueFemale from './catalogueFemale'
import Footer from '../footer'

class CategoryFemale extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <CatalogueFemale />
                <Footer />
            </div>
        )
    }
}

export default CategoryFemale