import { PoUploadStatus } from './po-upload-status.enum';
export declare class PoUploadFile {
    name: string;
    rawFile: File;
    status?: PoUploadStatus;
    uid: string;
    extension: string;
    size: number;
    displayName?: string;
    percent?: number;
    constructor(file: any);
    private getExtension;
    private generateUUID;
    private getFileSize;
}
