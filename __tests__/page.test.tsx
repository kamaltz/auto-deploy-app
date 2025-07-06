import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  // Test 1: Memastikan semua elemen awal ter-render dengan benar
  it("should render initial profile data and welcome message", () => {
    render(<Home />);

    // Cari teks berdasarkan nama, nim, dan institusi
    expect(screen.getByText("Dena Kamal D.")).toBeInTheDocument();
    expect(screen.getByText("NIM: 2206090")).toBeInTheDocument();
    expect(screen.getByText("Institut Teknologi Garut")).toBeInTheDocument();

    // Cari tombol dengan teks awal
    expect(
      screen.getByRole("button", { name: /Sukai Halaman Ini 👍 \(0\)/i })
    ).toBeInTheDocument();
  });

  // Test 2: Mensimulasikan klik pada tombol dan memeriksa apakah state berubah
  it("should increment likes when the button is clicked", () => {
    render(<Home />);

    // Dapatkan tombolnya
    const likeButton = screen.getByRole("button", {
      name: /Sukai Halaman Ini/i,
    });

    // Klik tombolnya sekali
    fireEvent.click(likeButton);

    // Periksa apakah jumlah suka bertambah menjadi 1
    expect(screen.getByText(/Sukai Halaman Ini 👍 \(1\)/i)).toBeInTheDocument();

    // Klik tombolnya lagi
    fireEvent.click(likeButton);

    // Periksa apakah jumlah suka bertambah menjadi 2
    expect(screen.getByText(/Sukai Halaman Ini 👍 \(2\)/i)).toBeInTheDocument();
  });
});
