import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has the name and tagline", async ({ page }) => {
    await expect(page).toHaveTitle(
      "FarmSlicer: Slice and run a 3D print farm from the browser.",
    );
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "FarmSlicer™",
    );
  });

  test("has a meta description and social cards", async ({ page }) => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /open-source, self-hosted slicer/,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://farmslicer.com/og.png",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://farmslicer.com/",
    );
  });

  test("links to the source", async ({ page }) => {
    const link = page.getByRole("link", { name: "Source on GitHub" });
    await expect(link).toHaveAttribute(
      "href",
      "https://github.com/cinderblock/FarmSlicer",
    );
  });

  test("lists the features and printers", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 2 })).toHaveCount(9);
    await expect(
      page.getByRole("listitem").filter({ hasText: "Elegoo Centauri Carbon" }),
    ).toBeVisible();
  });

  test("has nothing wider than a phone", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });
});

test.describe("404 Page", () => {
  test("displays not found message", async ({ page }) => {
    await page.goto("/nonexistent-page");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toHaveText("404");
  });

  test("has link back to home", async ({ page }) => {
    await page.goto("/nonexistent-page");
    const link = page.getByRole("link", { name: "Go back home" });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "/");
  });
});
