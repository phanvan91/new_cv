import React, { Component } from 'react'


class ExtraSkill extends Component {
    render(){
        return (
            <section className="extra-section spad pb-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title">
                                <h2>Extra Skills</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 pt-5">
                                    <div className="fact-box trans">
                                        <div className="fact-content">
                                            <div className="circle-progress">
                                                <div id="progress1" className="prog-circle" />
                                                <div className="progress-info">
                                                    <h2>80%</h2>
                                                </div>
                                                <div className="prog-title">
                                                    <h3>PHP</h3>
                                                    <p>PHP Laravel</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 pt-5">
                                    <div className="fact-box trans">
                                        <div className="fact-content">
                                            <div className="circle-progress">
                                                <div id="progress2" className="prog-circle" />
                                                <div className="progress-info">
                                                    <h2>80%</h2>
                                                </div>
                                                <div className="prog-title">
                                                    <h3>Javasript</h3>
                                                    <p>Jquery, React js</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className={'col-lg-2'}></div>*/}
                                <div className="col-lg-6 col-md-6">
                                    <div className="fact-box">
                                        <div className="fact-content">
                                            <img src="CV/img/icon/1-w.png" alt={1} />
                                            <h2>2</h2>
                                            <p>Years of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="col-lg-3 col-md-6">*/}
                                    {/*<div className="fact-box">*/}
                                        {/*<div className="fact-content">*/}
                                            {/*<img src="CV/img/icon/2-w.png" alt={1} />*/}
                                            {/*<h2>9</h2>*/}
                                            {/*<p>Awards Won</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ExtraSkill;