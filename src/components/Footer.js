// import React from 'react'
// import {FaFacebookSquare} from 'react-icons/fa'
// import {FaLinkedin} from 'react-icons/fa'
// import {FaGithub} from 'react-icons/fa'

// function Footer() {
//     return (
        
//         <div className=" clearfix text-white-50  page-footer mb-0">
//             <style type="text/css">
//             {`

//                 .icon{
//                     font-size: 3.5rem;
//                     background-color: black;
//                     color: white;
                    
//                 }
//                 a {
//                     padding: 0 5px 0 5px;
//                 }

                
//             `}
//             </style>
//             <div className=" icon p-5  justify-content-center bg-dark mt-5" >
//                 <a href="https://www.facebook.com/almuntasir1"> <FaFacebookSquare /> </a>
//                 <a href="https://www.facebook.com/almuntasir1"> <FaLinkedin /> </a>
//                 <a href="https://github.com/amabirbd"> <FaGithub /> </a>

//             </div>
            
//         </div>
//     )
// }

// export default Footer

import React from 'react'

import {FaFacebookSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

import './footer.css'

function Footer() {
    return (
        <div className="clearfix footer">
            <ul className="footer-list">
                {/* <li>Contact</li>
                <li>FAQ</li>
                <li>address</li>
                <li>social media</li> */}

                <a href="https://www.facebook.com/almuntasir1"> <FaFacebookSquare /> </a>
                <a href="https://www.facebook.com/almuntasir1"> <FaYoutube /> </a>
                <a href="https://github.com/amabirbd"> <FaInstagram /> </a>

                

            </ul>
        </div>
    )
}

export default Footer
