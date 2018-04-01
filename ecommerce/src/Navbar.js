import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    return(
      <div>
        <div className="header-bot">
          <div className="header-bot_inner_wthreeinfo_header_mid">
            <div className="col-md-4 header-middle">
              <form action="#" method="post">
                  <input type="search" name="search" placeholder="Search here..." required="" />
                  <input type="submit" value=" " />
                <div className="clearfix"></div>
              </form>
            </div>
              <div className="col-md-4 logo_agile">
                <h1><a href="index.html"><span>S</span>tedy Shop<i className="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true"></i></a></h1>
              </div>

            <div className="col-md-4 agileits-social top_content">
                    {/* <ul className="social-nav model-3d-0 footer-social w3_agile_social">
                                      <li className="share">Share On : </li>
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
                                    </ul> */}



            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="ban-top">
          <div className="container">
            <div className="top_nav_left">
              <nav className="navbar navbar-default">
                <div className="container-fluid">

                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  </button>
                </div>

                <div className="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav menu__list">
                  <li className="active menu__item menu__item--current">
                    <Link className="menu__link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className=" menu__item">
                    <Link className="menu__link" to="/about">About</Link>
                  </li>
                  <li className="dropdown menu__item">
                    <a href="#" className="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Men's wear <span className="caret"></span></a>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="agile_inner_drop_nav_info">
                          <div className="col-sm-6 multi-gd-img1 multi-gd-text ">
                            <a href="mens.html"><img src="images/top2.jpg" alt=" "/></a>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li><a href="mens.html">Clothing</a></li>
                              <li><a href="mens.html">Wallets</a></li>
                              <li><a href="mens.html">Footwear</a></li>
                              <li><a href="mens.html">Watches</a></li>
                              <li><a href="mens.html">Accessories</a></li>
                              <li><a href="mens.html">Bags</a></li>
                              <li><a href="mens.html">Caps & Hats</a></li>
                            </ul>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li><a href="mens.html">Jewellery</a></li>
                              <li><a href="mens.html">Sunglasses</a></li>
                              <li><a href="mens.html">Perfumes</a></li>
                              <li><a href="mens.html">Beauty</a></li>
                              <li><a href="mens.html">Shirts</a></li>
                              <li><a href="mens.html">Sunglasses</a></li>
                              <li><a href="mens.html">Swimwear</a></li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                  </li>
                  <li className="dropdown menu__item">
                    <a href="#" className="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Women's wear <span className="caret"></span></a>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="agile_inner_drop_nav_info">
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li><a href="womens.html">Clothing</a></li>
                              <li><a href="womens.html">Wallets</a></li>
                              <li><a href="womens.html">Footwear</a></li>
                              <li><a href="womens.html">Watches</a></li>
                              <li><a href="womens.html">Accessories</a></li>
                              <li><a href="womens.html">Bags</a></li>
                              <li><a href="womens.html">Caps & Hats</a></li>
                            </ul>
                          </div>
                          <div className="col-sm-3 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li><a href="womens.html">Jewellery</a></li>
                              <li><a href="womens.html">Sunglasses</a></li>
                              <li><a href="womens.html">Perfumes</a></li>
                              <li><a href="womens.html">Beauty</a></li>
                              <li><a href="womens.html">Shirts</a></li>
                              <li><a href="womens.html">Sunglasses</a></li>
                              <li><a href="womens.html">Swimwear</a></li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img multi-gd-text ">
                            <a href="womens.html"><img src="images/top1.jpg" alt=" "/></a>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                  </li>
                  <li className="menu__item dropdown">
                     <a className="menu__link" href="#" className="dropdown-toggle" data-toggle="dropdown">Short Codes <b className="caret"></b></a>
                        <ul className="dropdown-menu agile_short_dropdown">
                          <li><a href="icons.html">Web Icons</a></li>
                          <li><a href="typography.html">Typography</a></li>
                        </ul>
                  </li>
                  <li className=" menu__item"><a className="menu__link" href="contact.html">Contact</a></li>
                  </ul>
                </div>
                </div>
              </nav>
            </div>
            {/* <div className="top_nav_right">
              <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                    <form action="#" method="post" className="last">
                    <input type="hidden" name="cmd" value="_cart " />
                    <input type="hidden" name="display" value="1" />
                    <button className="w3view-cart" type="submit" name="submit" value="">
                      <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </button>
                  </form>

                    </div>
            </div> */}
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Navbar
