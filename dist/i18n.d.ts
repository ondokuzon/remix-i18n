type Fn = (...args: any[]) => string;
export interface I18nDict {
  [key: string]: string | number | Fn | I18nDict;
}
export interface RemixI18nOptions {
  /**
   * Define the list of supported languages, this is used to determine if one of
   * the languages requested by the user is supported by the application.
   * This should be be same as the supportedLngs in the i18next options.
   */
  supportedLanguages: string[];
  /**
   * Define the fallback language that it's going to be used in the case user
   * expected language is not supported.
   * This should be be same as the fallbackLng in the i18next options.
   */
  fallbackLng: string;
}
export declare class RemixI18n {
  private currentLocale;
  fallbackLng: string;
  supportedLanguages: string[];
  private dict;
  constructor(options: RemixI18nOptions);
  locale: (lang?: string) => string;
  set: (lang: string, dict: I18nDict) => void;
  t: (key: string, params?: any, lang?: string) => string;
  private onChangeLanguage?;
  setOnChange: (fn: (locale: string) => void) => void;
}
export {};
