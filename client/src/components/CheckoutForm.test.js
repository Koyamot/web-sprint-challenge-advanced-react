import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    getByText(/Checkout Form/i)
});

test("form shows success message on submit with form details", () => {
    const { getByTestId, getByRole } = render(<CheckoutForm />);

    const firstNameInput = getByTestId(/first-name/i);
    const lastNameInput = getByTestId(/last-name/i);
    const addressInput = getByTestId(/address/i);
    const button = getByRole('button')

    fireEvent.change(firstNameInput, {
        target: {value: "Kyla"}
    });
    fireEvent.change(lastNameInput, {
        target: {value: "Oyamot"}
    });
    fireEvent.change(addressInput, {
        target: {value: "4514 E 7th Ave"}
    });
    fireEvent.click(button);
    const successMessage = getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument();

});
