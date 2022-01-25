import React from "react";
import "./App.css";
import RadioButton from "./components/RadioButton";

const App = () => {
  return (
    <>
      <div className="container">
        <div>
          <p className="title">Without subcomponents</p>
          <RadioButton value="male" label="Male" name="gender" />
          <RadioButton value="female" label="Female" name="gender" />
          <RadioButton value="transgender" label="Transgender" name="gender" />
          <RadioButton value="other" label="Other" name="gender" />
        </div>

        <div>
          <p className="title">With subcomponents</p>
          <RadioButton label="Your Name" name="biodata">
            <RadioButton.TextField placeholder="Your Name" />
          </RadioButton>
          <RadioButton label="Your Address" name="biodata">
            <RadioButton.TextArea placeholder="Your Address" />
          </RadioButton>
          <RadioButton label="Your Birthday" name="biodata">
            <RadioButton.DateField />
          </RadioButton>
        </div>

        <p className="title">With Subcomponent of Subcomponent</p>

        <RadioButton label="Your Contact" name="emergency-contact">
          <RadioButton.Form name="contact-1">
            <RadioButton.MultiChoicesField choices={["personal", "company"]} />
            <RadioButton.Form.TextField placeholder="Name" />
            <RadioButton.Form.TextField placeholder="Phone Number" />
          </RadioButton.Form>

          <RadioButton.Form name="contact-1">
            <RadioButton.MultiChoicesField choices={["personal", "company"]} />
            <RadioButton.Form.TextField placeholder="Name" />
            <RadioButton.Form.TextField placeholder="Phone Number" />
          </RadioButton.Form>

          <RadioButton.Form name="contact-1">
            <RadioButton.MultiChoicesField choices={["personal", "company"]} />
            <RadioButton.Form.TextField placeholder="Name" />
            <RadioButton.Form.TextField placeholder="Phone Number" />
          </RadioButton.Form>
        </RadioButton>

        <RadioButton label="Emergency Contact" name="emergency-contact">
          <RadioButton.Form name="contact-2">
            <RadioButton.MultiChoicesField
              choices={[
                "father",
                "mother",
                "sibling",
                "uncle",
                "cousin",
                "aunt",
              ]}
            />
            <RadioButton.Form.TextField placeholder="Name" />
            <RadioButton.Form.TextField placeholder="Phone Number" />
          </RadioButton.Form>

          <RadioButton.Form name="contact-2">
            <RadioButton.MultiChoicesField
              choices={[
                "father",
                "mother",
                "sibling",
                "uncle",
                "cousin",
                "aunt",
              ]}
            />
            <RadioButton.Form.TextField placeholder="Name" />
            <RadioButton.Form.TextField placeholder="Phone Number" />
          </RadioButton.Form>

          <RadioButton.Form name="contact-2">
            <RadioButton.MultiChoicesField
              choices={[
                "father",
                "mother",
                "sibling",
                "uncle",
                "cousin",
                "aunt",
              ]}
            />
            <RadioButton.Form.TextField placeholder="Name" />
            <RadioButton.Form.TextField placeholder="Phone Number" />
          </RadioButton.Form>
        </RadioButton>
      </div>
    </>
  );
};

export default App;
