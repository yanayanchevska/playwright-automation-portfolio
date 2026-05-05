const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator("#userName");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login");

    // більш стабільно
    this.errorMessage = page.locator("#name, #output");
    this.logoutButton = page.locator("#submit");
  }

  async goto() {
    await this.page.goto("https://demoqa.com/login");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectErrorVisible() {
    await expect(this.errorMessage).toBeVisible();

    // додали перевірку тексту
    await expect(this.errorMessage).toContainText(/invalid|incorrect|failed/i);
  }

  async expectLoggedIn() {
    await expect(this.logoutButton).toBeVisible({ timeout: 8000 });
  }
}

module.exports = { LoginPage };