import { createContext, createElement, useMemo, useState } from 'react';
export const context = createContext(null);
export function I18nProvider({ i18n, children }) {
  const [, setTick] = useState(0);
  const value = useMemo(() => {
    i18n.setOnChange(() => {
      setTick((s) => s + 1);
    });
    return { i18n };
  }, [i18n]);
  // eslint-disable-next-line react/no-children-prop
  return createElement(context.Provider, {
    value: { ...value },
    children
  });
}
