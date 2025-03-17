import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "../components/loginbackground.css";
import AuthService from "../services/auth.service";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

// const required = value => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Email is not required!
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
const Cpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The Confirm password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCPassword = this.onChangeCPassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      cpassword: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeCPassword(e) {
    this.setState({
      cpassword: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.cpassword

      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="loginbackground43">
          <div className="col-md-12">
            <div className="card card-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUWihTt0WdCy3o49Z548Vu5oNKkBMH_uNzQ&usqp=CAU"
                alt="profile-img"
                className="profile-img-card"
              />

              <Form
                onSubmit={this.handleRegister}
                ref={c => {
                  this.form = c;
                }}
              >
                {!this.state.successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="username">Ownername</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[vusername]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">OwnerEmail</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[email]}
                      // validations={[required, email]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[vpassword]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Confirm Password</label>
                      <Input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Confirm Password"
                        value={this.state.cpassword}
                        onChange={this.onChangeCPassword}
                        validations={[Cpassword]}
                      />
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>
                )}

                {this.state.message && (
                  <div className="form-group">
                    <div
                      className={
                        this.state.successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
                <span>
                  Already have an account ? <Link to="/ownerlogin">Login.</Link>
                </span>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
