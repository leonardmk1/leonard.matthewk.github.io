import React from "react";
import "./MyForm.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form-container">
        <h3 className="form-header">Contact Me</h3>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xjvpykke"
          method="POST"
        >
          <div className="form-content">
            <label>Email:</label>
            <input type="email" name="email" />

            <label>Message:</label>
            <input type="text" name="message" />
          </div>
          <br />
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="form-submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
