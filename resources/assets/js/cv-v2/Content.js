import React, {Component,Fragment} from 'react'
import Profile from "./content/Profile";
import About from "./content/About";
import ProfessionalSkill from "./content/ProfessionalSkill";
import Portfolio from "./content/Portfolio";
import Experience from "./content/Experience";
import Education from "./content/Education";
import References from "./content/References";
import Contact from "./content/Contact";
import PersonalSkill from "./content/PersonalSkill";


class Content extends Component {
    render(){
        return (
            <Fragment>
                <div className="page-content">
                    <div>
                        <Profile/>
                        <About/>
                        <ProfessionalSkill/>
                        <PersonalSkill/>
                        <Portfolio/>
                        <Experience/>
                        <Education/>
                        {/*<References/>*/}
                        <Contact/>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Content