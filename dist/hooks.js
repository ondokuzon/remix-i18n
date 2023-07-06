'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useI18n = void 0;
const react_1 = require('react');
const provider_1 = require('./provider');
function useI18n() {
  const content = (0, react_1.useContext)(provider_1.context);
  if (!content) {
    throw new Error('Unable to get instance of i18n');
  }
  return content.i18n;
}
exports.useI18n = useI18n;
