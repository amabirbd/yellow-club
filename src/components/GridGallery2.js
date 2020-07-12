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
            <h1 className="sec-header">Products Gallery</h1>
            <div className="gallery">
            <div className="row">
                <div className="column">
                    <img src={shirt} alt="shirt" />
                </div>

                <div className="column">
                    <img src={bts} alt="bts" />

                </div>

                <div className="column">

                    <img src={shirthang} alt="shirthang" />

                </div>

                <div className="column">
                    <img src={jns} alt="jns" />

                </div>

                <div className="column">
                    <img src={boy} alt="jns" />

                </div>

                <div className="column">
                    <img src={girl} alt="jns" />

                </div>

                <div className="column">
                    <img src={jeans} alt="jns" />

                </div>

                


            </div>
            </div>
        </>
    )
}

export default GridGallery2
