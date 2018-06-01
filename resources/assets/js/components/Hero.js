import React, { Component } from 'react'


class Hero extends Component {
    render(){
        return (
            <section className="hero-section spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero-text">
                                        <h2>Mr. Phan </h2>
                                        <p>I’m a web developer in love with code. I want to learn new things to develop myself.</p>
                                    </div>
                                    <div className="hero-info">
                                        <h2>General Info</h2>
                                        <ul>
                                            <li><span>Full Name </span>Phan Van Nguyen </li>
                                            <li><span>Date of Birth</span>Oct 1, 1991</li>
                                            <li><span>Address</span>26 Nguyễn Trung Trực </li>
                                            <li><span>E-mail</span>phanvan91@gmail.com</li>
                                            <li><span>Phone </span>+84 905 772 808</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <figure className="hero-image">
                                        <img src="CV/img/hero.jpg" alt={5} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;