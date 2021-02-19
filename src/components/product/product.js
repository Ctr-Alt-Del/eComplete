import React, { Component } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Woman1 from './preview1.jpg'
import WomanBack1 from './previewBack1.jpg'
import ProductData from '../productsFemale.json'

class ProductFemale extends Component {
    render() {
        return (
            <div class="body">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <Slide easing="ease">
                                <div className="each-slide">
                                    <div>
                                        <img src={Woman1} style={{heigh: "566px", width: "456px"}} />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <img src={WomanBack1} style={{heigh: "566px", width: "456px"}} />
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="infoStuff">
                            {ProductData.map((productDetail, index) => {
                                return <h1 class="productHeading">{productDetail.name}</h1>
                            })}
                            <span class="reviews">
                                <p>Starssss</p>
                                <p><a>3 Reviews</a></p>
                                <p><a>Add your review</a></p>
                            </span>
                            {ProductData.map((productDetail, index) => {
                                return <p class="price">{productDetail.price}</p>
                            })}
                            <br />
                            <br />
                            <b><p style={{ fontSize: "15px" }}>Size</p></b>
                            <span style={{ display: "inline" }}>
                                <button class="size">XS</button>
                                <button class="size">S</button>
                                <button class="size">M</button>
                                <button class="size">L</button>
                                <button class="size">XL</button>
                            </span>
                            <br />
                            <br />
                            <b><p style={{ fontSize: "15px" }}>Color</p></b>
                            <span style={{ display: "inline" }}>
                                <button class="color" style={{ backgroundColor: "orange" }}></button>
                                <button class="color" style={{ backgroundColor: "yellow" }}></button>
                                <button class="color" style={{ backgroundColor: "green" }}></button>
                            </span>
                            <br />
                            <br />
                            <b><p style={{ fontSize: "15px" }}>Qty</p></b>
                            <input type="text" placeholder="1" class="quantity"></input>
                            <br />
                            <br />
                            <input type="submit" class="addToCart" value="Add to Cart" />
                            <br />
                            <br />
                            <span style={{ display: "inline" }}>
                                <button class="likeButton2"><i class="fas fa-heart"></i> ADD TO WISH LIST</button>
                                <button class="likeButton2"><i class="fas fa-signal"></i> ADD TO COMPARE</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductFemale