import React from 'react'


class ProfessionalSkill extends React.Component{
    render(){
        return (
            <div className="section" id="skill">
                <div className="container">
                    <div className="h4 text-center mb-4 title">Personal Skills</div>
                    <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="progress-container progress-primary"><span
                                        className="progress-badge">Communication</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary"
                                                 data-aos="progress-full" data-aos-offset="10"
                                                 data-aos-duration="2000" role="progressbar"
                                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                 style={{width: '80%'}}></div>
                                            <span className="progress-value">80%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="progress-container progress-primary"><span
                                        className="progress-badge">Team Work</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary"
                                                 data-aos="progress-full" data-aos-offset="10"
                                                 data-aos-duration="2000" role="progressbar"
                                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                 style={{ width: '100%' }}></div>
                                            <span className="progress-value">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="progress-container progress-primary"><span
                                        className="progress-badge">Creativity</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary"
                                                 data-aos="progress-full" data-aos-offset="10"
                                                 data-aos-duration="2000" role="progressbar"
                                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                 style={{ width: '90%' }}></div>
                                            <span className="progress-value">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="progress-container progress-primary"><span
                                        className="progress-badge">Dedication</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary"
                                                 data-aos="progress-full" data-aos-offset="10"
                                                 data-aos-duration="2000" role="progressbar"
                                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                 style={{ width: '100%' }}></div>
                                            <span className="progress-value">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="progress-container progress-primary"><span
                                        className="progress-badge">Leadership</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary"
                                                 data-aos="progress-full" data-aos-offset="10"
                                                 data-aos-duration="2000" role="progressbar"
                                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                 style={{width: '80%'}}></div>
                                            <span className="progress-value">80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProfessionalSkill