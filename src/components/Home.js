import React from 'react'
import NavigationBar from './NavigationBar'
import Caraouzel from './Caraouzel'
import PopularItems from './PopularItems'
import GridGallery2 from './GridGallery2'
import Footer from './Footer'
// import GridGallery1 from './GridGallery1'

function Home() {
    return (
        <>
            <NavigationBar />
            <Caraouzel />
            <PopularItems />
            <GridGallery2 />
            <Footer />
        </>
    )
}

export default Home
