import * as dxpE2E from "@neptune-software/dxp-e2e-toolbox";

// export interface WebappLoginConstructorOptions{
//     dxpVersion?: dxpE2E.common.DxpVersion;
// }
export class WebappLoginOpen extends dxpE2E.common.Page {

    constructor(version: string) {
        super({
            dxpVersion: version || "23.10.7",
            dxpEditionType: dxpE2E.common.DxpEditionType.openEdition
        });
    }

    public get inputUsername() {
        return this.browser.$("#inLoginName-inner");
    }

    public get inputPassword() {
        return this.browser.$("#inLoginPassword-inner");
    }

    public get butLogin() {
        return this.browser.$("#butLogin");
    }

    public async login(username: string, password: string) {
        //@ts-ignore
        await this.inputUsername.setValue(username);
        //@ts-ignore
        await this.inputPassword.setValue(password);

        await this.butLogin.click();
    }

}
