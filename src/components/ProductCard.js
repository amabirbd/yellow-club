import React from 'react'
import './productCard.css'

function ProductCard(props) {
    return (
            <div class="card">
                <img src={props.img} alt="Denim Jeans"/>
                <h1>{props.type}</h1>
                <p class="price">300 tk</p>
                <p>Very Comfortable summer collection</p>
                <p><button>Add to Cart</button></p>
            </div>
    )
}

export default ProductCard
