import { ReactNode } from 'react';
import { RemixI18n } from './i18n';
export declare const context: import('react').Context<{
  i18n: RemixI18n;
} | null>;
interface I18nProviderProps {
  children: ReactNode;
  i18n: RemixI18n;
}
export declare function I18nProvider({
  i18n,
  children
}: I18nProviderProps): import('react').FunctionComponentElement<
  import('react').ProviderProps<{
    i18n: RemixI18n;
  } | null>
>;
export {};
