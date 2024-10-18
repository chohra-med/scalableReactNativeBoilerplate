// tslint:disable-next-line:no-import-side-effect
import 'jasmine';

import {cleanup, device, init} from 'detox';

const adapter = require('detox/runners/jest/adapter');

const config = require('../package.json').detox;

// eslint-disable-next-line no-undef
jest.setTimeout(120000);
// eslint-disable-next-line no-undef
jasmine.getEnv().addReporter(adapter);

// eslint-disable-next-line no-undef
beforeAll(async () => {
  await init(config, {initGlobals: false});

  await device.launchApp({
    permissions: {userTracking: 'YES', notifications: 'YES'}, // do not show transparency and notification alert
    newInstance: true, // installs fresh new app
    languageAndLocale: {language: 'en-US', locale: 'en-US'}, // only supported on iOS
  });
});

// eslint-disable-next-line no-undef
beforeEach(async () => {
  await adapter.beforeEach();
});

// eslint-disable-next-line no-undef
afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
