const { test, expect } = require("@playwright/test");

const BASE_URL = "https://jsonplaceholder.typicode.com";

test.describe("API — Users Endpoint", () => {
  test("TC-A001 | GET /users — returns list with status 200", async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/users`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test("TC-A002 | GET /users/:id — single user has required fields", async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/users/1`);

    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("email");
    expect(typeof user.email).toBe("string");
  });

  test("TC-A003 | GET /users/9999 — non-existent user returns 404", async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/users/9999`);

    expect(response.status()).toBe(404);
  });
});
