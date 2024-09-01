import { PoJobSchedulerInternal } from './interfaces/po-job-scheduler-internal.interface';
export declare class PoPageJobSchedulerInternal implements PoJobSchedulerInternal {
    periodicity: string;
    firstExecution: Date;
    firstExecutionHour: string;
    recurrent: boolean;
    frequency: {};
    private getCurrentHour;
}
