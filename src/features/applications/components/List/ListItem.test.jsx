import { render, within, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import notifyMe from "~/features/applications/api/notifyMe";
import AllProviders from "~/providers/AllProviders/index";
import ApplicationsListItem from "./ListItem.jsx";



const testApplication = {
  id: 1,
  title: "Darwinbox",
  icon: "./public/vite.svg",
  categories: ["HIRS", "Payroll"],
  description:
    "Darwinbox provides end-to-end agile HRMS suite to deliver countless results within one platform for your employees",
};

const ui = (
  <AllProviders>
    <ApplicationsListItem application={testApplication} />
  </AllProviders>
);

describe("ApplicationsListItem", () => {
  it("should render correctly", () => {
    render(ui);
    expect(
      within(screen.getByTestId("app-header")).getByText("Darwinbox")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("app-header")).getByText("HIRS, Payroll")
    ).toBeInTheDocument();
    expect(screen.getByTestId("app-description")).toHaveTextContent(
      "Darwinbox provides end-to-end agile HRMS suite to deliver countless results within one platform for your employees"
    );
    expect(screen.getByText(/notify me when it's ready/i)).toBeInTheDocument();
  });
  it("should popup notify dialog", async () => {
    render(ui);
    await userEvent.click(screen.getByText(/notify me when it's ready/i));
    expect(
      screen.getByText(/Thank you for your interest/i)
    ).toBeInTheDocument();
  });
});
