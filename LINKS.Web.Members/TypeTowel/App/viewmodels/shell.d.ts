declare class Shell {
    router: DurandalRootRouter;
    activate(): JQueryPromise<any>;
    boot(): JQueryPromise<any>;
    log(msg: any, data: any, showToast: any): void;
    logError(msg: any, data: any, showToast: any): void;
}
export = Shell;
