import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoJobScheduler } from './interfaces/po-job-scheduler.interface';
import { PoJobSchedulerInternal } from './interfaces/po-job-scheduler-internal.interface';
import * as i0 from "@angular/core";
export declare class PoPageJobSchedulerService {
    private http;
    readonly headers: HttpHeaders;
    private endpoint;
    constructor(http: HttpClient);
    configServiceApi(config?: {
        endpoint?: string;
    }): void;
    createResource(resource: any): Observable<any>;
    getHeadProcesses(): Observable<Object>;
    getParametersByProcess(processId: string | number): Observable<any>;
    getProcess(id: string | number): Observable<any>;
    getProcesses(params?: {}): Observable<any>;
    getResource(id: string | number): Observable<any>;
    updateResource(id: any, resource: any): Observable<any>;
    convertToJobScheduler(jobSchedulerInternal: any): PoJobScheduler;
    convertToJobSchedulerInternal(jobScheduler?: any): PoJobSchedulerInternal;
    private convertToPeriodicity;
    private convertToPeriodicityInternal;
    private getCurrentHour;
    private getHourFirstExecution;
    private removeInvalidKeys;
    private replaceHourFirstExecution;
    private returnValidExecutionParameter;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageJobSchedulerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageJobSchedulerService>;
}
