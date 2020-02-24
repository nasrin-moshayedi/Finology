import React, { Component } from 'react';
import validator from 'validator';
import Toast from 'react-bootstrap/Toast';

import { instance } from '../components/Axios';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import Menu from '../components/Menu';


class LoginDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            error: null,
            errordec: '',
            redir: null,
            showToast: false
        }
    }
    render() {

        return (
            <React.Fragment>

                <Menu />
                <section className="mt-5 mb-5">
                    <div className="container mb-5">
                        <div className='col-lg-4 offset-lg-4' >
                            <h2 className="text-center">فرم ورود</h2>
                            {/* <span className="invalid-feedback rtl" style={{ display: this.state.errordec ? 'block' : 'none' }}>{this.state.errordec}</span> */}
                            <Toast className="bg-warning" onClose={() => { this.setState({ showToast: false }) }} show={this.state.showToast} delay={3000} autohide >
                                <Toast.Header>
                                    <strong className="ml-auto">هشدار</strong>
                                </Toast.Header>
                                <Toast.Body>{this.state.errordec}</Toast.Body>
                            </Toast>
                            <form onSubmit={this.handleSubmit} style={{ marginTop: 20 }}>
                                <div className="text-right">

                                    <div className="form-group">
                                        <label className="text-right">شماره همراه</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="mobile"
                                            value={this.state.mobile}
                                            placeholder="لطفا شماره همراه خود را وارد نمایید" />
                                    </div>
                                    <div className="form-group">
                                        <label>رمز عبور</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={this.state.password}
                                            placeholder="لطفا رمز عبور خود را وارد نمایید" />
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-danger mt-5" type="submit">ورود</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}


export default LoginDashboard;
