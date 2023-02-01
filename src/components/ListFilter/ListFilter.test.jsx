import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, vi } from "vitest";
import ListFilter from "./ListFilter";


const onChange = vi.fn();

const ui = (
  <ListFilter
    ListFilterButton={() => <button>fake button</button>}
    onChange={onChange}
    value={""}
    placeholder="Search apps"
  />
);

describe("ListFilter", () => {
  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByText("fake button")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search apps")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search apps").value).toBe("");
  });
  it("should handle search input change", async () => {
    render(ui);
    await userEvent.type(screen.getByPlaceholderText("Search apps"), "Discord");
    expect(onChange).toHaveBeenCalledTimes("Discord".length);
    expect(onChange).toHaveBeenCalledWith("D");
    expect(onChange).toHaveBeenCalledWith("i");
    expect(onChange).toHaveBeenCalledWith("s");
    expect(onChange).toHaveBeenCalledWith("c");
    expect(onChange).toHaveBeenCalledWith("o");
    expect(onChange).toHaveBeenCalledWith("r");
    expect(onChange).toHaveBeenCalledWith("d");
  });
});
