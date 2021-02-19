import React, {Component} from 'react'

class Nav extends Component {
    render(){ 
        return(
            <nav class="navBar">
                <a href="/new/404-Not-Found">What's New</a>
                {/* <a href="/category">Women</a> */}
                <a href="/category/women">Women</a>
                <a href="/category/men">Men</a>
                <a href="/gear/404-Not-Found">Gear</a>
                <a href="/training/404-Not-Found">Training</a>
                <a href="/sales/404-Not-Found">SALES</a>
                <a href="/sale/404-Not-Found">Sale</a>
            </nav>
        )
    }
}

export default Nav