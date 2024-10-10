import { Configuration, LogLevel } from '@azure/msal-browser'

const azureActiveDirectoryAppClientId: string = 'a62f9e79-cd86-4429-8cc0-5031da6341bf' //ENV_AZURE_CLIENT_ID
const tenantId: string = '0134a0a5-e47c-4a52-bb15-b8dbb1b07eef' //ENV_AZURE_TENANT_ID
const redirectUri: string = 'http://localhost:3000' //ENV_AZURE_REDIRECT_URI

export const MSAL_CONFIG_PARENT_PORTAL: Configuration = {
  auth: {
    clientId: azureActiveDirectoryAppClientId,
    authority: `https://teampbsb2c.b2clogin.com/teampbsb2c.onmicrosoft.com/B2C_1_react_sign_in`, // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: redirectUri,
    postLogoutRedirectUri: redirectUri + '/logout',
    knownAuthorities: ['teampbsb2c.b2clogin.com']
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            //console.info(message);
            return
          case LogLevel.Verbose:
            //console.debug(message);
            return
          case LogLevel.Warning:
            //console.warn(message);
            return
        }
      }
    }
  }
}

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ['https://teampbsb2c.onmicrosoft.com/react-b2c/B2C_1_react_sign_in']
}

// Add here the endpoints for MS Graph API services you would like to use.
export const apiConfig = {
  scopes: [
    'https://teampbsb2c.onmicrosoft.com/react-b2c/User.Read',
    'https://teampbsb2c.onmicrosoft.com/react-b2c/User.Write'
  ],
  uri: 'https://teampbsb2c.onmicrosoft.com/react-b2c'
}
