/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />
export interface ICountry {
    id: string;
    name: KnockoutObservable<string>;
    toolTip: KnockoutObservable<string>;
}
export declare class DetailsView {
    constructor();
    title: KnockoutObservable<string>;
    countries: KnockoutObservableArray<ICountry>;
    compTitle: KnockoutComputed<string>;
    clickUpdatTitle(newTitle: string): void;
    activateToolTips(): void;
    activate(): boolean;
    viewAttached(view: any): void;
}
export declare var vm: DetailsView;
export declare var activate: () => boolean;
export declare var attached: (view: any) => void;
