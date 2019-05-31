import React from 'react'
import axios from 'axios';
import classnames from 'classnames';


class Contact extends React.Component{

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
            <div className="section" id="contact">
                <div className="cc-contact-information"
                     style={{ backgroundImage: "url('cv-v2/images/staticmap.png')" }}>
                    <div className="container">
                        <div className="cc-contact">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="card mb-0" data-aos="zoom-in">
                                        <div className="h4 text-center title">Contact Me</div>

                                        {this.state.noty && <div className="alert alert-primary" role="alert">
                                            You have successfully sent the message
                                        </div>}

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <form onSubmit={this.onSubmit} >
                                                        <div className="p pb-3"><strong>Feel free to contact
                                                            me </strong></div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="input-group"><span
                                                                    className="input-group-addon"><i
                                                                    className="fa fa-user-circle"></i></span>
                                                                    <input className="form-control"
                                                                           type="text"
                                                                           placeholder="Name"
                                                                           value={name}
                                                                           name={'name'}
                                                                           onChange={this.onChange}
                                                                           />
                                                                </div>
                                                                {this.state.errors.name ?
                                                                    <span className={'text-danger ml-3'}>Can't be empty</span> : ''}
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="input-group"><span
                                                                    className="input-group-addon"><i
                                                                    className="fa fa-file-text"></i></span>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Subject"
                                                                        value={subject}
                                                                        name={'subject'}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="input-group"><span
                                                                    className="input-group-addon"><i
                                                                    className="fa fa-envelope"></i></span>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="E-mail"
                                                                        value={email}
                                                                        name={'email'}
                                                                        onChange={this.onChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            {this.state.errors.email ?
                                                                <span className={'text-danger ml-3'}>Can't be empty</span> : ''}
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                                <textarea className="form-control"
                                                                                          name="message"
                                                                                          placeholder="Your Message"
                                                                                         ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <button className="btn btn-primary"
                                                                        type="submit">Send
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <p className="mb-0"><strong>Address </strong></p>
                                                    <p className="pb-2">140, City Center, New York,
                                                        U.S.A</p>
                                                    <p className="mb-0"><strong>Phone</strong></p>
                                                    <p className="pb-2">+1718-111-0011</p>
                                                    <p className="mb-0"><strong>Email</strong></p>
                                                    <p>anthony@company.com</p>
                                                </div>
                                            </div>
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


export default Contact