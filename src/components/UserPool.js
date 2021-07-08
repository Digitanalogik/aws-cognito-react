import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "eu-north-1_dT31tJ51H",
  ClientId: "2noeirh7fqi3g5v8fml6gu3u3u"
}

export default new CognitoUserPool(poolData);
