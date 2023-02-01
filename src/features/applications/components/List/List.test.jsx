import {cleanup, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {afterEach, vi} from "vitest";
import FilterContextProvider from "./FilterContextProvider";
import ApplicationsListFilterDialog from "./ListFilterDialog";


const onClose = vi.fn();
const onClear = vi.fn();
const onApply = vi.fn();

const ui = (
    <FilterContextProvider>
        <ApplicationsListFilterDialog open hide={onClose}/>
    </FilterContextProvider>
);

describe("ListFilterDialog", () => {
    afterEach(() => {
        cleanup();
        vi.resetAllMocks();
    });
    it("should render all its elements", () => {
        render(ui);
        expect(screen.getByTestId("filters-name")).toHaveTextContent("Categories");
        expect(screen.getByText("Accounting")).toBeInTheDocument();
        expect(screen.getByText("Bookkeeping")).toBeInTheDocument();
        expect(screen.getByText("Communications")).toBeInTheDocument();
        expect(screen.getByText("Compliance")).toBeInTheDocument();
        expect(screen.getByText("eCommerce")).toBeInTheDocument();
        expect(screen.getByText("HRIS")).toBeInTheDocument();
        expect(screen.queryAllByTestId("category-checkbox").length).toBe(7);
    });
    it("should handle checkbox click", async () => {
        render(ui);
        const checkboxes = screen.queryAllByTestId("category-checkbox")
        expect(checkboxes[0].className).not.toMatch(/Mui-checked/)
        expect(checkboxes[1].className).not.toMatch(/Mui-checked/)
        await userEvent.click(checkboxes[0])
        await userEvent.click(checkboxes[1])
        expect(checkboxes[0].className).toMatch(/Mui-checked/)
        expect(checkboxes[1].className).toMatch(/Mui-checked/)
        await userEvent.click(checkboxes[1])
        expect(checkboxes[0].className).toMatch(/Mui-checked/)
        expect(checkboxes[1].className).not.toMatch(/Mui-checked/)
    });
    it("should handle Close click", async () => {
        render(ui);
        await userEvent.click(screen.getByTestId('btn-close'))
        expect(onClose).toBeCalledTimes(1)
    });
    it("should handle clear click", async () => {
        render(ui);
        const checkboxes = screen.queryAllByTestId("category-checkbox")
        expect(checkboxes[0].className).not.toMatch(/Mui-checked/)
        expect(checkboxes[1].className).not.toMatch(/Mui-checked/)
        await userEvent.click(checkboxes[0])
        await userEvent.click(checkboxes[1])
        expect(checkboxes[0].className).toMatch(/Mui-checked/)
        expect(checkboxes[1].className).toMatch(/Mui-checked/)
        await userEvent.click(screen.getByText(/^clear$/i))
        expect(checkboxes[0].className).not.toMatch(/Mui-checked/)
        expect(checkboxes[1].className).not.toMatch(/Mui-checked/)
    });
    it("should handle Clear all click", async () => {
        render(ui);
        const checkboxes = screen.queryAllByTestId("category-checkbox")
        expect(checkboxes[0].className).not.toMatch(/Mui-checked/)
        expect(checkboxes[1].className).not.toMatch(/Mui-checked/)
        await userEvent.click(checkboxes[0])
        await userEvent.click(checkboxes[1])
        expect(checkboxes[0].className).toMatch(/Mui-checked/)
        expect(checkboxes[1].className).toMatch(/Mui-checked/)
        await userEvent.click(screen.getByText(/^clear all$/i))
        expect(checkboxes[0].className).not.toMatch(/Mui-checked/)
        expect(checkboxes[1].className).not.toMatch(/Mui-checked/)
    });
});
