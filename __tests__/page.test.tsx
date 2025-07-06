import { render } from "@testing-library/react";
import Home from "../app/page";

// Mock GSAP
jest.mock("gsap", () => ({
  from: jest.fn(),
}));

jest.mock("@gsap/react", () => ({
  useGSAP: jest.fn(),
}));

describe("Home Page", () => {
  it("renders without crashing", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
