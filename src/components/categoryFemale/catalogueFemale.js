import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
import ProductData from '../productsFemale.json'

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

class Catalogue extends Component {
    constructor(props){
        super(props)
        this.state = {
            please: '<i class="fas fa-chevron-down"></i>'
        }
    }
    fetchProduct() {
        fetch(`http://localhost:3000/` + this.state.id)
          .then(response => response.json())
          .then(data =>
            this.setState({
              users: data,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }
    render() {
        return (
            <div class="catalogue2">
                <h1 style={{ fontWeight: "300" }}>Tops</h1>
                <br />
                <br />
                <div class="row">
                    <div class="col-sm-2 filters">
                        <p class="collapseHeading" style={{ paddingBottom: "15px" }}>Options</p>
                        <Collapsible trigger="CATEGORY" class="test">
                            <a>Jackets  (12)</a><br />
                            <a>Hoodies  (12)</a><br />
                            <a>Tees  (12)</a><br />
                            <a>Bras {'&'} Tanks  (14)</a><br />
                        </Collapsible>
                        <Collapsible trigger="STYLE" class="test">
                            <a>Insulated  (4)</a><br />
                            <a>Jacket  (12)</a><br />
                            <a>Lightweight  (6)</a><br />
                            <a>Hooded  (5)</a><br />
                            <a>Heavy Duty  (1)</a><br />
                            <a>Raincoat  (2)</a><br />
                            <a>Hard Shell  (3)</a><br />
                        </Collapsible>
                        <Collapsible trigger="SIZE" class="test">
                            <button class="size">XS</button>
                            <button class="size">XL</button>
                            <br />
                            <br />
                        </Collapsible>
                        <Collapsible trigger="CLIMATE" class="test">
                            <a>All-Weather  (8)</a><br />
                            <a>Cold  (4)</a><br />
                            <a>Cool  (17)</a><br />
                            <a>Indoor  (35)</a><br />
                            <a>Mild  (16)</a><br />
                            <a>Rainy  (2)</a><br />
                            <a>Spring  (21)</a><br />
                            <a>Warm  (28)</a><br />
                            <a>Windy  (8)</a><br />
                            <a>Wintry  (6)</a><br />
                        </Collapsible>
                        <Collapsible trigger="COLLAR" class="test">
                            <a>N/A   (1)</a><br />
                        </Collapsible>
                        <Collapsible trigger="COLOR" class="test">
                            <button class="color" style={{ backgroundColor: "black" }}></button>
                            <button class="color" style={{ backgroundColor: "blue" }}></button>
                            <button class="color" style={{ backgroundColor: "brown" }}></button>
                            <button class="color" style={{ backgroundColor: "grey" }}></button>
                            <button class="color" style={{ backgroundColor: "green" }}></button>
                            <button class="color" style={{ backgroundColor: "orange" }}></button>
                            <button class="color" style={{ backgroundColor: "pink" }}></button>
                            <button class="color" style={{ backgroundColor: "red" }}></button>
                            <button class="color" style={{ backgroundColor: "white" }}></button>
                            <button class="color" style={{ backgroundColor: "yellow" }}></button>
                            <br />
                            <br />
                        </Collapsible>
                        <Collapsible trigger="MATERIAL" class="test">
                            <a>Cotton  (6)</a><br />
                            <a>Fleece  (2)</a><br />
                            <a>Hemp  (1)</a><br />
                            <a>Jersey  (1)</a><br />
                            <a>Lycra®  (6)</a><br />
                            <a>Nylon (10)</a><br />
                            <a>Microfiber  (1)</a><br />
                            <a>Polyester  (22)</a><br />
                            <a>Spandex  (13)</a><br />
                            <a>HeatTec®  (3)</a><br />
                        </Collapsible>
                        <Collapsible trigger="PATTERN" class="test">
                            <a>Checked (1)</a><br />
                            <a>Color-Blocked  (2)</a><br />
                            <a>Solid  (46)</a><br />
                            <a>Striped  (1)</a><br />
                        </Collapsible>
                        <Collapsible trigger="PRICE" class="test">
                            <a>$0.00 - $9.99  (1)</a><br />
                            <a>$10.00 - $19.99  (1)</a><br />
                            <a>$20.00 - $29.99  (12)</a><br />
                            <a>$30.00 - $39.99  (13)</a><br />
                            <a>$40.00 - $49.99  (4)</a><br />
                            <a>$50.00 - $59.99  (10)</a><br />
                            <a>$60.00 - $69.99  (5)</a><br />
                            <a>$70.00 - $79.99  (3)</a><br />
                            <a>$80.00 and above  (1)</a><br />
                        </Collapsible>
                    </div>
                    <div class="col-sm-10 linkToProducts">
                        <div class="row">
                            {ProductData.products.map((productDetails) => {
                                console.log(productDetails);
                                return (
                                    <div class="col-sm-3">
                                        <a href="http://localhost:3000/products/2/"><div class="product2">
                                            <img class="womanImg" src={productDetails.image} />
                                            <p>{productDetails.name}</p>
                                            <p>Starssssss <a class="review" href="" style={{ color: "blue", textDecoration: "underline" }} >{productDetails.reviews}</a></p>
                                            <p><b>{productDetails.price}</b></p>
                                            <span style={{ display: "inline" }}>
                                                <button class="size">XS</button>
                                                <button class="size">S</button>
                                                <button class="size">M</button>
                                                <button class="size">L</button>
                                                <button class="size">XL</button>
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ display: "inline" }}>
                                                <button class="color" style={{ backgroundColor: productDetails.color1 }}></button>
                                                <button class="color" style={{ backgroundColor: productDetails.color2 }}></button>
                                                <button class="color" style={{ backgroundColor: productDetails.color3 }}></button>
                                            </span>
                                            <span class="magicButtons">
                                                <button class="shopify">Add to Cart</button>
                                                <button class="likeButton"><i class="fas fa-heart"></i></button>
                                                <button class="likeButton"><i class="fas fa-signal"></i></button>
                                            </span>
                                            <br />
                                        </div>  
                                        <br/></a>
                                    </div>
                                );
                            })}
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        )
    }

}

export default Catalogue