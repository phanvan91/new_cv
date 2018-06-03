import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            subject:'',
            message:'',
            errors:{},
            noty:false,
            loading:false
        }
    }
    onChange = e => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    onSubmit = e => {
        e.preventDefault();
        // validation
        this.setState({
            loading:true
        });
        let errors = {};
        if(this.state.name === '') errors.name = "Can't be empty";
        if(this.state.email === '') errors.email = "Can't be empty";
        if(this.state.subject === '') errors.subject = "Can't be empty";
        if(this.state.message === '') errors.message = "Can't be empty";
        this.setState({
            errors
        });

        const isValid = Object.keys(errors).length === 0

        if(isValid){

            axios.post('/send-mail', {
                name:this.state.name,
                email:this.state.email,
                subject:this.state.subject,
                message:this.state.message,
            }).then(function (response) {
                this.setState({
                    loading:false,
                    noty:true
                })
                setTimeout(function() { this.setState({noty: false}); }.bind(this), 4000);
            }.bind(this));
        }else{
            this.setState({
                loading:false
            });
        }
    }
    render(){
        const {name,email,subject,message,loading} = this.state;
        return (
            <section className="contact-section spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title">
                                <h2>Contact Me</h2>
                                {this.state.noty && <div className="alert alert-primary" role="alert">
                                    You have successfully sent the message
                                </div>}
                            </div>
                            <form className="contact-form" onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className={classnames('col-md-6', {error: !!this.state.errors.name})}>
                                        <input type="text" placeholder="Name" value={name}  name={'name'} onChange={this.onChange} />
                                    </div>
                                    <div className={classnames('col-md-6', {error: !!this.state.errors.email})}>
                                        <input type="text" placeholder="E-mail" value={email} name={'email'} onChange={this.onChange} />
                                    </div>
                                    <div className={classnames('col-md-12', {error: !!this.state.errors.subject})}>
                                        <input type="text" placeholder="Subject" value={subject} name={'subject'} onChange={this.onChange} />
                                    </div>
                                    <div className={classnames('col-md-12', {error: !!this.state.errors.message})}>
                                        <textarea placeholder="Message"  value={message} name={'message'} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="text-md-right">
                                    <button type={'submit'} className="site-btn">
                                        {loading && <i className="fa fa-spinner fa-spin"></i>}
                                        Send message
                                    </button>
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