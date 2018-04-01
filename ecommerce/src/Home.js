import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return (
      <div>
        		<div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
        			<div className="modal-dialog">

        				<div className="modal-content">
        					<div className="modal-header">
        						<button type="button" className="close" data-dismiss="modal">&times;</button>
        					</div>
        						<div className="modal-body modal-body-sub_agile">
        						<div className="col-md-8 modal_body_left modal_body_left1">
        						<h3 className="agileinfo_sign">Sign In <span>Now</span></h3>
        									<form action="#" method="post">
        							<div className="styled-input agile-styled-input-top">
        								<input type="text" name="Name" required="" />
        								<label>Name</label>
        								<span></span>
        							</div>
        							<div className="styled-input">
        								<input type="email" name="Email" required="" />
        								<label>Email</label>
        								<span></span>
        							</div>
        							<input type="submit" value="Sign In" />
        						</form>
        						  <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
        															<li><a href="#" className="facebook">
        																  <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="twitter">
        																  <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="instagram">
        																  <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="pinterest">
        																  <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
        														</ul>
        														<div className="clearfix"></div>
        														<p><a href="#" data-toggle="modal" data-target="#myModal2" > Don't have an account?</a></p>

        						</div>
        						<div className="col-md-4 modal_body_right modal_body_right1">
        							<img src="images/log_pic.jpg" alt=" "/>
        						</div>
        						<div className="clearfix"></div>
        					</div>
        				</div>

        			</div>
        		</div>

        		<div className="modal fade" id="myModal2" tabIndex="-1" role="dialog">
        			<div className="modal-dialog">

        				<div className="modal-content">
        					<div className="modal-header">
        						<button type="button" className="close" data-dismiss="modal">&times;</button>
        					</div>
        						<div className="modal-body modal-body-sub_agile">
        						<div className="col-md-8 modal_body_left modal_body_left1">
        						<h3 className="agileinfo_sign">Sign Up <span>Now</span></h3>
        						 <form action="#" method="post">
        							<div className="styled-input agile-styled-input-top">
        								<input type="text" name="Name" required="" />
        								<label>Name</label>
        								<span></span>
        							</div>
        							<div className="styled-input">
        								<input type="email" name="Email" required="" />
        								<label>Email</label>
        								<span></span>
        							</div>
        							<div className="styled-input">
        								<input type="password" name="password" required="" />
        								<label>Password</label>
        								<span></span>
        							</div>
        							<div className="styled-input">
        								<input type="password" name="Confirm Password" required="" />
        								<label>Confirm Password</label>
        								<span></span>
        							</div>
        							<input type="submit" value="Sign Up" />
        						</form>
        						  <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
        															<li><a href="#" className="facebook">
        																  <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="twitter">
        																  <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="instagram">
        																  <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="pinterest">
        																  <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
        														</ul>
        														<div className="clearfix"></div>
        														<p><a href="#">By clicking register, I agree to your terms</a></p>

        						</div>
        						<div className="col-md-4 modal_body_right modal_body_right1">
        							<img src="images/log_pic.jpg" alt=" "/>
        						</div>
        						<div className="clearfix"></div>
        					</div>
        				</div>

        			</div>
        		</div>



        	<div id="myCarousel" className="carousel slide" data-ride="carousel">

        		<ol className="carousel-indicators">
        			<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        			<li data-target="#myCarousel" data-slide-to="1" className=""></li>
        			<li data-target="#myCarousel" data-slide-to="2" className=""></li>
        			<li data-target="#myCarousel" data-slide-to="3" className=""></li>
        			<li data-target="#myCarousel" data-slide-to="4" className=""></li>
        		</ol>
        		<div className="carousel-inner" role="listbox">
        			<div className="item active">
        				<div className="container">
        					<div className="carousel-caption">
        						<h3>The Biggest <span>Sale</span></h3>
        						<p>Special for today</p>
        						<a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
        					</div>
        				</div>
        			</div>
        			<div className="item item2">
        				<div className="container">
        					<div className="carousel-caption">
        						<h3>Summer <span>Collection</span></h3>
        						<p>New Arrivals On Sale</p>
        						<a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
        					</div>
        				</div>
        			</div>
        			<div className="item item3">
        				<div className="container">
        					<div className="carousel-caption">
        						<h3>The Biggest <span>Sale</span></h3>
        						<p>Special for today</p>
        						<a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
        					</div>
        				</div>
        			</div>
        			<div className="item item4">
        				<div className="container">
        					<div className="carousel-caption">
        						<h3>Summer <span>Collection</span></h3>
        						<p>New Arrivals On Sale</p>
        						<a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
        					</div>
        				</div>
        			</div>
        			<div className="item item5">
        				<div className="container">
        					<div className="carousel-caption">
        						<h3>The Biggest <span>Sale</span></h3>
        						<p>Special for today</p>
        						<a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
        					</div>
        				</div>
        			</div>
        		</div>
        		<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        			<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        			<span className="sr-only">Previous</span>
        		</a>
        		<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        			<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        			<span className="sr-only">Next</span>
        		</a>

            </div>

            <div className="banner_bottom_agile_info">
        	    <div className="container">
                    <div className="banner_bottom_agile_info_inner_w3ls">
            	           <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
        						<figure className="effect-roxy">
        							<img src="images/bottom1.jpg" alt=" " className="img-responsive" />
        							<figcaption>
        								<h3><span>F</span>all Ahead</h3>
        								<p>New Arrivals</p>
        							</figcaption>
        						</figure>
        					</div>
        					 <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
        						<figure className="effect-roxy">
        							<img src="images/bottom2.jpg" alt=" " className="img-responsive" />
        							<figcaption>
        								<h3><span>F</span>all Ahead</h3>
        								<p>New Arrivals</p>
        							</figcaption>
        						</figure>
        					</div>
        					<div className="clearfix"></div>
        		    </div>
        		 </div>
            </div>

        	{/* <div className="schedule-bottom">
        		<div className="col-md-6 agileinfo_schedule_bottom_left">
        			<img src="images/mid.jpg" alt=" " className="img-responsive" />
        		</div>
        		<div className="col-md-6 agileits_schedule_bottom_right">
        			<div className="w3ls_schedule_bottom_right_grid">
        				<h3>Save up to <span>50%</span> in this week</h3>
        				<p>Suspendisse varius turpis efficitur erat laoreet dapibus.
        					Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
        				<div className="col-md-4 w3l_schedule_bottom_right_grid1">
        					<i className="fa fa-user-o" aria-hidden="true"></i>
        					<h4>Customers</h4>
        					<h5 className="counter">653</h5>
        				</div>
        				<div className="col-md-4 w3l_schedule_bottom_right_grid1">
        					<i className="fa fa-calendar-o" aria-hidden="true"></i>
        					<h4>Events</h4>
        					<h5 className="counter">823</h5>
        				</div>
        				<div className="col-md-4 w3l_schedule_bottom_right_grid1">
        					<i className="fa fa-shield" aria-hidden="true"></i>
        					<h4>Awards</h4>
        					<h5 className="counter">45</h5>
        				</div>
        				<div className="clearfix"> </div>
        			</div>
        		</div>
        		<div className="clearfix"> </div>
        	</div> */}

        	{/* <div className="banner-bootom-w3-agileits">
        	<div className="container">
        		<h3 className="wthree_text_info">What's <span>Trending</span></h3>

        		<div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
        			<a href="womens.html">
        			   <div className="bb-left-agileits-w3layouts-inner grid">
        					<figure className="effect-roxy">
        							<img src="images/bb1.jpg" alt=" " className="img-responsive" />
        							<figcaption>
        								<h3><span>S</span>ale </h3>
        								<p>Upto 55%</p>
        							</figcaption>
        						</figure>
        			    </div>
        			</a>
        		</div>
        		<div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
        		      <a href="mens.html">
        		       <div className="bb-middle-agileits-w3layouts grid">
        			           <figure className="effect-roxy">
        							<img src="images/bottom3.jpg" alt=" " className="img-responsive" />
        							<figcaption>
        								<h3><span>S</span>ale </h3>
        								<p>Upto 55%</p>
        							</figcaption>
        						</figure>
        		        </div>
        				</a>
        				<a href="mens.html">
        		      <div className="bb-middle-agileits-w3layouts forth grid">
        						<figure className="effect-roxy">
        							<img src="images/bottom4.jpg" alt=" " className="img-responsive" />
        							<figcaption>
        								<h3><span>S</span>ale </h3>
        								<p>Upto 65%</p>
        							</figcaption>
        						</figure>
        					</div>
        					</a>
        		<div className="clearfix"></div>
        	</div>
        	</div>
            </div> */}

              <div className="agile_last_double_sectionw3ls">
                    <div className="col-md-6 multi-gd-img multi-gd-text ">
        					<a href="womens.html"><img src="images/bot_1.jpg" alt=" " />
                  <h4>Flat <span>50%</span> offer</h4>
                </a>

        			</div>
        			 <div className="col-md-6 multi-gd-img multi-gd-text ">
        					<a href="womens.html"><img src="images/bot_2.jpg" alt=" " /><h4>Flat <span>50%</span> offer</h4></a>
        			</div>
        			<div className="clearfix"></div>
        	   </div>

        	<div className="new_arrivals_agile_w3ls_info">
        		<div className="container">
        		    <h3 className="wthree_text_info">New <span>Arrivals</span></h3>
        				<div id="horizontalTab">
        						{/* <ul className="resp-tabs-list">
        							<li> Men's</li>
        							<li> Women's</li>
        							<li> Bags</li>
        							<li> Footwear</li>
        						</ul> */}
        					<div className="resp-tabs-container">

        						<div className="tab1">
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m1.jpg" alt="" className="pro-image-front" />
        										<img src="images/m1.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Formal Blue Shirt</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$45.99</span>
        											<del>$69.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Formal Blue Shirt" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m2.jpg" alt="" className="pro-image-front" />
        										<img src="images/m2.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Gabi Full Sleeve Sweatshirt</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$45.99</span>
        											<del>$69.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Sweatshirt" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
                                    <div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m3.jpg" alt="" className="pro-image-front" />
        										<img src="images/m3.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Dark Blue Track Pants</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$80.99</span>
        											<del>$89.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Dark Blue Track Pants" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m4.jpg" alt="" className="pro-image-front" />
        										<img src="images/m4.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Round Neck Black T-Shirt</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$190.99</span>
        											<del>$159.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Black T-Shirt" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m5.jpg" alt="" className="pro-image-front" />
        										<img src="images/m5.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Men's Black Jeans</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$60.99</span>
        											<del>$90.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Men's Black Jeans" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        								<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m7.jpg" alt="" className="pro-image-front" />
        										<img src="images/m7.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Analog Watch</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$160.99</span>
        											<del>$290.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Analog Watch" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        								<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m6.jpg" alt="" className="pro-image-front" />
        										<img src="images/m6.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product">
        										<h4><a href="single.html">Reversible Belt</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$30.99</span>
        											<del>$50.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Reversible Belt" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        								<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/m8.jpg" alt="" className="pro-image-front" />
        										<img src="images/m8.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Party Men's Blazer</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$260.99</span>
        											<del>$390.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Party Men's Blazer" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="clearfix"></div>
        						</div>

        						<div className="tab2">
        							 <div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/w1.jpg" alt="" className="pro-image-front" />
        										<img src="images/w1.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">A-line Black Skirt</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$130.99</span>
        											<del>$189.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="A-line Black Skirt" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/w2.jpg" alt="" className="pro-image-front" />
        										<img src="images/w2.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Sleeveless Solid Blue Top</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$140.99</span>
        											<del>$189.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Sleeveless Solid Blue Top" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/w3.jpg" alt="" className="pro-image-front" />
        										<img src="images/w3.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Skinny Jeans</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$150.99</span>
        											<del>$189.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Skinny Jeans " />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/w4.jpg" alt="" className="pro-image-front" />
        										<img src="images/w4.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Black Basic Shorts</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$120.99</span>
        											<del>$189.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Black Basic Shorts" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/w5.jpg" alt="" className="pro-image-front" />
        										<img src="images/w5.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Pink Track Pants</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$220.99</span>
        											<del>$389.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Pink Track Pants" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>

        									<div className="item-info-product ">
        										<h4><a href="single.html">Analog Watch</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$320.99</span>
        											<del>$489.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Analog Watch" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        						<div className="tab3">

        						<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/b1.jpg" alt="" className="pro-image-front" />
        										<img src="images/b1.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Laptop Messenger Bag</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$140.99</span>
        											<del>$169.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value=" Laptop Messenger Bag" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="col-md-3 product-men">
        								<div className="men-pro-item simpleCart_shelfItem">
        									<div className="men-thumb-item">
        										<img src="images/b2.jpg" alt="" className="pro-image-front" />
        										<img src="images/b2.jpg" alt="" className="pro-image-back" />
        											<div className="men-cart-pro">
        												<div className="inner-men-cart-pro">
        													<a href="single.html" className="link-product-add-cart">Quick View</a>
        												</div>
        											</div>
        											<span className="product-new-top">New</span>

        									</div>
        									<div className="item-info-product ">
        										<h4><a href="single.html">Puma Backpack</a></h4>
        										<div className="info-product-price">
        											<span className="item_price">$127.99</span>
        											<del>$169.71</del>
        										</div>
        										<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
        															<form action="#" method="post">
        																<fieldset>
        																	<input type="hidden" name="cmd" value="_cart" />
        																	<input type="hidden" name="add" value="1" />
        																	<input type="hidden" name="business" value=" " />
        																	<input type="hidden" name="item_name" value="Puma Backpack" />
        																	<input type="hidden" name="amount" value="30.99" />
        																	<input type="hidden" name="discount_amount" value="1.00" />
        																	<input type="hidden" name="currency_code" value="USD" />
        																	<input type="hidden" name="return" value=" " />
        																	<input type="hidden" name="cancel_return" value=" " />
        																	<input type="submit" name="submit" value="Add to cart" className="button" />
        																</fieldset>
        															</form>
        														</div>

        									</div>
        								</div>
        							</div>
        							<div className="clearfix"></div>
        						</div>
        					</div>
        				</div>
        		</div>
        		<div className="sale-w3ls">
        			<div className="container">
        				<h6>We Offer Flat <span>40%</span> Discount</h6>

        				<a className="hvr-outline-out button2" href="single.html">Shop Now </a>
        			</div>
        		</div>

    
        {/* <div className="footer">
        	<div className="footer_agile_inner_info_w3l">
        		<div className="col-md-3 footer-left">
        			<h2><a href="index.html"><span>S</span>tedy's Shop </a></h2>
        			<p>Lorem ipsum quia dolor
        			sit amet, consectetur, adipisci velit, sed quia non
        			numquam eius modi tempora.</p>
        			<ul className="social-nav model-3d-0 footer-social w3_agile_social two">
        															<li><a href="#" className="facebook">
        																  <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="twitter">
        																  <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="instagram">
        																  <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
        															<li><a href="#" className="pinterest">
        																  <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
        																  <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
        														</ul>
        		</div>
      </div>
    </div> */}
  </div>
    )
  }
}

export default Home
