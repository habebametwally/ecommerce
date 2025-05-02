import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
    
		<nav id="navigation">
	
			<div className="container">
				
				<div id="responsive-nav">
					
					<ul className="main-nav nav navbar-nav">
						<li className="active"><Link to="index.html">Home</Link></li>
						<li><Link to="store.html">All Products</Link></li>
						<li><Link to="orderhistory.html">Your Order</Link></li>
						<li><Link to="aboutus.html">About Us</Link></li>
						<li><Link to="contactus.html">Contact Us</Link></li>
						<li><Link yo="#">Privacy Policy</Link></li>
						<li><Link to="trackorders.html">Track My Order</Link></li>
					</ul>
					
				</div>
			
			</div>
		
		</nav>
	

		<div className="section">
			
			<div className="container">
	
				<div className="row">
					
					<div className="col-md-3 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop01.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Mobile Phones<br/>Collection</h3>
								<Link to="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					
					<div className="col-md-3 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop03.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Smart Watches<br/>Collection</h3>
								<Link to="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					
					<div className="col-md-3 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop05.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Headphones & AirPods<br/>Collection</h3>
								<Link to="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					
					<div className="col-md-3 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop02.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Accessories & Chargers<br/>Collection</h3>
								<Link to="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					

				</div>
			</div>
			
		</div>
		
		<div className="section">
		
			<div className="container">
				
				<div className="row">

			
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">New Products</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									
								</ul>
							</div>
						</div>
					</div>
			

				
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
							
								<div id="tab1" className="tab-pane active">
									<div className="products-slick" data-nav="#slick-nav-1">
										
										<div className="product">
											<div className="product-img">
												<img src="./img/product0.png" alt=""/>
												<div className="product-label">
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="product.html">product 1</Link></h3>
												<h4 className="product-price">$320.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<Link to="shoppingcart.html" className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</Link>
											</div>
										</div>
									
										<div className="product">
											<div className="product-img">
												<img src="./img/product01.png" alt=""/>
												<div className="product-label">
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product 2</Link></h3>
												<h4 className="product-price">$320.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<Link to="shoppingcart.html" className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</Link>
											</div>
										</div>
							
										<div className="product">
											<div className="product-img">
												<img src="./img/product02.png" alt=""/>
												<div className="product-label">
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product 3</Link></h3>
												<h4 className="product-price">$320.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<Link to="shoppingcart.html" className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</Link>
											</div>
										</div>
								
										<div className="product">
											<div className="product-img">
												<img src="./img/product04.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product 4</Link></h3>
												<h4 className="product-price">$160.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<Link to="shoppingcart.html" className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</Link>
											</div>
										</div>
										
										<div className="product">
											<div className="product-img">
												<img src="./img/product05.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product 5</Link></h3>
												<h4 className="product-price">$80.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<Link to="shoppingcart.html" className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</Link>
											</div>
										</div>
									
									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
								</div>
							
							</div>
						</div>
					</div>
			
				</div>
		
			</div>
		
		</div>
		
		<div id="hot-deal" className="section">
	
			<div className="container">
			
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">Hot Deal This Week</h2>
							<p>New Collection Up to 50% OFF</p>
							<Link className="primary-btn cta-btn" to="#">Shop now</Link>
						</div>
					</div>
				</div>
		
			</div>
			
		</div>
	

		
		<div className="section">

			<div className="container">
			
				<div className="row">

			
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Top selling</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									
								</ul>
							</div>
						</div>
					</div>
					

				
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
							
								<div id="tab2" className="tab-pane fade in active">
									<div className="products-slick" data-nav="#slick-nav-2">
										
										<div className="product">
											<div className="product-img">
												<img src="./img/product06.jpg" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
													<span className="new">NEW</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Accessories & Chargers</p>
												<h3 className="product-name"><Link to="#">Power Bank</Link></h3>
												<h4 className="product-price">$180.00 <del className="product-old-price">$240.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
							

									
										<div className="product">
											<div className="product-img">
												<img src="./img/product07.jpg" alt=""/>
												<div className="product-label">
													<span className="new">NEW</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Headphones & AirPods</p>
												<h3 className="product-name"><Link to="#">Apple MAX Sky Blue</Link></h3>
												<h4 className="product-price">$200.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
						

										
										<div className="product">
											<div className="product-img">
												<img src="./img/product08.jpg" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Mobile Phones</p>
												<h3 className="product-name"><Link to="#">GALAXY S23 Ultra</Link></h3>
												<h4 className="product-price">$540.00 <del className="product-old-price">$690.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										

										
										<div className="product">
											<div className="product-img">
												<img src="./img/product02.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Headphones & AirPods</p>
												<h3 className="product-name"><Link to="#">GALAXY BUDS3 Pro</Link></h3>
												<h4 className="product-price">$100.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
									

				
										<div className="product">
											<div className="product-img">
												<img src="./img/product10.jpg" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Accessories</p>
												<h3 className="product-name"><Link to="#">Black Cover</Link></h3>
												<h4 className="product-price">$30.00</h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										
									</div>
									<div id="slick-nav-2" className="products-slick-nav"></div>
								</div>
					
							</div>
						</div>
					</div>
			
				</div>
			
			</div>
	
		</div>
		
    </div>
  )
}

export default HomePage;