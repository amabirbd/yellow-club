import React from 'react'
import shirt from '../assets/shirt.jpg'
import ProductCard from './ProductCard'
import bts from '../assets/bts.jpg'
import shirthang from '../assets/shirthang.jpg'
import jns from '../assets/jns.jpg'


function PopularItems() {
    return (
        <div>
            
            <React.Fragment >
            
            <h1>Popular Items</h1>
                <div className="product-card">
                    <ProductCard className="pc" img={shirt} />
                    <ProductCard className="pc" img={bts} />
                    <ProductCard className="pc" img={shirthang} />
                    <ProductCard className="pc" img={jns} />
                    
                    
   
                </div>
        </React.Fragment>
        </div>
    )
}

export default PopularItems
