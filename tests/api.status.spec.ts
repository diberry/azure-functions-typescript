import { expect, test } from "@playwright/test";
import * as localSettings from '../local.settings.json';


const API = '/status';

test('should GET status', async ({ request }) => {

  const apiUrl = "http://locahost:7071/api" + API;
  console.log('apiUrl: ' + apiUrl);

  const apiResult = await request.post(apiUrl);
  expect(apiResult.ok()).toBeTruthy();

  const apiResultJson = await apiResult.json();
  expect(apiResultJson.env.APPLICATIONINSIGHTS_CONNECTION_STRING).toEqual(localSettings.Values.APPLICATIONINSIGHTS_CONNECTION_STRING);

});
