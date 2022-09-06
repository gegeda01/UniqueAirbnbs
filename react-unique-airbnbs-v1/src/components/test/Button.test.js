import React from "react";
//import { ReactDOM } from "react-dom";
import Button from "../Button";

import { render,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders button correctly", () =>{
    const {getByTestId} = render(<Button label="Click me"/>);
    expect(getByTestId("button")).toHaveTextContent("Click me");
});

it("renders button text correctly", () =>{
    const {getByTestId} = render(<Button label="Press me"/>);
    expect(getByTestId("button")).toHaveTextContent("Press me");
});