import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './';

@Pipe({
    name: 'l',
    pure: false,
})
export class TranslatePipe implements PipeTransform {

    constructor(private translate: TranslateService) { }

    transform(value: string, args: any): any {
        if (!value) return;
        return this.translate.instant(value, args);
    }
}