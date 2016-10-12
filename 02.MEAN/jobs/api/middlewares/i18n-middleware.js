'use strict';
const HEADER_PROPERT = 'accept-language';
const messages = {
  en: require('../i18n/en.json'),
  pt: require('../i18n/pt.json')
}

module.exports = (req, res, next) => {
  console.log(req.headers[HEADER_PROPERT]);

  console.log(messages);
  // Locales separados por ',' e propriedades do locale separados por ';'
  // pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4

  // req.messages = localeSelecionado;

  req.messages = messages.pt;

  // pt-BR,
  // pt;q=0.8,
  // en-US;q=0.6,
  // en;q=0.4
  next();
};
