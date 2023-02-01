import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import AppliedFilters from "./AppliedFilters";


const onRemove = vi.fn();

const TEST_FILTERS = [
  { id: 1, label: "eCommerce" },
  { id: 2, label: "HIRS" },
];

const ui = (
  <AppliedFilters
    appliedFilters={TEST_FILTERS}
    removeAppliedFilter={onRemove}
  />
);

describe("AppliedFilters", () => {
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByText("eCommerce")).toBeInTheDocument();
    expect(screen.getByText("HIRS")).toBeInTheDocument();
    expect(screen.queryAllByTestId("applied-filter")).toHaveLength(2);
  });
  it("should handle onDelete click", async () => {
    render(ui);
    await userEvent.click(
      within(screen.queryAllByTestId("applied-filter")[0]).getByTestId(
        "CancelIcon"
      )
    );
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(TEST_FILTERS[0].id);
  });
});
