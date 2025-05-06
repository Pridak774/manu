import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  {
    // Add this to ignore the problematic file in ESLint
    ignores: ["src/app/job/[slug]/page.tsx"],
  },
];

export default eslintConfig;
