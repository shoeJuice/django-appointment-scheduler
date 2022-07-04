import { render, screen } from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import "@testing-library/jest-dom";

describe("Contact Form", () => {
  it("renders the Contact Form Component", () => {
    render(<ContactForm width='400px' />);

    const firstNameLabel = screen.getByTestId("first_name_label");
    const firstNameInput = screen.getByTestId("fname_input");
    const lastNameLabel = screen.getByTestId("last_name_label");
    const lastNameInput = screen.getByTestId("lname_input");
    const emailAddressLabel = screen.getByTestId("email_address_label");
    const emailAddressInput = screen.getByTestId("email_input");
    const telephoneLabel = screen.getByTestId("telephone_label");
    const telephoneInput = screen.getByTestId("tel_input");
    const messageLabel = screen.getByTestId("message_label");
    const messageInput = screen.getByTestId("message_input");
    const submitButton = screen.getByRole("button");

    expect(firstNameLabel.textContent).toBe("First Name");
    expect(lastNameLabel.textContent).toBe("Last Name");
    expect(emailAddressLabel.textContent).toBe("Email Address");
    expect(telephoneLabel.textContent).toBe("Telephone");
    expect(messageLabel.textContent).toBe("Message");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailAddressInput).toBeInTheDocument();
    expect(telephoneInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
