import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox should change the value to true", () => {
  render(<Checkbox />);
  const checkbox = screen.getByLabelText(/not checked/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
