import React from 'react'
import Unsplash from 'unsplash-js';
// const Unsplash = require('unsplash-js').default;
require('dotenv').config()

function GridGallery() {


    const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });
    const clothes = unsplash.search.photos('clothe', 1, 10)

    function show() {
        console.log(typeof(clothes));
    }

    // function getImages(props) {
    //     unsplash.search.photos(props.query, 1, 10, { orientation: "portrait" })
    //     .then(toJson)
    //     .then(json => {
    //         console.log(json)
    // });
    // }


    return (
        <div className="gridgallery">
            <h1 className="sec-header">Gallery</h1>
            <button onClick={() => show()}>
                Click me
            </button>
        </div>
    )
}

export default GridGallery
