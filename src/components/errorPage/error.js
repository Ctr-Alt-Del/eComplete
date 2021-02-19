import React,{ Component } from 'react'

class Error extends Component{
    render(){
        return(
            <div class="error" style={{margin: "25px"}}>
                <h2 class="errorTitle">Whoops, our bad...</h2>
                <p class="errorInfo"><b>The page you requested was not found, and we have a fine guess why.</b></p>
                <ul>
                    <li>If you typed the URL directly, please make sure the spelling is correct</li>
                    <li>If you clicked on a link to get here, the link is outdated</li>
                </ul>
                <br/>
                <p><b>What can you do?</b></p>
                <p>Have no fear, help is near! There are many ways you can get back on track with the store.</p>
                <ul>
                    <li><a href="/">Go back</a> to the home page</li>
                    <li>Click on the home button</li>
                    <li>Switch to a different page from the links above</li>
                </ul>
            </div>
        )
    }
}
export default Error