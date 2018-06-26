import {Injectable, Inject} from '@angular/core';

import { Translations } from './';

@Injectable()
export class TranslateService {
    private currentLanguage: string;

    public get language() {
        return this.currentLanguage;
    }

    constructor(@Inject(Translations) private translations: any) {
        this.currentLanguage = 'ru';
    }

    public use(lang: string): void {
        this.currentLanguage = lang;
    }

    private translate(key: string, args: any): string {
        let translation = key;

        if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
            return this.translations[this.currentLanguage][key];
        }

        return translation;
    }

    public instant(key: string, args: any) {
        return this.translate(key, args); 
    }
}