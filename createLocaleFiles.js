const fs = require('fs');
const dir = './public/locales/es';

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
  },
};`,
        );

        console.log(' ✅ Successfully created next-i18next.config.js');
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

fetch('https://dev-be.creativesociety.com/api/v1/translations?lang=ru').then(
  (res) => {
    res
      .json()
      .then((data) => {
        fs.rm(dir, { recursive: true, force: true }, () => {
          fs.mkdirSync(dir);
          fs.writeFileSync(`${dir}/common.json`, JSON.stringify(data));
        });
        console.log(' ✅ Successfully created locales');
      })
      .catch((err) => {
        console.log('❌', err.response.data);
      });
  },
);
