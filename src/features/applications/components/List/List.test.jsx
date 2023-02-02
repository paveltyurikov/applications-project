import React from "react";
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, vi } from "vitest";
import * as getListAPi from "~/features/applications/api/getList";
import AllProviders from "~/providers/AllProviders/index.js";
import ApplicationsList from "./List";


const getList = vi.spyOn(getListAPi, "default");

const ui = (
  <AllProviders>
    <ApplicationsList />
  </AllProviders>
);

describe("ApplicationsList", () => {
  beforeEach((context) => {
    cleanup();
    console.dir(context);
  });
  afterEach(() => {
    vi.resetAllMocks();
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
  test("should handle page change with select box2", async () => {
    render(ui);
    await waitFor(() => screen.findByText("Discord"));
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
    // await waitFor(() => screen.findByText(/some-11/));
    expect(getList).toHaveBeenCalledWith({
      categories: [],
      page: 2,
    });
  });
  test("should handle Filters change", async () => {
    render(ui);

    await waitFor(() => screen.findByText("Discord"));
    // expect(getList).toHaveBeenCalledTimes(1);
    // expect(getList).toHaveBeenCalledWith({
    //   categories: [],
    //   page: 1,
    // });

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
    expect(screen.queryAllByTestId("applied-filter")[0]).toHaveTextContent(
      "Accounting"
    );
    expect(screen.queryAllByTestId("applied-filter")[1]).toHaveTextContent(
      "Bookkeeping"
    );
    expect(getList).toHaveBeenCalledWith({
      categories: ["Accounting", "Bookkeeping"],
      page: 1,
    });

    // expect(getList).toHaveBeenCalledTimes(2);

    await userEvent.click(
      within(screen.queryAllByTestId("applied-filter")[1]).getByTestId(
        "CancelIcon"
      )
    );
    expect(screen.queryAllByTestId("applied-filter")[0]).toHaveTextContent(
      "Accounting"
    );
    expect(screen.queryAllByTestId("applied-filter").length).toBe(1);
    // expect(getList).toHaveBeenCalledTimes(3);
    expect(getList).toHaveBeenCalledWith({
      categories: ["Accounting"],
      page: 1,
    });
  });
  test("should handle page change", async () => {
    render(ui);

    // expect(getList).toHaveBeenCalledTimes(1);
    await waitFor(() => screen.findByText("Discord"), { timeout: 4000 });
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
    //expect(getList).toHaveBeenCalledTimes(2);

    expect(getList).toHaveBeenCalledWith({
      categories: [],
      page: 2,
    });
  });
  test("should handle page change with select box", async () => {
    const { debug } = render(ui);
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
    const opt = within(screen.getByRole("presentation")).getByText(2);
    debug(opt);
    await userEvent.click(
      within(screen.getByRole("presentation")).getByText(2)
    );
    // await waitFor(() => screen.findByText(/some-11/));
    expect(getList).toHaveBeenCalledWith({
      categories: [],
      page: 2,
    });
  });
});
