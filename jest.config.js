const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Sediakan path ke aplikasi Next.js Anda untuk memuat next.config.js dan .env
  dir: "./",
});

// Tambahkan kustomisasi konfigurasi Jest di sini
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Handle module aliases (jika Anda menggunakannya)
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
};

// createJestConfig diekspor seperti ini untuk memastikan next/jest dapat memuat konfigurasi Next.js
module.exports = createJestConfig(customJestConfig);
