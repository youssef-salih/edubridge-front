import React from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../app/store";
import ToastProvider from "../components/ToastProvider";
import { showToast } from "../utils/toastActions";

export default {
  title: "Example/ToastProvider",
  component: ToastProvider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      // Ensure portal div exists
      if (!document.getElementById("toast-root")) {
        const div = document.createElement("div");
        div.id = "toast-root";
        document.body.appendChild(div);
      }

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "info"],
    },
    message: { control: "text" },
    duration: { control: "number" },
  },
};

// Template that uses args
const Template = ({ type, message, duration }) => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-2">
      <ToastProvider />
      <button
        className={`px-4 py-2 text-white rounded ${
          type === "success"
            ? "bg-green-500"
            : type === "error"
            ? "bg-red-500"
            : "bg-blue-500"
        } hover:opacity-90 transition`}
        onClick={() =>
          dispatch(showToast(message || `${type} toast!`, type, duration))
        }
      >
        Show {type} Toast
      </button>
    </div>
  );
};

// Separate stories for each type
export const Success = Template.bind({});
Success.args = {
  type: "success",
  message: "Success toast!",
  duration: 3000,
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  message: "Error toast!",
  duration: 3000,
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  message: "Info toast!",
  duration: 3000,
};
