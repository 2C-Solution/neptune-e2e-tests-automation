# dxp-e2e-template

## Install

Within this repository we use the package `@neptune-software/dxp-e2e-toolbox` which is hosted as a npm module in the  github package repository. Eventhough this package and the correspoding repository is marked as public it, installing it requires you to pass your Personal Access Token from Github to be authenticated at the github packages repository.
So you will need to use or create a Personal Access Token (PAT) in your github account that includes at least the scope `read:package`.

To install the necessary packages within package.json including the dxp-e2e-toolbox you can simply run the following command (exchange *yourPersonalAccessToken* with your actual Personal Access Token):
```shell
npm run install --PACKAGES_AUTH_TOKEN=yourPersonalAccessToken
```
This will execute the correspoding install script in package.json that also contains the `@neptune-software/dxp-e2e-toolbox` package hosted on github.