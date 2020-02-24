import React, { Component } from 'react';
// import { instance } from '../Axios';
import Toast from 'react-bootstrap/Toast';

class RegisterDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            password: "",
            repassword: "",
            rolid: [2],
            token: "123456789qwertyuiopqaz",
            error: null,
            errordec: null,
            redir: null,
            showToast: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mb-5" >
                    <div className='col-lg-4 offset-lg-4' >
                        <form className="form-signin" onSubmit={this.handleSubmit} style={{ marginTop: 20 }}>
                            <h1 className="h3 mb-3 font-weight-normal text-center">ثبت نام پنل آرامیار</h1>
                            <Toast className="bg-warning" onClose={() => { this.setState({ showToast: false }) }} show={this.state.showToast} delay={3000} autohide >
                                <Toast.Header>
                                    <strong className="ml-auto">هشدار</strong>
                                </Toast.Header>
                                <Toast.Body>{this.state.errordec}</Toast.Body>
                            </Toast>
                            <div className="text-right">
                                <div className="form-group">
                                    <label className="">شماره همراه</label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        value={this.state.mobile}
                                        className="form-control"
                                        placeholder="شماره همراه"
                                        required=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="">رمز عبور</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={this.state.password}
                                        className="form-control"
                                        placeholder="رمزعبور"
                                        required=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="">تکرار رمز عبور</label>
                                    <input
                                        type="password"
                                        id="repassword"
                                        name="repassword"
                                        value={this.state.repassword}
                                        className="form-control"
                                        placeholder="تکرار رمز عبور"
                                        required=""
                                    />

                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary mt-3 " type="submit">ثبت نام</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ React.Fragment >
        );
    }
}


export default RegisterDashboard;