import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Deskripsikan grup tes untuk halaman utama yang sudah didesain ulang
describe("Redesigned Home Page", () => {
  // Tes ini akan memeriksa apakah semua elemen kunci dari desain baru berhasil di-render
  it("should render the new components and text correctly", () => {
    // Render komponen Home
    render(<Home />);

    // 1. Periksa apakah nama utama ada di dalam sebuah heading
    // Ini lebih baik daripada getByText karena lebih spesifik secara semantik
    const mainHeading = screen.getByRole("heading", { name: /Dena Kamal D./i });
    expect(mainHeading).toBeInTheDocument();

    // 2. Periksa apakah badge deskripsi ada
    const badgeElement = screen.getByText(
      /Full-Stack Developer & AI Enthusiast/i
    );
    expect(badgeElement).toBeInTheDocument();

    // 3. Periksa apakah informasi NIM dan institusi ada
    const institutionText = screen.getByText(
      /2206090 - Institut Teknologi Garut/i
    );
    expect(institutionText).toBeInTheDocument();

    // 4. Periksa apakah tombol-tombol baru dari Shadcn/ui sudah ada
    // Kita tidak lagi mencari tombol 'Sukai', tetapi tombol aksi yang relevan
    const emailButton = screen.getByRole("button", { name: /kontak email/i });
    expect(emailButton).toBeInTheDocument();

    const githubButton = screen.getByRole("button", { name: /github/i });
    expect(githubButton).toBeInTheDocument();

    const linkedinButton = screen.getByRole("button", { name: /linkedin/i });
    expect(linkedinButton).toBeInTheDocument();
  });
});
