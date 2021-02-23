import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div class="feet">
                <div class="links">
                    <br />
                    <br />
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <a href="/404-not-found">About Us</a>
                                <a href="/404-not-found">Customer Service</a>
                                <br />
                                <br />
                                <a href="/404-not-found" style={{ bottom: "1%" }}>Main Website Store</a>
                            </div>
                            <div class="col-sm-3">
                                <a href="/404-not-found">Privacy and Cookie Policy</a>
                                <a href="/404-not-found">Search Terms</a>
                                <a href="/404-not-found">Orders and Returns</a>
                                <a href="/404-not-found">Contact Us</a>
                                <a href="/404-not-found">Advanced Search</a>
                            </div>
                            <div class="col-sm-6">
                                <form>
                                    <span class="emailThingy">
                                        <input class="mail mailInput" type="text" id="email" name="email" placeholder="Enter your email address"></input>
                                        <input class="mail mailSubmit" type="submit" value="Subscribe" />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="foot">
                        <span>Copyright © 2018-2021 blah blah blaaaaah</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer