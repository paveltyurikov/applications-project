import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import * as notifyMeAPi from "~/features/applications/api/notifyMe";
import AllProviders from "~/providers/AllProviders";
import NotifyMeDialog from "./NotifyMeDialog.jsx";


const onClose = vi.fn();

const ui = (
  <AllProviders>
    <NotifyMeDialog open hide={onClose} appId={1} />
  </AllProviders>
);

describe("NotifyMeDialog", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByTestId("dialog-title")).toHaveTextContent(
      "Thank you for your interest"
    );
    expect(screen.getByTestId("dialog-message")).toHaveTextContent(
      "We still working on integrating this app it's not yet ready for now. But you can send us your email so we can let you know when it's ready"
    );
    expect(screen.getByTestId("btn-close")).toBeInTheDocument();
    expect(screen.getByText(/never mind/i)).toBeInTheDocument();
    expect(screen.getByText(/notify me/i)).toBeInTheDocument();
  });
  it("should close dialog with close button", async () => {
    render(ui);
    await userEvent.click(screen.getByTestId("btn-close"));
    expect(onClose).toBeCalledTimes(1);
  });
  it("should close dialog with 'Never mind' button", async () => {
    render(ui);
    await userEvent.click(screen.getByText(/never mind/i));
    expect(onClose).toBeCalledTimes(1);
  });
  it("should not allow submit notify when email empty or invalid", async () => {
    render(ui);
    expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
    expect(screen.getByText(/notify me/i)).toBeDisabled();
    await userEvent.type(screen.getByLabelText(/email/i), "wrong.email");
    screen.getByDisplayValue("wrong.email");
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    expect(screen.getByText(/notify me/i)).toBeDisabled();
  });
  it("should allow submit notify email is valid", async () => {
    render(ui);
    const notifyMe = vi.spyOn(notifyMeAPi, "default");
    expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
    await userEvent.type(screen.getByLabelText(/email/i), "valid@email.com");
    expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
    expect(screen.getByText(/notify me/i)).toBeEnabled();
    await userEvent.click(screen.getByText(/notify me/i));
    expect(notifyMe).toHaveBeenCalledTimes(1);
    expect(notifyMe).toHaveBeenCalledWith("valid@email.com", 1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
