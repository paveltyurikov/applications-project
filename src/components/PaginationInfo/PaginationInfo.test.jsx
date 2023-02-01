import { render, screen } from "@testing-library/react";
import PaginationInfo from "./PaginationInfo";


const ui = <PaginationInfo page={2} count={25} />;

describe("PaginationInfo", () => {
  it("should render correctly", () => {
    render(ui);
    expect(screen.getByTestId("pagination-info")).toHaveTextContent(
      /showing 11-20 - of 25 apps/i
    );
  });
});
