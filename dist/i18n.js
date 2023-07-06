'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.RemixI18n = void 0;
const dlv_1 = __importDefault(require('dlv'));
const templite_1 = __importDefault(require('templite'));
class RemixI18n {
  constructor(options) {
    this.dict = {};
    this.locale = (lang) => {
      var _a;
      if (lang !== undefined && this.currentLocale !== lang) {
        this.currentLocale = lang;
        (_a = this.onChangeLanguage) === null || _a === void 0
          ? void 0
          : _a.call(this, lang);
      }
      return this.currentLocale;
    };
    this.set = (lang, dict) => {
      this.dict[lang] = Object.assign(this.dict[lang] || {}, dict);
    };
    this.t = (key, params, lang) => {
      // eslint-disable-next-line
      const val = (0, dlv_1.default)(
        this.dict[lang || this.currentLocale],
        key,
        key
      );
      // eslint-disable-next-line
      if (typeof val === 'function') return val(params);
      if (typeof val === 'string') return (0, templite_1.default)(val, params);
      return val;
    };
    this.setOnChange = (fn) => {
      this.onChangeLanguage = fn;
    };
    this.currentLocale = options.fallbackLng;
    this.supportedLanguages = options.supportedLanguages;
    this.fallbackLng = options.fallbackLng;
  }
}
exports.RemixI18n = RemixI18n;
