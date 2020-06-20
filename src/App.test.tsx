import React from "react";
import { screen, render } from "@testing-library/react";
import { Component } from "./Component";
import { ThemeProvider, Theme } from "theme-ui";

const theme: Theme = {
  colors: {
    background: "white",
    text: "black",
    primary: "tomato",
    secondary: "gold",
  },
};

describe("describe", () => {
  it.only("checked background should be tomato", (done) => {
    const dataTestId = "test-text";
    const dataTestInputId = "test-input";
    const dataTestContainerId = "test-container";

    render(
      <ThemeProvider theme={theme}>
        <Component
          checked={true}
          {...{ "data-testid": dataTestContainerId }}
          inputProps={{ "data-testid": dataTestInputId }}
          textProps={{ "data-testid": dataTestId }}
        />
      </ThemeProvider>
    );

    const input = screen.getByTestId(dataTestInputId);
    expect(input).toHaveAttribute("checked", "");

    const container = screen.getByTestId(dataTestInputId);

    const getComputedCSS = (container.ownerDocument.defaultView as Window)
      .getComputedStyle;
    const css = getComputedCSS(container);
    console.log({ css });

    expect(container).toHaveStyle(
      `background-color: ${theme.colors?.secondary}`
    );

    console.log("dudee");
    const text = screen.getByTestId(dataTestId);
    expect(text).toHaveStyle(`background-color: ${theme.colors?.primary}`);
  });
});
