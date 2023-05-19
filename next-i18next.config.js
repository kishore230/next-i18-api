const I18nextChainedBackend = require("i18next-chained-backend/dist/cjs/i18nextChainedBackend");
const I18NextHttpBackend = require("i18next-http-backend/cjs");
const i18n = require("i18next");
/*const abc = i18n.use(I18NextHttpBackend).init({
  debug:true,
  fallbackLng:'en',
  ns:['translation'],
  defaultLocale: "en",
  locales: ["en"],
  backend: {
    loadPath: 'http://localhost:3000/api/{{ns}}/{{lng}}',
  },
})
abc.defaultLocale = "en";
abc.locales= ["en"];*/

module.exports = {
  debug: true,
  ns:['translation'],
  lng: "en",
  i18n: {defaultLocale:"en",locales:["en"]},
  fallbaclLng: "en",
  serializeConfig: false,
  use: [I18nextChainedBackend],
  backend: {
    backends: [I18NextHttpBackend],
    backendOptions: [
      {
        /*loadPath:
          "http://2043425.wetcat.web.hosting-test.net/{{lng}}/{{ns}}.json",*/
        loadPath: 'http://localhost:3000/api/{{ns}}/{{lng}}',
        crossDomain: true,
        requestOptions: {
          mode: "no-cors",
          cache: "default"
        }
      }
    ]
  }
};
