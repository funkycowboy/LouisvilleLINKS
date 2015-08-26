define(["require", "exports"], function (require, exports) {
    //import ko = require('knockout');
    var ViewModel = (function () {
        function ViewModel() {
            this.title = 'Active Rosters';
            this.modelData = ko.observable();
        }
        ViewModel.prototype.test = function () {
            var self = this;
            var url = 'api/Members/5';
            $.getJSON(url, function (data) {
                self.modelData = ko.mapping.fromJS(data);
            });
        };
        ViewModel.prototype.activate = function () {
            var self = this;
            var url = 'api/Members/3';
            $.getJSON(url, function (data) {
                self.modelData = ko.mapping.fromJS(data);
            });
            $(function () {
                var table = null;
                //m_logger.logger.log('We are at home now', null, 'home', true);        
                setTimeout(function () {
                    table = $("#example").DataTable({
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
        };
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;
    exports.vm = new ViewModel();
    //The Durandal plugin-interface variables
    exports.activate = function () {
        return exports.vm.activate();
    };
});
//# sourceMappingURL=index.js.map