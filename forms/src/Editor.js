import React, { Component } from "react";
import { ValidationMessage } from "./ValidationMessage";
import { FormValidator } from "./FormValidator";
import { validateForm } from "./wholeFormValidation";
export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Bob", email: "", emailConfirm: "" };
    this.rules = {
      name: { required: true, minLenght: 3, alpha: true },
      email: { required: true, email: true, equals: "emailConfirm" },
      emailConfirm: { required: true, email: true, equals: "email" },
      order: { required: true },
      terms: { true: true },
    };
  }

  updateFormValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updateCheckFormValue = ev => {
    this.setState({ [ev.target.name]: ev.target.checked });
  };

  render() {
    return (
      <div className="h5 bg-info text-white p-2">
        <FormValidator
          data={this.state}
          rules={this.rules}
          submit={this.props.submit}
          validateForm={validateForm}
        >
          <ValidationMessage field="form" />
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.updateFormValue}
            />
            <ValidationMessage field="name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.updateFormValue}
            />
            <ValidationMessage field="email" />
          </div>
          <div className="form-group">
            <label>Confirm Email</label>
            <input
              className="form-control"
              name="emailConfirm"
              value={this.state.emailConfirm}
              onChange={this.updateFormValue}
            />
            <ValidationMessage field="emailConfirm" />
          </div>
        </FormValidator>
      </div>
    );
  }
}

/* updateFormValueOptions = event => {
    let options = [...event.target.options]
      .filter(option => option.selected)
      .map(option => option.value);

    this.setState({ [event.target.name]: options }, () =>
      this.props.submit(this.state)
    );
  };
*/
/*     <label>Ice Cream Toppings</label>
          <select
            className="form-control"
            multiple={true}
            name="toppings"
            value={this.state.toppings}
            onChange={this.updateFormValueOptions}
          >
            {this.toppings.map(top => (
              <option value={top} key={top}>
                {top}
              </option>
            ))}
          </select>*/
/*  updateFormCheckValue = event => {
    event.persist();
    this.setState(state => {
      if (event.target.checked) {
        state.toppings.push(event.target.name);
      } else {
        let index = state.toppings.indexOf(event.target.name);
        state.toppings.splice(index, 1);
      }
    }, this.props.submit(this.state));
  }; */

/*    <div className="form-group">
          <label>Ice Cream Flavors</label>

          {this.flavors.map(flavor => (
            <div className="form-check" key={flavor}>
              <input
                className="form-check-input"
                type="radio"
                value={flavor}
                name="flavor"
                checked={this.state.flavor === flavor}
                onChange={this.updateFormValue}
              />
              <label className="form-check-label"> {flavor}</label>
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>Ice Cream Toppings</label>

          {this.toppings.map(top => (
            <div className="form-check" key={top}>
              <input
                type="checkbox"
                className="form-check-input"
                name={top}
                //  value={this.state[top]}
                checked={this.state.toppings.indexOf(top) > -1}
                onChange={this.updateFormCheckValue}
              />
              <label className="form-check-laber">{top}</label>
            </div>
          ))}
        </div> */

/*     <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="terms"
                onChange={this.updateCheckFormValue}
                checked={this.state.terms}
              />
              <label className="form-check-label">Agree to terms</label>
            </div>
            <ValidationMessage field="terms" />
          </div>*/
