import React from "react"
import ContactSection from "../ContactSection"

import { render,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders contact correctly", () =>{
    const {getByTestId} = render(<ContactSection round="true"/>);
    expect(getByTestId("message")).not.toContainElement(null);
});