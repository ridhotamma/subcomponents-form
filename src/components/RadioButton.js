import React from "react";

const RadioButton = (props) => {
  let subComponentList = Object.keys(RadioButton);
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className="radio">
      <label data-testid="label">
        <input type="radio" name={props.name} data-testid="radio-button" />
        {props.label}
      </label>
      {subComponents.map((component) => component)}
    </div>
  );
};

const TextField = (props) => (
  <input
    type="text"
    className="textfield"
    placeholder={props.placeholder}
    data-testid="textfield"
  />
);
const TextArea = (props) => (
  <textarea
    className=""
    placeholder={props.placeholder}
    data-testid="textarea"
  />
);
const DateField = () => (
  <input type="date" className="datefield" data-testid="datefield" />
);
const MultiChoicesField = (props) => {
  return (
    <div className="subcomponent__multi-choices" data-testid="multichoices">
      <select data-testid="select">
        {props.choices.map((choice) => {
          return (
            <option key={choice} data-testid="option">
              {choice}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const Form = (props) => {
  let subComponentList = Object.keys(RadioButton);
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className="form__subcomponent" data-testid="form">
      <label data-testid="label-inner">
        <input
          type="radio"
          name={props.name}
          data-testid="radio-button-inner"
        />
        {props.label}
      </label>
      <div className="subcomponent__items">
        {subComponents.map((component) => component)}
      </div>
    </div>
  );
};

RadioButton.MultiChoicesField = MultiChoicesField;
RadioButton.TextField = TextField;
RadioButton.TextArea = TextArea;
RadioButton.DateField = DateField;

RadioButton.Form = Form;
RadioButton.Form.MultiChoicesField = MultiChoicesField;
RadioButton.Form.TextField = TextField;
RadioButton.Form.TextArea = TextArea;
RadioButton.Form.DateField = DateField;

export default RadioButton;
