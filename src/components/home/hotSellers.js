import React, { Component } from 'react'
import Seller1 from './seller1.jpg'
import Seller2 from './seller2.jpg'
import Seller3 from './seller3.jpg'
import Seller4 from './seller4.jpg'
import Seller5 from './seller5.jpg'


class HotSellers extends Component {
    render() {
        return (
            <div>
                <h1 class="title">Hot Sellers</h1>
                <p class="subTitle">Here is what's trending on Luma right now</p>
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="product">
                                <img class="topSeller" src={Seller1} />
                                <div class="info">
                                    <p style={{ fontSize: "15px" }}>LifeLong Fitness IV</p>
                                    <p><b>$15.00</b></p>
                                    <span>
                                        <button class="shopify">Add to Cart</button>
                                        <button class="likeButton"><i class="fas fa-heart"></i></button>
                                        <button class="likeButton"><i class="fas fa-signal"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="product">
                                <img class="topSeller" src={Seller2} />
                                <div class="info">
                                    <p style={{ fontSize: "15px" }}>Hero Hoodie</p>
                                    <p><b>$54.00</b></p>
                                    <span>
                                        <button class="shopify">Add to Cart</button>
                                        <button class="likeButton"><i class="fas fa-heart"></i></button>
                                        <button class="likeButton"><i class="fas fa-signal"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="product">
                                <img class="topSeller" src={Seller3} />
                                <div class="info">
                                    <p style={{ fontSize: "15px" }}>Argus All-Weather Tank</p>
                                    <p><b>$22.00</b></p>
                                    <span>
                                        <button class="shopify">Add to Cart</button>
                                        <button class="likeButton"><i class="fas fa-heart"></i></button>
                                        <button class="likeButton"><i class="fas fa-signal"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="product">
                                <img class="topSeller" src={Seller4} />
                                <div class="info">
                                    <p style={{ fontSize: "15px" }}>Radiant Tee</p>
                                    <p><b>$22.00</b></p>
                                    <span>
                                        <button class="shopify">Add to Cart</button>
                                        <button class="likeButton"><i class="fas fa-heart"></i></button>
                                        <button class="likeButton"><i class="fas fa-signal"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                        <div class="product">
                            <img class="topSeller" src={Seller5} />
                            <div class="info">
                                <p style={{ fontSize: "15px" }}>LifeLong Fitness IV</p>
                                <p><b>$15</b></p>
                                <span>
                                    <button class="shopify">Add to Cart</button>
                                    <button class="likeButton"><i class="fas fa-heart"></i></button>
                                    <button class="likeButton"><i class="fas fa-signal"></i></button>
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotSellers