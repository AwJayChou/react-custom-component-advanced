import React, { Component } from "react";
import kFormCreate from "../components/kFormCreate";

const nameRules = {
  required: true,
  message: "please input ur name"
};
const passwordRules = {
  required: true,
  message: "please input ur password"
};

@kFormCreate
class MyFormPage extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("success", values);
      }
    });
    // console.log("submit", getFieldsValue(), getFieldValue("name"));
  };
  render() {
    console.log("props", this.props);
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <h3>MyFormPage</h3>
        {getFieldDecorator("name", { rules: [nameRules] })(<input />)}
        {getFieldDecorator("password", { rules: [passwordRules] })(
          <input type="password" />
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default MyFormPage;
