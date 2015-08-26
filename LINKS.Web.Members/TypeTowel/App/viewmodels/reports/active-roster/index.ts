/// <reference path="../../../../Scripts/typings/jquery.dataTables/jquery.dataTables.d.ts" />
/// <reference path="../../../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../../../Scripts/typings/knockout.mapping/knockout.mapping.d.ts" />
import m_logger = require('services/logger');
//import ko = require('knockout');

export class ViewModel {
    public title: string = 'Active Rosters'; 
    public modelData: KnockoutObservable<Object>; 
    constructor() {
        this.modelData = ko.observable();
    }
    
    public test() {
        var self = this; 
        var url = 'api/Members/5';
        $.getJSON(url,
            function (data) {
                self.modelData = ko.mapping.fromJS(data);
            }
        );
    }
    public activate() {
        var self = this;              

        var url = 'api/Members/3';
        $.getJSON(url,
            function (data) {
                self.modelData = ko.mapping.fromJS(data);
            }
        );

        $(function () { 
            var table = null;

            //m_logger.logger.log('We are at home now', null, 'home', true);        

            setTimeout(function () { 
                   
                    table = $("#example").DataTable(
                    {
                        "ajax": {
                            "url": 'api/Members',
                            "dataSrc": "Data",
                            "processing": true
                        },
                        //data: data,
                        //"processing": true,
                        //"serverSide": true,
                        "columns": [
                            {
                                "className": 'some-css-class',
                                "orderable": false,
                                "data": null,
                                "defaultContent": "<button class='button'><span>Edit</span></button>"
                            },
                            { "data": "UserId" },
                            { "data": "MemberId" },
                            { "data": "FirstName" },
                            { "data": "LastName" },
                        ]                          
                    });
                        
            }, 100);              
                
            //setTimeout(function () {
            //    $("#example tbody").on('click', 'tr', function () {
                    
            //        var data = table.row(this).data();
            //        $("#MemberDetailsModal").modal("show");
            //        alert(data.UserId);
                    
            //            $.getJSON('api/Members/' + data.UserId,
            //                function (data) {
            //                    self.modelData = ko.mapping.fromJS(data);
            //                }
            //            );
                   
            //    });
            //}, 100);
        });            
        return true;
    }
}
export var vm = new ViewModel();

//The Durandal plugin-interface variables
export var activate = function () {
    return vm.activate();
};