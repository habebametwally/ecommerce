import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
     <footer id="footer">
        
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">About Us</h3>
                            <p>We offer the best phones and accessories at unbeatable prices.</p>
                            <ul className="footer-links">
                                <li><Link to="#"><i className="fa fa-map-marker"></i>1234 Market Street</Link></li>
                                <li><Link to="#"><i className="fa fa-phone"></i>+021-95-51-84</Link></li>
                                <li><Link to="#"><i className="fa fa-envelope-o"></i>contact@phoneaccessories.com</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">Categories</h3>
                            <ul className="footer-links">
                               
                                <li><Link to="#">Mobile Phones</Link></li>
                                <li><Link to="#">Smart Watches</Link></li>
                                <li><Link to="#">Headphones & AirPods</Link></li>
                                <li><Link to="#">Accessories & Chargers</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="clearfix visible-xs"></div>

                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">Information</h3>
                            <ul className="footer-links">
                                <li><Link to="aboutus.html">About Us</Link></li>
                                <li><Link to="contactus.html">Contact Us</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="orderhistory.html">Orders</Link></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">Service</h3>
                            <ul className="footer-links">
                                <li><Link to="#">My Account</Link></li>
                                <li><Link to="shoppingcart.html">View Cart</Link></li>
                                <li><Link to="#">Wishlist</Link></li>
                                <li><Link to="trackorders.html">Track My Order</Link></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="bottom-footer" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="footer-payments">
                            <li><Link to="#"><i className="fa fa-cc-visa"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-credit-card"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-paypal"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-mastercard"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-discover"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-amex"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
    </>
)
}
export default Footer;