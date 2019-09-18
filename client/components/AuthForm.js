import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              onChange={e =>
                this.setState({ password: e.target.value })
              }
              value={this.state.password}
            />
          </div>

          <div className="errors">
            {this.props.errors.map(error => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
