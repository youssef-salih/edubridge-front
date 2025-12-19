import { Form, Formik } from "formik";
import React from "react";
import InputField from "./InputField";
import { Home, Search } from "lucide-react";

const SearchFilter = () => {
  return (
    <Formik
      initialValues={{
        example: "",
      }}
      onSubmit={() => {}}
    >
      <Form className="">
        <InputField
          icon={<Search size={15} />}
          autoComplete="off"
          name="example"
          placeholder="Search internships..."
          type="text"
         
        />
      </Form>
    </Formik>
  );
};

export default SearchFilter;
