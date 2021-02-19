import React,{Component} from 'react'
import Error from './error.js'
import Header from '../header'
import Nav from '../nav'
import Footer2 from '../footer2'

class ErrorPage extends Component{
    render(){
        return(
            <div class="errorPage">
                <Header />
                <Nav />
                <Error />
                <Footer2 style={{position: "absolute"}}/>
            </div>
        )
    }
}
export default ErrorPage