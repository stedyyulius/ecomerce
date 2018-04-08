import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Item from './components/Item'
import Cart from './components/Cart'

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

        	<div className="new_arrivals_agile_w3ls_info">
        		<div className="container">
        				<div id="horizontalTab">
        						{/* <ul className="resp-tabs-list">
        							<li> Men's</li>
        							<li> Women's</li>
        							<li> Bags</li>
        							<li> Footwear</li>
        						</ul> */}
        					<div className="resp-tabs-container">

        						<div className="tab1">
        							<div className="clearfix"></div>
        						</div>

        						<div className="tab2">
                    <Cart />
        						</div>
                    <Item />
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
