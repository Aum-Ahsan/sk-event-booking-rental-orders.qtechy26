import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const requiredFiles = [
  "src/app/App.tsx",
  "src/app/AppRouter.tsx",
  "src/app/AppProviders.tsx",
  "src/application/pages/home/HomePage.tsx",
  "src/components/home/HomeExperience.tsx",
  "src/redux/api/axiosInstance.ts",
  "src/redux/features/basket/basketSlice.ts",
  "src/redux/features/catalogue/catalogueSlice.ts",
  "src/redux/features/enquiry/enquirySlice.ts",
  "src/redux/store/index.ts",
  "server/src/routes/productRoutes.js",
  "server/src/controllers/productController.js",
  "server/src/services/productService.js",
  "server/src/models/Product.js",
];

test("keeps the requested page, component, Redux and backend boundaries", async () => {
  await Promise.all(requiredFiles.map((file) => access(file)));
});

test("keeps the framework entry point focused on application composition", async () => {
  const entry = await readFile("app/page.tsx", "utf8");
  assert.match(entry, /src\/app\/App/);
  assert.ok(entry.trim().split("\n").length <= 3);
});
