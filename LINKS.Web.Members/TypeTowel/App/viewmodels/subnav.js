define(["require", "exports", 'plugins/router'], function (require, exports, m_router) {
    var ViewModel = (function () {
        function ViewModel() {
            this.router = m_router;
        }
        //#region Internal Methods
        ViewModel.prototype.activate = function () {
            return this.boot();
        };
        ViewModel.prototype.boot = function () {
            var childRouter = this.router.createChildRouter().makeRelative({
                moduleId: 'ko',
                fromParent: true
            }).map([{ route: 'simpleList', moduleId: 'simpleList/index', title: 'Simple List', type: 'intro', nav: true }, { route: 'betterList', moduleId: 'betterList/index', title: 'Better List', type: 'intro', nav: true }, { route: 'controlTypes', moduleId: 'controlTypes/index', title: 'Control Types', type: 'intro', nav: true }]).buildNavigationModel();
            return {
                router: childRouter
            };
        };
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;
    exports.vm = new ViewModel();
    exports.activate = function () {
        return exports.vm.activate();
    };
});
//# sourceMappingURL=subnav.js.map