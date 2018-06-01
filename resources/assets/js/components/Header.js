import React, { Component } from 'react'


class Header extends Component {
    render(){
        return (
        <header className="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="site-logo">
                            <h2><a href="#">CV-Phan</a></h2>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className="col-md-8 text-md-right header-buttons">
                        <a href="/download/cv.pdf" className="site-btn">Download CV</a>
                        {/*<a href="#" className="site-btn">Discover me</a>*/}
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Header;