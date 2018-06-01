import React, { Component } from 'react'


class Social extends Component {
    render(){
        return (
            <div className="social-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="social-link-warp">
                                <div className="social-links">
                                    <a href={'#'}><i className="fa fa-pinterest" /></a>
                                    <a href={'#'}><i className="fa fa-linkedin" /></a>
                                    <a href={'#'}><i className="fa fa-instagram" /></a>
                                    <a href={'#'}><i className="fa fa-facebook" /></a>
                                    <a href={'#'}><i className="fa fa-twitter" /></a>
                                </div>
                                <h2 className="hidden-md hidden-sm">My Social Profiles</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Social;