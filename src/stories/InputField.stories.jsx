import InputField from "../components/InputField";
import { Formik, Form } from "formik";

export default {
  title: "Form/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    label: "Example Label",
    name: "example",
    type: "text",
    disabled: false,
    autoComplete: "off",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "textarea", "select"],
    },
    options: {
      control: "object",
    },
  },
};

const Template = (args) => (
  <Formik
    initialValues={{ [args.name]: "" }}
    onSubmit={(values) => console.log(values)}
  >
    <Form className="w-80">
      <InputField {...args} />
    </Form>
  </Formik>
);

export const Text = Template.bind({});
Text.args = {
  type: "text",
  label: "Text Input",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  label: "Email Input",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  label: "Password Input",
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: "textarea",
  label: "Message",
};

export const Select = Template.bind({});
Select.args = {
  type: "select",
  label: "Choose option",
  options: [
    { value: "", label: "Select..." },
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Input",
  disabled: true,
};
