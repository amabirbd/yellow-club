import React from 'react'
import './navbar.css'

function Navigationbar() {
    return (
        <React.Fragment>

            <div className="navbar">
            <span className="logo"><inline className="yellow">Yellow</inline> Club</span>
            <span>About Us</span>
            {/* <a href="#news">News</a> */}
            <div class="dropdown">
                <button class="dropbtn">Categories 
                <i class="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                {/* <div class="header">
                    <h2>Clothings</h2>
                </div>    */}
                <div class="row">
                    <div class="column">
                    <h3>Gents</h3>
                    <div>t shirts</div>
                    <div>shirts</div>
                    <div>pnts</div>
                    <div>Hoodies</div>
                    </div>
                    <div class="column">
                    <h3>Female</h3>
                    <div>t shirts</div>
                    <div>pants</div>
                    </div>
                    <div class="column">
                    <h3>Children</h3>
                    <div>tshirts</div>
                    </div>
                </div>
                </div>
            </div> 
            </div>
            
        </React.Fragment>
    )
}

export default Navigationbar
