import React, { Component } from 'react'
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <a href="/"><img src={logo} class="logo" alt="logo" /></a>
        )
    }
}

export default Header