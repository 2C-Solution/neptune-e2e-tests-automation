import * as dxpE2E from "@neptune-software/dxp-e2e-toolbox";

export class LaunchpadOpenEditionWrap extends dxpE2E.common.Launchpad {

    constructor(options: any) {
        super(options);
    }

    async getTileData(options: dxpE2E.common.GetTileDataOptions) {
        let getTileDataScript: string;
        if (options.GUID) {
            getTileDataScript = `return ModelData.FindFirst(sap.ui.getCore().byId("AppCacheTiles"), "id", '${options.GUID}');`;
        }
        else if (options.NAME) {
            getTileDataScript = `return ModelData.FindFirst(sap.ui.getCore().byId("AppCacheTiles"), "name", '${options.NAME}');`;
        }
        else {
            getTileDataScript = `return ModelData.FindFirst(sap.ui.getCore().byId("AppCacheTiles"), "actionApplication", '${options.APPLID}');`;
        }

        let tileData = await this.browser.executeScript(getTileDataScript, []);
        if (tileData && tileData.id) {
            return tileData;
        }
        else {
            throw new Error(`Couldn't fetch Tile Data for ${JSON.stringify(options)}`);
        }
    }
}
