import React, { Component } from 'react'
import Collapsible from 'react-collapsible';

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


class CheckPage extends Component {
    state = {
        subTotal: '15',
        shipping: 'Not yet calculated',
        total: '15'
    }
    render() {
        return (
            <div class="container">
                <h1 class="shipTitle">Shipping Address</h1>
                <hr />
                <div class="col-sm-8">

                    <form>
                        <br />
                        <label for="email">Email Address: </label><br />
                        <input type="text" id="email" name="email" class="shipInput" required /><br />
                        <p>You can create an account after checkout.</p>
                        <br />
                        <hr />
                        <label for="fname">First Name: </label><br />
                        <input type="text" id="fname" name="fname" class="shipInput" required /><br /><br />
                        <label for="lname">Last Name: </label><br />
                        <input type="text" id="lname" name="lname" class="shipInput" required /><br /><br />
                        <label for="company">Company: </label><br />
                        <input type="text" id="company" name="company" class="shipInput" /><br /><br />
                        <label for="address">Street Address: </label><br />
                        <input type="text" id="address" name="address" class="shipInput" required /><br /><br />
                        <label for="city">City: </label><br />
                        <input type="text" id="city" name="city" class="shipInput" required /><br /><br />
                        <label for="province">State/Province: </label><br />
                        <input type="text" id="province" name="province" class="shipInput" required /><br /><br />
                        <label for="code">Postal Code: </label><br />
                        <input type="text" id="code" name="code" class="shipInput" required /><br /><br />

                    </form>
                </div>
                <div class="col-sm-4">
                    <div class="deets">
                        <h1 class="shipTitle">Order Summary</h1>
                        <hr />
                        <span class="toats">
                            <p>Cart Subtotal</p>
                            <p class="tots">{this.state.subTotal}</p>
                        </span>
                        <span class="toats">
                            <p>Shipping</p>
                            <p class="tots">{this.state.shipping}</p>
                        </span>
                        <hr />
                        <span class="toats">
                            <h4>Order Total</h4>
                            <p class="tots">{this.state.total}</p>
                        </span>
                        <Collapsible trigger="Item in cart" class="test">
                            <p>A sweater or something</p><br />
                        </Collapsible>
                    </div>
                </div>
            </div>
        )
    }
}
export default CheckPage