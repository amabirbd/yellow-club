import React from 'react'
import NavigationBar from './NavigationBar'
import Caraouzel from './Caraouzel'
import PopularItems from './PopularItems'

function Home() {
    return (
        <div>
            <NavigationBar />
            <Caraouzel />
            <PopularItems />
        </div>
    )
}

export default Home
