import { OpaqueToken } from '@angular/core';

import { LANG_EN_NAME, LANG_EN_TRANS } from './language-en';
import { LANG_RU_NAME, LANG_RU_TRANS } from './language-ru';
import { LANG_BY_NAME, LANG_BY_TRANS } from './language-by';

// translation token
export const Translations = new OpaqueToken('translations');

// all translations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_RU_NAME]: LANG_RU_TRANS,
    [LANG_BY_NAME]: LANG_BY_TRANS,
};

// providers
export const TranslateProviders = [
    { provide: Translations, useValue: dictionary },
];