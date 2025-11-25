import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ToastProvider from "../components/ToastProvider";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../features/toastSlice";
import "@testing-library/jest-dom";

function renderWithStore(preloadedState) {
  const store = configureStore({
    reducer: { toast: toastReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <div id="toast-root"></div>
      <ToastProvider />
    </Provider>
  );
}

beforeEach(() => {
  cleanup();
  document.body.innerHTML = `<div id="toast-root"></div>`;
});

describe("ToastProvider", () => {
  it("renders toasts correctly", () => {
    renderWithStore({
      toast: [{ id: 1, type: "success", message: "Success message" }],
    });

    expect(screen.getByText("Success message")).toBeInTheDocument();
  });

  it("applies success styles", () => {
    renderWithStore({
      toast: [{ id: 1, type: "success", message: "Success!" }],
    });

    const toast = screen.getByText("✕").closest("div").parentElement;

    expect(toast).toHaveClass("bg-green-500");
  });

  it("applies error styles", () => {
    renderWithStore({
      toast: [{ id: 2, type: "error", message: "Error!" }],
    });

    const toast = screen.getByText("✕").closest("div").parentElement;

    expect(toast).toHaveClass("bg-red-500");
  });

  it("applies default info styles when type is unknown", () => {
    renderWithStore({
      toast: [{ id: 3, type: "unknown", message: "Info message" }],
    });

    const toast = screen.getByText("✕").closest("div").parentElement;

    expect(toast).toHaveClass("bg-blue-500/60");
  });

  it("removes toast when clicking close button", () => {
    renderWithStore({
      toast: [{ id: 4, type: "success", message: "Closable toast" }],
    });

    const closeBtn = screen.getByText("✕");
    fireEvent.click(closeBtn);

    expect(screen.queryByText("Closable toast")).not.toBeInTheDocument();
  });

  it("renders inside the portal (#toast-root)", () => {
    renderWithStore({
      toast: [{ id: 5, type: "success", message: "Portal toast" }],
    });

    const portal = document.getElementById("toast-root");

    expect(portal.innerHTML).toContain("Portal toast");
  });

  it("renders toasts in the correct order (newest last)", () => {
    renderWithStore({
      toast: [
        { id: 1, type: "success", message: "First" },
        { id: 2, type: "error", message: "Second" },
      ],
    });

    const renderedMessages = screen
      .getAllByText(/First|Second/)
      .map((e) => e.textContent);

    expect(renderedMessages).toEqual(["First", "Second"]);
  });
});
