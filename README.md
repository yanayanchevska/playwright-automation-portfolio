# Playwright Automation Portfolio — Yana Yanchevska

QA Engineer with 5+ years of experience in functional, regression, API, and accessibility testing.  
This repository demonstrates my transition into test automation using Playwright and JavaScript.

---

## About

Hands-on experience in manual and automated testing across large-scale systems:

- Stabilized and maintained 200+ automated TCL test cases in production  
- Performed end-to-end API testing and validation  
- Delivered ADA/Accessibility compliance for U.S. regulatory platforms  
- Experience with Jira administration and the full QA lifecycle (STLC)  

Currently focused on building automation expertise with Playwright and JavaScript.

---

## Project Structure

```
playwright-portfolio/
├── tests/
│   ├── ui/               # UI tests — demo environment (demoqa.com)
│   └── api/              # API tests — JSONPlaceholder
├── pages/                # Page Object Model
├── reports/              # HTML test reports
├── .github/
│   └── workflows/        # CI/CD — runs on every push
├── playwright.config.js
└── package.json
```
---

## Test Coverage

### UI Tests — `demoqa.com`

| Test ID | Scenario | Type |
|---------|----------|------|
| TC-001 | Page title validation | Smoke |
| TC-002 | Login form elements visible | Functional |
| TC-003 | Invalid credentials show error message | Negative |
| TC-004 | Empty fields behavior | Boundary |
| TC-005 | Password field masks input | Security/UI |

---

### API Tests — `JSONPlaceholder`

| Test ID | Method | Endpoint | Scenario |
|---------|--------|----------|----------|
| TC-A001 | GET | `/users` | Returns users list, status 200, array validation |
| TC-A002 | GET | `/users/:id` | Single user — required fields present |
| TC-A003 | GET | `/users/9999` | Non-existent user → 404 |

---

## How to Run

```bash
git clone https://github.com/YOUR_USERNAME/playwright-automation-portfolio.git
cd playwright-portfolio

npm install
npx playwright install

npx playwright test
npx playwright show-report
```

---

## Stack

`Playwright` `JavaScript` `Postman` `TCL scripting`

---

## 📬 Contact

- 💼 [LinkedIn](https://www.linkedin.com/in/yana-yanchevska/)
- 📧 y.yanchevska@gmail.com
