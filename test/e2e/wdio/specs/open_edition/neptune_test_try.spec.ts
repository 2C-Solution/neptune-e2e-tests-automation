import * as dxpE2E from "@neptune-software/dxp-e2e-toolbox";
import * as dotenv from "dotenv";
import {default as _wdi5} from "wdio-ui5-service";
import * as process from "process";
import {WebappLoginOpen} from "../../../../../webappopen.ts";
import {LaunchpadOpenEditionWrap} from "../../../../../launchpadopen.ts";

const wdi5 = new _wdi5();

describe("Neptune Unit Test App", () => {

    before(async () => {
        // load environment variables from .env file
        dotenv.config();
        // setup neptune dxp e2e toolbox
        dxpE2E.common.Environment.getInstance().setup({
            wdi5: wdi5,
            browser: browser,
            dxpEditionType: dxpE2E.common.DxpEditionType.openEdition,
            dxpVersion: process.env.DXP_SAP_EDITION_VERSION || "23.10.7"
        });

    });

    it("Open App on Launchpad", async () => {
        const launchpad = new  LaunchpadOpenEditionWrap({
            launchpadName: "Demo Launchpad",
            dxpVersion: process.env.DXP_SAP_EDITION_VERSION || "23.10.7",
            dxpEditionType: dxpE2E.common.DxpEditionType.openEdition,
            isPwa: false,
        })

        const loginApp = new WebappLoginOpen(process.env.DXP_SAP_EDITION_VERSION || "23.10.7")
        await loginApp.login(process.env.SAP_USER || "", process.env.SAP_PASSWORD || "")

        await browser.pause(3000);

        await launchpad.openTile({
            GUID: "a44cdf8f-44aa-42a1-83ab-2e0dc8ceb7e7",
        })

        await browser.pause(3000);
    });

});


