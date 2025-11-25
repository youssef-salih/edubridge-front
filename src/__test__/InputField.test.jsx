import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";
import { vi } from "vitest";

const renderWithFormik = (initialValues, validationSchema, fieldProps) => {
  return render(
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={vi.fn()}
    >
      <Form>
        <InputField {...fieldProps} />
      </Form>
    </Formik>
  );
};

describe("InputField Component", () => {
  it("renders text input correctly", () => {
    renderWithFormik(
      { name: "" },
      Yup.object({ name: Yup.string().required() }),
      { label: "Name", name: "name", type: "text" }
    );

    const input = screen.getByLabelText(/name/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders password input correctly", () => {
    renderWithFormik(
      { password: "" },
      Yup.object({ password: Yup.string().required() }),
      { label: "Password", name: "password", type: "password" }
    );

    const input = screen.getByLabelText(/password/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders textarea correctly", () => {
    renderWithFormik(
      { bio: "" },
      Yup.object({ bio: Yup.string().required() }),
      { label: "Bio", name: "bio", type: "textarea" }
    );

    const textarea = screen.getByLabelText(/bio/i);
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("renders select correctly with options", () => {
    const options = [
      { value: "", label: "Select" },
      { value: "1", label: "O1" },
    ];

    renderWithFormik(
      { option: "" },
      Yup.object({ option: Yup.string().required() }),
      { label: "Option", name: "option", type: "select", options }
    );

    const select = screen.getByLabelText(/option/i);
    expect(select.tagName).toBe("SELECT");
    expect(screen.getByText(/Option/i)).toBeInTheDocument();
  });

  it("shows validation error when field is touched and invalid", async () => {
    const validationSchema = Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
    });

    renderWithFormik({ email: "" }, validationSchema, {
      label: "Email",
      name: "email",
      type: "email",
    });

    const input = screen.getByLabelText(/email/i);
    await userEvent.click(input);
    await userEvent.tab(); 

    const error = await screen.findByText(/Required/i);
    expect(error).toBeInTheDocument();
  });

  it("accepts user input", async () => {
    renderWithFormik(
      { name: "" },
      Yup.object({ name: Yup.string().required() }),
      { label: "Name", name: "name", type: "text" }
    );

    const input = screen.getByLabelText(/name/i);
    await userEvent.type(input, "youssef");

    expect(input.value).toBe("youssef");
  });
});
