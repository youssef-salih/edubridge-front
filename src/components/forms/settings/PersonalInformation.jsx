import React from "react";
import InputField from "../../InputField";
import { Form } from "formik";

const PersonalInformation = ({ formik }) => {
  return (
    <Form>
      <div className="grid grid-cols-12 gap-5">
        <InputField
          autoComplete="off"
          label="First Name"
          name="firstName"
          value={formik.values.firstName}
          type="text"
          className={"col-span-6 "}
          classNameInput={"py-2 bg-gray/10"}
        />
        <InputField
          autoComplete="off"
          label="Last Name"
          value={formik.values.lastName}
          name="lastName"
          type="text"
          className={"col-span-6 "}
          classNameInput={"py-2 bg-gray/10"}
        />
      </div>
      <InputField
        autoComplete="off"
        label="Email"
        value={formik.values.email}
        name="email"
        type="text"
        className={"col-span-6 "}
        classNameInput={"py-2 bg-gray/10"}
      />
      <InputField
        autoComplete="off"
        label="Phone Number"
        value={formik.values.phoneNumber}
        name="phoneNumber"
        type="text"
        className={"col-span-6 "}
        classNameInput={"py-2 bg-gray/10"}
      />
      <InputField
        autoComplete="off"
        label="Major/Field of Study"
        value={formik.values.field}
        name="field"
        type="text"
        className={"col-span-6 "}
        classNameInput={"py-2 bg-gray/10"}
      />
    </Form>
  );
};

export default PersonalInformation;
