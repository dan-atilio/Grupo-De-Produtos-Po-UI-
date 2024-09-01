import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoUploadFile } from './po-upload-file';
import { Observable, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PoUploadBaseService {
    private http;
    formField: string;
    requests: Array<any>;
    constructor(http: HttpClient);
    /**
     * Método responsável por enviar os arquivos ao servidor, conforme o parâmetro URL.
     *
     * @param url URL da requisição a ser efetuada.
     * @param files Arquivos a serem enviados.
     * @param tOnUpload Função a ser executada quando o arquivo for enviado ao servidor.
     * @param uploadCallback Função que será executada enquanto os arquivos estiverem sendo enviados.
     * @param successCallback Função a ser executada quando a requisição for efetuada com sucesso.
     * @param errorCallback Função a ser executada quando a requisição foi efetuada com sucesso.
     */
    upload(url: string, files: Array<PoUploadFile>, headers: {
        [name: string]: string | Array<string>;
    }, tOnUpload: EventEmitter<any>, uploadCallback: (file: PoUploadFile, percent: number) => void, successCallback: (file: PoUploadFile, event: any) => void, errorCallback: (file: PoUploadFile, event: any) => void): void;
    sendFile(url: string, file: PoUploadFile, headers: {
        [name: string]: string | Array<string>;
    }, formData: FormData, uploadCallback: (file: PoUploadFile, percent: number) => void, successCallback: (file: PoUploadFile, event: any) => void, errorCallback: (file: PoUploadFile, event: any) => void): void;
    getRequest(url: string, headers: {
        [name: string]: string | Array<string>;
    }, formData: FormData): Observable<any>;
    stopRequestByFile(file: any, callback: () => void): void;
    removeRequest(requestObj: any): void;
    addRequest(file: PoUploadFile, request: Subscription): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoUploadBaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoUploadBaseService>;
}
