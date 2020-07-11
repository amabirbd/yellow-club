import React from 'react'
import NavigationBar from './NavigationBar'
import Caraouzel from './Caraouzel'
import PopularItems from './PopularItems'
import GridGallery2 from './GridGallery2'
// import GridGallery1 from './GridGallery1'

function Home() {
    return (
        <div>
            <NavigationBar />
            <Caraouzel />
            <div className="container">
                <PopularItems />
                
                {/* <GridGallery1 /> */}
                <GridGallery2 />
            </div>
        </div>
    )
}

export default Home
