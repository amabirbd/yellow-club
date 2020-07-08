import React from 'react'
import shirt from '../assets/shirt.jpg'

function GenericSlider() {
    return (
        <React.Fragment>
            <div class="container">
                <div class="ads_sponsors">
                    <div><img src={shirt} alt="img" /></div>
                    <div><img src={shirt} alt="img" /></div>
                    <div><img src={shirt} alt="img" /></div>
                    <div><img src={shirt} alt="img" /></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GenericSlider
