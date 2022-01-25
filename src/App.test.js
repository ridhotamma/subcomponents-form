import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import App from "./App";

import RadioButton from "./components/RadioButton";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.append(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders App components", () => {
  act(() => {
    render(<App />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
"<div class=\\"container\\">
  <div>
    <p class=\\"title\\">Without subcomponents</p>
    <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"gender\\" data-testid=\\"radio-button\\">Male</label></div>
    <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"gender\\" data-testid=\\"radio-button\\">Female</label></div>
    <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"gender\\" data-testid=\\"radio-button\\">Transgender</label></div>
    <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"gender\\" data-testid=\\"radio-button\\">Other</label></div>
  </div>
  <div>
    <p class=\\"title\\">With subcomponents</p>
    <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"biodata\\" data-testid=\\"radio-button\\">Your Name</label><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Your Name\\" data-testid=\\"textfield\\"></div>
    <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"biodata\\" data-testid=\\"radio-button\\">Your Address</label><textarea class=\\"\\" placeholder=\\"Your Address\\" data-testid=\\"textarea\\"></textarea></div>
    <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"biodata\\" data-testid=\\"radio-button\\">Your Birthday</label><input type=\\"date\\" class=\\"datefield\\" data-testid=\\"datefield\\"></div>
  </div>
  <p class=\\"title\\">With Subcomponent of Subcomponent</p>
  <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"emergency-contact\\" data-testid=\\"radio-button\\">Your Contact</label>
    <div class=\\"form__subcomponent\\" data-testid=\\"form\\"><label data-testid=\\"label-inner\\"><input type=\\"radio\\" name=\\"contact-1\\" data-testid=\\"radio-button-inner\\"></label>
      <div class=\\"subcomponent__items\\">
        <div class=\\"subcomponent__multi-choices\\" data-testid=\\"multichoices\\"><select data-testid=\\"select\\">
            <option data-testid=\\"option\\">personal</option>
            <option data-testid=\\"option\\">company</option>
          </select></div><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Name\\" data-testid=\\"textfield\\"><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Phone Number\\" data-testid=\\"textfield\\">
      </div>
    </div>
    <div class=\\"form__subcomponent\\" data-testid=\\"form\\"><label data-testid=\\"label-inner\\"><input type=\\"radio\\" name=\\"contact-1\\" data-testid=\\"radio-button-inner\\"></label>
      <div class=\\"subcomponent__items\\">
        <div class=\\"subcomponent__multi-choices\\" data-testid=\\"multichoices\\"><select data-testid=\\"select\\">
            <option data-testid=\\"option\\">personal</option>
            <option data-testid=\\"option\\">company</option>
          </select></div><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Name\\" data-testid=\\"textfield\\"><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Phone Number\\" data-testid=\\"textfield\\">
      </div>
    </div>
    <div class=\\"form__subcomponent\\" data-testid=\\"form\\"><label data-testid=\\"label-inner\\"><input type=\\"radio\\" name=\\"contact-1\\" data-testid=\\"radio-button-inner\\"></label>
      <div class=\\"subcomponent__items\\">
        <div class=\\"subcomponent__multi-choices\\" data-testid=\\"multichoices\\"><select data-testid=\\"select\\">
            <option data-testid=\\"option\\">personal</option>
            <option data-testid=\\"option\\">company</option>
          </select></div><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Name\\" data-testid=\\"textfield\\"><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Phone Number\\" data-testid=\\"textfield\\">
      </div>
    </div>
  </div>
  <div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" name=\\"emergency-contact\\" data-testid=\\"radio-button\\">Emergency Contact</label>
    <div class=\\"form__subcomponent\\" data-testid=\\"form\\"><label data-testid=\\"label-inner\\"><input type=\\"radio\\" name=\\"contact-2\\" data-testid=\\"radio-button-inner\\"></label>
      <div class=\\"subcomponent__items\\">
        <div class=\\"subcomponent__multi-choices\\" data-testid=\\"multichoices\\"><select data-testid=\\"select\\">
            <option data-testid=\\"option\\">father</option>
            <option data-testid=\\"option\\">mother</option>
            <option data-testid=\\"option\\">sibling</option>
            <option data-testid=\\"option\\">uncle</option>
            <option data-testid=\\"option\\">cousin</option>
            <option data-testid=\\"option\\">aunt</option>
          </select></div><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Name\\" data-testid=\\"textfield\\"><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Phone Number\\" data-testid=\\"textfield\\">
      </div>
    </div>
    <div class=\\"form__subcomponent\\" data-testid=\\"form\\"><label data-testid=\\"label-inner\\"><input type=\\"radio\\" name=\\"contact-2\\" data-testid=\\"radio-button-inner\\"></label>
      <div class=\\"subcomponent__items\\">
        <div class=\\"subcomponent__multi-choices\\" data-testid=\\"multichoices\\"><select data-testid=\\"select\\">
            <option data-testid=\\"option\\">father</option>
            <option data-testid=\\"option\\">mother</option>
            <option data-testid=\\"option\\">sibling</option>
            <option data-testid=\\"option\\">uncle</option>
            <option data-testid=\\"option\\">cousin</option>
            <option data-testid=\\"option\\">aunt</option>
          </select></div><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Name\\" data-testid=\\"textfield\\"><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Phone Number\\" data-testid=\\"textfield\\">
      </div>
    </div>
    <div class=\\"form__subcomponent\\" data-testid=\\"form\\"><label data-testid=\\"label-inner\\"><input type=\\"radio\\" name=\\"contact-2\\" data-testid=\\"radio-button-inner\\"></label>
      <div class=\\"subcomponent__items\\">
        <div class=\\"subcomponent__multi-choices\\" data-testid=\\"multichoices\\"><select data-testid=\\"select\\">
            <option data-testid=\\"option\\">father</option>
            <option data-testid=\\"option\\">mother</option>
            <option data-testid=\\"option\\">sibling</option>
            <option data-testid=\\"option\\">uncle</option>
            <option data-testid=\\"option\\">cousin</option>
            <option data-testid=\\"option\\">aunt</option>
          </select></div><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Name\\" data-testid=\\"textfield\\"><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"Phone Number\\" data-testid=\\"textfield\\">
      </div>
    </div>
  </div>
</div>"
`);
});

it("renders RadioButton components label correctly", () => {
  act(() => {
    render(<RadioButton label="Hello" />, container);
  });
  expect(container.textContent).toEqual("Hello");
});

it("render RadioButton Components should not crash", () => {
  act(() => {
    render(
      <RadioButton label="Female" value="female" name="gender" />,
      container
    );
  });

  expect(container.querySelector("[data-testid='label']").textContent).toEqual(
    "Female"
  );

  expect(
    container.querySelector("[data-testid='radio-button']").checked
  ).toEqual(false);

  expect(
    container.querySelector("[data-testid='radio-button']").getAttribute("name")
  ).toEqual("gender");

  expect(
    container.querySelector("[data-testid='radio-button']").getAttribute("type")
  ).toEqual("radio");
});

it("render subcomponents", () => {
  act(() => {
    render(
      <RadioButton label="test">
        <RadioButton.TextField placeholder="input text" />
        <RadioButton.DateField />
        <RadioButton.MultiChoicesField
          choices={["choice1", "choice2", "choice3"]}
        />
      </RadioButton>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
"<div class=\\"radio\\"><label data-testid=\\"label\\"><input type=\\"radio\\" data-testid=\\"radio-button\\">test</label>
  <div class=\\"subcomponent__multi-choices\\" data-testid=\\"multichoices\\"><select data-testid=\\"select\\">
      <option data-testid=\\"option\\">choice1</option>
      <option data-testid=\\"option\\">choice2</option>
      <option data-testid=\\"option\\">choice3</option>
    </select></div><input type=\\"text\\" class=\\"textfield\\" placeholder=\\"input text\\" data-testid=\\"textfield\\"><input type=\\"date\\" class=\\"datefield\\" data-testid=\\"datefield\\">
</div>"
`);
});
