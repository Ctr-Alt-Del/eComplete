import React, { Component } from 'react'
import Head from './head.jpg';
import Left from './left.jpg';
import Middle from './middle.jpg';
import Right from './right.jpg';
import Top from './top.png';
import Bottom from './bottom.jpg';

class Catalogue extends Component {
    render() {
        return (
            <div class="catalogue">
                <img src={Head} class="catalogueImage yoga1" />
                <div class="rightText">
                    <p class="heading">New Luna Yoga Collection</p>
                    <p class="description">Get fit and look fab in new seasonal styles</p>
                    <button class="shopYoga">Shop New Yoga</button>
                </div>
                <img src={Left} class="catalogueImage yoga2" />
                <div class="leftText">
                    <p class="heading2">20% OFF</p>
                    <p class="description2">Luma pants when you shop today*</p>
                    <button class="shopPantsTees">Shop pants {'>'}</button>
                </div>
                <div class="yoga3">
                    <img class="pngTop yoga3" src={Top} />
                </div>
                <div class="topText">
                    <p class="description">Even more ways to mix and match</p>
                    <p class="heading">Buy 3 Luma tees get a 4th free</p>
                    <button class="shopPantsTees">Shop Tees {'>'}</button>
                </div>
                <img src={Right} class="catalogueImage yoga4" />
                <div class="righterText">
                    <p class="description">Science meets performance</p>
                    <p class="heading3">Wicking to raingear, Luma covers you</p>
                    <button class="shopPantsTees">Shop Performance {'>'}</button>
                </div>
                <img src={Middle} class="catalogueImage yoga5" />
                <div class="middleText">
                    <p class="description">Take it from Erin</p>
                    <p class="heading">Luma founder Erin Renny shares her favorites</p>
                    <button class="shopPantsTees">Shop Erin Recommends {'>'}</button>
                </div>
                <img src={Bottom} class="catalogueImage yoga6" />
                <div class="bottomText">
                    <p class="description">Twice around, twice as nice</p>
                    <p class="heading3">Find conscientious, comfy cloting in or eco-friendly colection</p>
                    <button class="shopPantsTees">Shop Eco-Friendly {'>'}</button>
                </div>
            </div>
        )
    }
}

export default Catalogue