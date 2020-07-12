import React from 'react'
import './gridGallery1.css'
import jeans from '../assets/jeans.jpg'

function GridGallery1() {
    return (
        <div className="clearfix grid-gallery">
            <h1 className="sec-header">Product Gallery</h1>
            <div className="row">
                <div className="column">
                    <img src={jeans} alt="pic"/>
                    <img src={jeans} alt="pic"/>
                    <img src={jeans} alt="pic"/>
                    <img src={jeans} alt="pic"/>
                    <img src={jeans} alt="pic"/>
                    <img src={jeans} alt="pic"/>
                    <img src={jeans} alt="pic"/>
                </div>
                
            </div>
        </div>
    )
}

export default GridGallery1
