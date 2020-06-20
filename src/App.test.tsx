import React from "react";
import { screen, render } from "@testing-library/react";
import { Component } from "./Component";
import { ThemeProvider, Theme } from "theme-ui";

const theme: Theme = {
  colors: {
    background: "white",
    text: "black",
    primary: "tomato",
  },
  space: [0, "0.5rem", "1rem", "2rem"],
  sizes: [0, "0.875rem", "1.75rem", "1rem", "2rem", "4rem", "8rem"],
  radii: [0, 2],
};

describe("describe", () => {
  describe("describe 1", () => {
    it.only("checked background should be tomato", () => {
      const dataTestId = "ToggleHandler";
      const dataTestInputId = "ToggleInput";

      render(
        <ThemeProvider theme={theme}>
          <Component
            checked={true}
            inputProps={{ "data-testid": dataTestInputId }}
            textProps={{ "data-testid": dataTestId }}
          />
        </ThemeProvider>
      );
      const r1 = screen.getByTestId(dataTestInputId);
      expect(r1).toHaveAttribute("checked", "");

      const r = screen.getByTestId(dataTestId);
      expect(r).toHaveStyle(`background-color: tomato`);
    });
  });
});
