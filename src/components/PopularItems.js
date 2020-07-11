import React from 'react'
import shirt from '../assets/shirt.jpg'
import ProductCard from './ProductCard'
import bts from '../assets/bts.jpg'
import shirthang from '../assets/shirthang.jpg'
import jns from '../assets/jns.jpg'


function PopularItems() {
    return (
        <div className="clearfix">
            
            
            <h1 class="sec-header ">Popular Items</h1>
                <div className="product-card">
                    <ProductCard className="pc" type="tshirt" img={shirt} />
                    <ProductCard className="pc" type="black tshirt" img={bts} />
                    <ProductCard className="pc" type="shirt" img={shirthang} />
                    <ProductCard className="pc" type="pant" img={jns} />
                    <br/>
                    
                    
   
                </div>
        </div>
    )
}

export default PopularItems
