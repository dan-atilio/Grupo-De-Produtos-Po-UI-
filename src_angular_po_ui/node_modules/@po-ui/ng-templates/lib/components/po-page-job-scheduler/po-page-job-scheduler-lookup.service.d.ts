import { Observable } from 'rxjs';
import { PoLookupFilter } from '@po-ui/ng-components';
import { PoPageJobSchedulerService } from './po-page-job-scheduler.service';
import * as i0 from "@angular/core";
export declare class PoPageJobSchedulerLookupService implements PoLookupFilter {
    private poPageJobSchedulerService;
    constructor(poPageJobSchedulerService: PoPageJobSchedulerService);
    getFilteredItems({ filter, page, pageSize }: {
        filter: any;
        page: any;
        pageSize: any;
    }): Observable<any>;
    getObjectByValue(processId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageJobSchedulerLookupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageJobSchedulerLookupService>;
}
