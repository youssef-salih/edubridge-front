import { render, screen } from "@testing-library/react";
import Navbar from "../layouts/navbar/Navbar";
import { describe, it, expect } from "vitest";

describe("Navbar", () => {
  it("text Available", async () => {
    render(<Navbar />);

    const element = await screen.findByRole("button", { value: "hello" });
    expect(element).toBeInTheDocument();
  });
});
