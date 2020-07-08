import React from 'react'
import './navbar.css'

function Navigationbar() {
    return (
        <React.Fragment>

            <div class="navbar">
            <a className="logo"><inline className="yellow">Yellow</inline> Club</a>
            <a href="#home">About Us</a>
            {/* <a href="#news">News</a> */}
            <div class="dropdown">
                <button class="dropbtn">Categories 
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                {/* <div class="header">
                    <h2>Clothings</h2>
                </div>    */}
                <div class="row">
                    <div class="column">
                    <h3>Gents</h3>
                    <a href="#">t shirts</a>
                    <a href="#">shirts</a>
                    <a href="#">pants</a>
                    <a href="#">Hoodies</a>
                    </div>
                    <div class="column">
                    <h3>Female</h3>
                    <a href="#">t shirts</a>
                    <a href="#">pants</a>
                    </div>
                    <div class="column">
                    <h3>Children</h3>
                    <a href="#">tshirts</a>
                    </div>
                </div>
                </div>
            </div> 
            </div>
            
        </React.Fragment>
    )
}

export default Navigationbar
