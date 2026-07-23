import type { Locator, Page } from "@playwright/test";

export class LoginPage {
    private readonly emailInput: Locator
    private readonly passwordInput: Locator
    private readonly loginButton: Locator
    private readonly forgotPasswordLink: Locator
    

    constructor(page: Page) {
        this.emailInput = page.locator('input[id="userEmail"]');
        this.passwordInput = page.locator('input[id="userPassword"]');
        this.loginButton = page.locator('input[name="login"]');
        this.forgotPasswordLink = page.locator('a[class="forgot-password-link]');
    }

    getPasswordInput(): Locator { return this.passwordInput }
    getEmailInput(): Locator { return this.emailInput }
    getLoginButton(): Locator { return this.loginButton }
    getForgotPasswordLink(): Locator { return this.forgotPasswordLink }
    
}