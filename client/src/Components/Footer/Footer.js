//Footer
import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    {/* Column 1 */}
                    <div className='col-md-4 col-sm-4'>
                        <h6 className='title-catelgories'>categories</h6>
                        <ul className='list-unstyled'>
                            <li>Shirts</li>
                            <li>Pants</li>
                            <li>Shoes</li>
                            <li>Accessories</li>   
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className='col-md-4 col-sm-4'>
                        <h6 className='title-get-in-touch'>get in touch</h6>
                        <p> Any questions? Click on any of <br />our social media links below and <br />write us a message regarding your <br />issue or submit your email in the <br />section to the right. </p>
                        <ul className='list-unstyled'>
                            <li className='social'><i class="fab fa-facebook-f"></i></li>
                            <li className='social'><i class="fab fa-instagram"></i></li>
                            <li className='social'><i class="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className='col-md-4 col-sm-4'>
                        <h6 className='title-help'>Help</h6>
                        <ul className='list-unstyled'>
                            <li>input email</li>
                            <li>submit form</li>
                            <li>here</li>
                            <button>submit</button>
                        </ul>
                    </div>
                </div>
                {/* Column 4 */}
                <div className='developers'>
                    <h6 className='title-developers'>developers</h6>
                    <ul className='list-unstyled'>
                        <li className='neil'>Neil</li>
                        <li className='gustavo'>Gustavo</li>
                        <li className='brandon'>Brandon</li>
                        <li className='crystal'>Crystal</li> 
                        <li className='caitlyn'>Caitlyn</li> 
                    </ul>
                </div>
                {/* Footer Bottom */ }
                <div className='footer-bottom'>
                    <p className='text-xs-center'>
                        Copyright &copy;{new Date().getFullYear()} All Rights Reserved | made with &#9829; by Developers of Ravers Outlet (RZO)
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
