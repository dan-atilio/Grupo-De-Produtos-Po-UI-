import * as i0 from "@angular/core";
export declare class PoCalendarLangService {
    private language;
    private months;
    private shortWeekDays;
    private monthLabel;
    private yearLabel;
    private todayLabel;
    getMonth(month: number): any;
    getMonthLabel(): any;
    getMonthsArray(): any[];
    getWeekDays(day: number): any;
    getWeekDaysArray(): any[];
    getYearLabel(): any;
    getTodayLabel(): any;
    setLanguage(language: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCalendarLangService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoCalendarLangService>;
}
