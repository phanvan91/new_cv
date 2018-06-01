import React, { Component } from 'react'
import axios from 'axios';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            subject:'',
            message:''
        }
    }
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        axios.post('/send-mail', {
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message,
        }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });

    }
    render(){
        const {name,email,subject,message} = this.state;
        return (
            <section className="contact-section spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title">
                                <h2>Contact Me</h2>
                            </div>
                            <form className="contact-form" onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Name" value={name}  name={'name'} onChange={this.onChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="E-mail" value={email} name={'email'} onChange={this.onChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Subject" value={subject} name={'subject'} onChange={this.onChange} />
                                        <textarea placeholder="Message"  value={message} name={'message'} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="text-md-right">
                                    <button className="site-btn">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;