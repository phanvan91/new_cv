import React, { Component } from 'react'


class Education extends Component {
    render(){
        return (
            <section className="resume-section with-bg spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-7 offset-xl-2">
                            <div className="section-title">
                                <h2>Education</h2>
                            </div>
                            <ul className="resume-list">
                                <li>
                                    <h2>2015-2017</h2>
                                    <h3>Web Developer</h3>
                                    <h4>Iviettech</h4>
                                    {/*<p>Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. </p>*/}
                                </li>
                                <li>
                                    <h2>2010-2013</h2>
                                    <h3>Web Developer</h3>
                                    <h4>Softech-Aptech</h4>
                                    {/*<p>Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. </p>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;