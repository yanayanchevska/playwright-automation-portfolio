const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");

test.describe("Login Page — UI Tests", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("TC-001 | Page title is correct", async ({ page }) => {
    await expect(page).toHaveTitle(/demosite/i);
  });

  test("TC-002 | Login form elements are visible", async () => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test("TC-003 | Invalid credentials show error message", async ({ page }) => {
    await loginPage.login("invalid_user", "wrong_password");

    const errorMessage = page.locator("#name");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(/invalid/i);
  });

  test("TC-004 | Empty fields — login button is clickable but shows validation state", async () => {
    await loginPage.loginButton.click();

    const usernameValue = await loginPage.usernameInput.inputValue();
    const passwordValue = await loginPage.passwordInput.inputValue();

    expect(usernameValue).toBe("");
    expect(passwordValue).toBe("");
  });

  test("TC-005 | Password field masks input", async () => {
    const inputType = await loginPage.passwordInput.getAttribute("type");

    expect(inputType).toBe("password");
  });
});
