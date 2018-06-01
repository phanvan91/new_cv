import React, { Component } from 'react'


class Footer extends Component {
    render(){
        return (
            <footer className="footer-section">
                <div className="container text-center">
                    <div className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;