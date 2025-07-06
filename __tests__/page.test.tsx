import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Mock GSAP untuk testing
jest.mock("gsap", () => ({
  from: jest.fn(),
}));

jest.mock("@gsap/react", () => ({
  useGSAP: jest.fn((callback) => callback()),
}));

describe("Home Page", () => {
  it("renders main content correctly", () => {
    render(<Home />);

    // Check if main heading exists
    expect(screen.getByText("Dena Kamal D.")).toBeInTheDocument();

    // Check if badge exists
    expect(screen.getByText("Full-Stack Developer & AI Prompter Expert")).toBeInTheDocument();

    // Check if student info exists
    expect(screen.getByText(/2206090.*Institut Teknologi Garut/)).toBeInTheDocument();

    // Check if description exists
    expect(screen.getByText(/Mahasiswa proaktif/)).toBeInTheDocument();

    // Check if buttons exist
    expect(screen.getByText("Kontak Email")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });
});
