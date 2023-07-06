import dlv from 'dlv';
import tmpl from 'templite';
export class RemixI18n {
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
      const val = dlv(this.dict[lang || this.currentLocale], key, key);
      // eslint-disable-next-line
      if (typeof val === 'function') return val(params);
      if (typeof val === 'string') return tmpl(val, params);
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
