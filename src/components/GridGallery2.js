import React from 'react'
import shirt from '../assets/shirt.jpg'
import bts from '../assets/bts.jpg'
import shirthang from '../assets/shirthang.jpg'
import jns from '../assets/jns.jpg'
import boy from '../assets/boy.jpg'
import girl from '../assets/girl.jpg'
import stripedtshirt from '../assets/stripedtshirt.jpg'
import jeans from '../assets/jeans.jpg'



import './gridGallery2.css'

function GridGallery2() {
    return (
        <>

<h1 className="sec-header">Product Gallery</h1>
        <div className="gallery clearfix">
        
            <a target="_blank" href={shirt}>
                <img src={shirt} alt="Cinque Terre" width="600" height="400"/>
            </a>
            <div className="desc">t-shirts</div>
        </div>

        <div className="gallery">
            <a target="_blank" href={jns}>
                <img src={jns} alt="Northern Lights" width="600" height="400"/>
            </a>
            <div className="desc">jeans</div>
        </div>

        <div className="gallery">
            <a target="_blank" href={shirthang}>
                <img src={shirthang} alt="Mountains" width="600" height="400"/>
            </a>
        <div className="desc">full sleeve shirts</div>
        </div>

        <div className="gallery">
            <a target="_blank" href={bts}>
                <img src={bts} alt="Mountains" width="600" height="400"/>
            </a>
        <div className="desc">Black t-shirts</div>
        </div>

        <div className="gallery">
            <a target="_blank" href={boy}>
                <img src={boy} alt="Mountains" width="600" height="400"/>
            </a>
        <div className="desc">children's clothes</div>
        </div>

        <div className="gallery">
            <a target="_blank" href={girl}>
                <img src={girl} alt="Mountains" width="600" height="400"/>
            </a>
        <div className="desc">Girls clothes</div>
        </div>

        <div className="gallery">
            <a target="_blank" href={stripedtshirt}>
                <img src={stripedtshirt} alt="Mountains" width="600" height="400"/>
            </a>
        <div className="desc">stripped t-shirt</div>
        </div>
        <div className="gallery">
            <a target="_blank" href={jeans}>
                <img src={jeans} alt="Mountains" width="600" height="400"/>
            </a>
        <div className="desc">Quality pants</div>
        </div>



        </>
    )
}

export default GridGallery2
