import React from "react";
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AllProviders from "@/providers/AllProviders";
import ApplicationsList from "./List";


const ui = (
  <AllProviders>
    <ApplicationsList />
  </AllProviders>
);

describe("ApplicationsList", () => {
  afterEach(() => {
    cleanup();
  });
  test("should render correctly", async () => {
    render(ui);
    await waitFor(() => screen.findByText("Discord"));
    expect(screen.queryAllByTestId("application-card").length).toBe(10);
    expect(screen.getByTestId("pagination-info")).toBeInTheDocument();
    expect(screen.getByTestId("list-filter")).toBeInTheDocument();
    expect(
      within(screen.getByTestId("list-filter")).getByText("Filters")
    ).toBeInTheDocument();
    expect(screen.getByTestId("applied-filters")).toBeInTheDocument();
    expect(screen.getByTestId("list-pagination")).toBeInTheDocument();
  });
  test("should handle Filters change", async () => {
    render(ui);

    await screen.findByText("Discord");
    expect(screen.queryAllByTestId("application-card").length).toBe(10);

    await userEvent.click(
      within(screen.getByTestId("list-filter")).getByText("Filters")
    );
    await userEvent.click(
      within(screen.getByTestId("list-filter-dialog")).getByText("Accounting")
    );
    await userEvent.click(
      within(screen.getByTestId("list-filter-dialog")).getByText("Bookkeeping")
    );
    await userEvent.click(
      within(screen.getByTestId("list-filter-dialog")).getByText("Apply")
    );
    const appliedFilters =  screen.queryAllByTestId("applied-filter")
    expect(appliedFilters[0]).toHaveTextContent(
      "Accounting"
    );
    expect(appliedFilters[1]).toHaveTextContent(
      "Bookkeeping"
    );
    const headers = screen.queryAllByTestId("app-header");
    headers.forEach((header) => {
      expect(header).toHaveTextContent(/Accounting|Bookkeeping/);
    });
    await userEvent.click(
      within(appliedFilters[1]).getByTestId(
        "CancelIcon"
      )
    );
    expect(screen.queryAllByTestId("applied-filter")[0]).toHaveTextContent(
      "Accounting"
    );
    expect(screen.queryAllByTestId("applied-filter").length).toBe(1);
    screen.queryAllByTestId("app-header").forEach((header) => {
      expect(header).toHaveTextContent(/Accounting/);
      expect(header).not.toHaveTextContent(/Bookkeeping/);
    });
  });
  test("should handle page change", async () => {
    render(ui);

    // expect(getList).toHaveBeenCalledTimes(1);
    await waitFor(() => screen.findByText("Discord"));
    expect(
      within(screen.getByTestId("list-pagination")).getByLabelText("page 1")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("list-pagination")).getByLabelText("page 1")
    ).toHaveAttribute("aria-current", "true");
    expect(
      within(screen.getByTestId("list-pagination")).getByLabelText(
        "Go to page 2"
      )
    ).toBeInTheDocument();
    await userEvent.click(
      within(screen.getByTestId("list-pagination")).getByLabelText(
        "Go to page 2"
      )
    );
    expect(await screen.findByText(/some-11/i)).toBeInTheDocument();
    expect(
      within(screen.getByTestId("list-pagination")).getByLabelText("page 2")
    ).toHaveAttribute("aria-current", "true");
    expect(screen.queryByText("Discord")).not.toBeInTheDocument();
  });
  test("should handle page change with select box", async () => {
    render(ui);
    await screen.findByText("Discord");
    expect(
      within(screen.getByTestId("list-pagination")).getByLabelText("page 1")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("list-pagination")).getByLabelText("page 1")
    ).toHaveAttribute("aria-current", "true");

    // eslint-disable-next-line testing-library/no-node-access
    const select = document.getElementById("mui-component-select-page-select");
    await userEvent.click(select);
    await userEvent.click(
      within(screen.getByRole("presentation")).getByText(2)
    );

    await screen.findByText(/some-11/i);
    expect(
      within(screen.getByTestId("list-pagination")).getByLabelText("page 2")
    ).toHaveAttribute("aria-current", "true");
    expect(screen.queryByText("Discord")).not.toBeInTheDocument();
  });
  test("should handle search", async () => {
    render(ui);
    await screen.findByText("Discord");
    await userEvent.type(
      screen.getByPlaceholderText("Search apps"),
      "___NonExistingText___"
    );
    expect(screen.queryAllByTestId("application-card").length).toBe(0);
    await userEvent.clear(screen.getByPlaceholderText("Search apps"));
    await userEvent.type(
      screen.getByPlaceholderText("Search apps"),
      "provides"
    );
    screen.queryAllByTestId("application-card").forEach((card) => {
      expect(card).toHaveTextContent("provides");
    });
  });
});
