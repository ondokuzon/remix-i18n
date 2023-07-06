'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.I18nProvider = exports.context = void 0;
const react_1 = require('react');
exports.context = (0, react_1.createContext)(null);
function I18nProvider({ i18n, children }) {
  const [, setTick] = (0, react_1.useState)(0);
  const value = (0, react_1.useMemo)(() => {
    i18n.setOnChange(() => {
      setTick((s) => s + 1);
    });
    return { i18n };
  }, [i18n]);
  // eslint-disable-next-line react/no-children-prop
  return (0, react_1.createElement)(exports.context.Provider, {
    value: { ...value },
    children
  });
}
exports.I18nProvider = I18nProvider;
