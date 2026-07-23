import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
import { LoginBehaviour } from "@behaviour/login.behaviour.js";
import { LoginModel } from "@model/login.model.js";
import { LoginPage } from "@pages/login.page.js";

var login_model: LoginModel;
var login_page: LoginPage;
var login_behaviour: LoginBehaviour;

Given("the user navigates to the login page", async ({ page }) => {
    await page.goto('/client/#/auth/login');
});
When("the user enters email {string} and enters password {string}", async ({ page }, email: string, password: string) => {
    login_model = new LoginModel(email, password)
    login_page = new LoginPage(page)
    login_behaviour = new LoginBehaviour(login_model, login_page)
    await login_behaviour.fillEmailAndPassword()
});
When("the user clicks the sign in button", async ({ }) => { await login_behaviour.clickOnLoginButton(); });

Then("the user should see the homepage", async ({ page }) => {
    await expect(page).toHaveURL(/dashboard/);
});

Then("the result should be {string}", async ({ page }, result: string) => { });