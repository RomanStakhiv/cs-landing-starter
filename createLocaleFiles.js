const fs = require('fs');
const dir = './public/locales/es';

fetch('https://dev-be.creativesociety.com/api/v1/translations/langs').then(
  (res) => {
    res.json().then((data) => {
      console.log(data.results);
      fs.writeFileSync(
        './next-i18next.config.js',
        `module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [${data.results.map(({ code }) => `'${code}'`)}],
  },
};`,
      );
    });
  },
);

fetch('https://dev-be.creativesociety.com/api/v1/translations?lang=ru').then(
  (res) => {
    res.json().then((data) => {
      fs.rm(dir, { recursive: true, force: true }, () => {
        fs.mkdirSync(dir);
        fs.writeFileSync(`${dir}/common.json`, JSON.stringify(data));
      });
    });
  },
);
