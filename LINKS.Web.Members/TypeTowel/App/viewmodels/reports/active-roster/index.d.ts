/// <reference path="../../../../Scripts/typings/jquery.dataTables/jquery.dataTables.d.ts" />
/// <reference path="../../../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../../../Scripts/typings/knockout.mapping/knockout.mapping.d.ts" />
export declare class ViewModel {
    title: string;
    modelData: KnockoutObservable<Object>;
    constructor();
    test(): void;
    activate(): boolean;
}
export declare var vm: ViewModel;
export declare var activate: () => boolean;
