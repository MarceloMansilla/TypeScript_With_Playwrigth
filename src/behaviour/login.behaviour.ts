import { LoginModel } from '@model/login.model.js'
import { LoginPage } from "@pages/login.page.js";

export class LoginBehaviour {
    private model: LoginModel
    private pageLogin: LoginPage

    constructor(model: LoginModel, page: LoginPage) {
        this.model = model;
        this.pageLogin = page;
    }

    async fillEmailAndPassword() {
        await this.pageLogin.getEmailInput().fill(this.model.getEmail())
        await this.pageLogin.getPasswordInput().fill(this.model.getPassword())
    }

    async clickOnLoginButton() { await this.pageLogin.getLoginButton().click() }
}