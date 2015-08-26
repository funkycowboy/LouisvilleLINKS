define(["require", "exports"], function (require, exports) {
    var ViewModel = (function () {
        function ViewModel() {
            this.title = 'Service Hours By Committee';
        }
        ViewModel.prototype.activate = function () {
            //m_logger.logger.log('We are at home now', null, 'home', true);
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