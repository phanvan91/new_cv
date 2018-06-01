import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Portfolio extends Component {
    render(){
        return (
            <section className="portfolio-section spad pb-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-8 offset-xl-2 ">
                            <div className="section-title">
                                <h2>Portfolio</h2>
                            </div>
                        </div>
                        <div className="col-md-4 text-md-right">
                            <a href="#" className="site-btn mb-5">See All Portfolio</a>
                        </div>
                    </div>
                    <div className="portfolio-warp">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <Link to="CV/img/portfolio/4.jpg" className="set-bg port-pic" data-setbg="CV/img/portfolio/4.jpg" />
                                    <a href="http://phanvan91.club:8000">
                                        <h2>Web sales</h2>
                                        <p>MenShoes</p>
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <Link to="CV/img/portfolio/1.jpg" className="set-bg port-pic" data-setbg="CV/img/portfolio/1.jpg" />
                                    <a href="http://phanvan91.club:8080">
                                        <h2>Web Sale</h2>
                                        <p>Graphic design</p>
                                    </a>

                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <Link to="CV/img/portfolio/2.jpg" className="set-bg port-pic" data-setbg="CV/img/portfolio/2.jpg" />
                                    <a href="https://jacknguyen.000webhostapp.com/mobile/public">
                                        <h2>Web sales</h2>
                                        <p>Mobile Web</p>
                                    </a>

                                </div>
                            </div>



                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <Link to="CV/img/portfolio/3.jpg" className="set-bg port-pic" data-setbg="CV/img/portfolio/3.jpg" />
                                    <h2>Web Design Website</h2>
                                    <p>Graphic design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;