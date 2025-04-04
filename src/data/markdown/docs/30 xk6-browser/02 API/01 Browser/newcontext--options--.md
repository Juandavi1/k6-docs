---
title: 'newContext([options])'
excerpt: 'xk6-browser: Browser.newContext method'
---

Creates and returns a new [BrowserContext](/javascript-api/xk6-browser/api/browsercontext/).

<TableWithNestedRows>

| Parameter                                   | Type    | Default                          | Description                                                                                                                                                                                                                                       |
|---------------------------------------------|---------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| options                                     | object  | `null`                           |                                                                                                                                                                                                                                  |
| options.bypassCSP                           | boolean | `false`                          | Whether to bypass a page's Content-Security-Policy.                                                                                                                                                                                               |
| options.colorScheme                         | string  | `'light'`                        | Whether to display a page in dark or light mode by emulating the 'prefers-colors-scheme' media feature. It can be one of `'light'`, `'dark'`, `'no-preference'`.                                                                                  |
| options.deviceScaleFactor <BWIPT id="433"/> | number  | `1`                              | Sets the resolution ratio in physical pixels to the resolution in CSS pixels i.e. if set higher than `1`, then images will look sharper on high pixel density screens. See an [example](#devicescalefactor-example) below.                        |
| options.extraHTTPHeaders                    | object  | `null`                           | Contains additional HTTP headers to be sent with every request, where the keys are HTTP headers and values are HTTP header values.                                                                                                                |
| options.geolocation <BWIPT id="435"/>       | object  | `null`                           | Sets the user's geographical location.                                                                                                                                                                                                            |
| options.geolocation.latitude                | number  | `0`                              | Latitude should be between `-90` and `90`.                                                                                                                                                                                                        |
| options.geolocation.longitude               | number  | `0`                              | Longitude should be between `-180` and `180`.                                                                                                                                                                                                     |
| options.geolocation.accuracy                | number  | `0`                              | Accuracy should only be a non-negative number. Defaults to `0`.                                                                                                                                                                                   |
| options.hasTouch <BWIPT id="436"/>          | boolean | `false`                          | Whether to simulate a device with touch events.                                                                                                                                                                                                   |
| options.httpCredentials                     | object  | `null`                           | Sets the credentials for HTTP authentication using Basic Auth.                                                                                                                                                                                    |
| options.httpCredentials.username            | string  | `''`                             | Username to pass to the web browser for Basic HTTP Authentication.                                                                                                                                                                                |
| options.httpCredentials.password            | string  | `''`                             | Password to pass to the web browser for Basic HTTP Authentication.                                                                                                                                                                                |
| options.ignoreHTTPSErrors                   | boolean | `false`                          | Whether to ignore HTTPS errors that may be caused by invalid certificates.                                                                                                                                                                        |
| options.isMobile                            | boolean | `false`                          | Whether to simulate a mobile device.                                                                                                                                                                                                              |
| options.javaScriptEnabled                   | boolean | `true`                           | Whether to activate JavaScript support for the context.                                                                                                                                                                                           |
| options.locale                              | string  | system                           | Specifies the user's locale, such as `'en-US'`, `'tr-TR'`, etc.                                                                                                                                                                                   |
| options.offline                             | boolean | `false`                          | Whether to emulate an offline network.                                                                                                                                                                                                            |
| options.permissions                         | Array   | `null`                           | Permissions to grant for the context's pages. See [browserContext.grantPermissions()](/javascript-api/xk6-browser/api/browsercontext#browsercontext-grantpermissions-permissions-options) for the options.                                            |
| options.reducedMotion                       | string  | `'no-preference'`                | Minimizes the amount of motion by emulating the 'prefers-reduced-motion' media feature. It can be one of `'reduce'` and `'no-preference'`. See [page.emulateMedia()](/javascript-api/xk6-browser/api/page#page-emulatemedia-options) for the options. |
| options.screen                              | object  | `{'width': 1280, 'height': 720}` | Sets a window screen size for all pages in the context. It can only be used when the viewport is set.                                                                                                                                             |
| options.screen.width                        | number  | `1280`                           | Page width in pixels.                                                                                                                                                                                                                             |
| options.screen.height                       | number  | `720`                            | Page height in pixels.                                                                                                                                                                                                                            |
| options.timezoneID                          | string  | system                           | Changes the context's timezone. See [ICU's metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs.                 |
| options.userAgent                           | string  | browser                          | Specifies the user agent to use in the context.                                                                                                                                                                                                   |
| options.viewport                            | object  | `{'width': 1280, 'height': 720}` | Sets a viewport size for all pages in the context. `null` disables the default viewport.                                                                                                                                                          |
| options.viewport.width                      | number  | `1280`                           | Page width in pixels.                                                                                                                                                                                                                             |
| options.viewport.height                     | number  | `720`                            | Page height in pixels.                                                                                                                                                                                                                            |

</TableWithNestedRows>

### Returns

| Type   | Description                                                          |
| ------ | -------------------------------------------------------------------- |
| object | [BrowserContext](/javascript-api/xk6-browser/api/browsercontext/) object |


### deviceScaleFactor example

```javascript
import { chromium } from 'k6/x/browser';

export default function () {
  const browser = chromium.launch({
    headless: false,
  });

  const context = browser.newContext({
    viewport: {
      width: 375,
      height: 812,
    },
    deviceScaleFactor: 3,
  });
  const page = context.newPage();

  page
    .goto('https://test.k6.io/', {
      waitUntil: 'networkidle',
    })
    .finally(() => {
      page.close();
      browser.close();
    });
}
```
