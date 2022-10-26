const fs = require('fs');
const i18nextConfig = require('./next-i18next.config');
const dir = './public/locales';

const createLocaleFiles = () => {
  i18nextConfig.i18n.locales.map((lng) => {
    fetch(
      `https://dev-be.creativesociety.com/api/v1/translations?lang=${lng}`,
    ).then((res) => {
      res
        .json()
        .then((data) => {
          fs.rm(`${dir}/${lng}`, { recursive: true, force: true }, () => {
            fs.mkdirSync(`${dir}/${lng}`);
            fs.writeFileSync(
              `${dir}/${lng}/common.json`,
              JSON.stringify(data.results?.common ? data.results.common : {}),
            );
          });
          console.log(' ✅ Successfully created locale ====>', lng);
        })
        .catch((err) => {
          console.log('❌', err.response.data);
        });
    });
  });
};

const createTranslationConfig = () => {
  fetch('https://dev-be.creativesociety.com/api/v1/translations/langs')
    .then((res) => {
      res
        .json()
        .then((data) => {
          fs.writeFileSync(
            './next-i18next.config.js',
            `module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [${data.results.map(({ code }) => `'${code}'`)}],
    fullLocalesData: ${JSON.stringify(data.results)},
  },
};`,
          );

          console.log(' ✅ Successfully created next-i18next.config.js');
          createLocaleFiles();
        })
        .catch((err) => {
          console.error(
            '❌ Problem with creation next-i18next.config.js file',
            err,
          );
        });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

createTranslationConfig();
