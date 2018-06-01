import React, { Component } from 'react';

import Header from "./Header";
import Hero from "./Hero";
import Social from "./Social";
import Work from "./Work";
import Education from "./Education";
import ExtraSkill from "./ExtraSkill";
import Reference from "./Reference";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

export default class  extends Component {

    render() {
        return (
            <div>
                {/* Page Preloder */}
                <div id="preloder">
                    <div className="loader" />
                </div>
                <Header/>

                <Hero/>

                <Social/>

                <Work/>

                <Education/>


                <Reference/>

                <Portfolio/>

                <ExtraSkill/>

                <Contact/>

                <Footer/>
            </div>
        );
    }
}


