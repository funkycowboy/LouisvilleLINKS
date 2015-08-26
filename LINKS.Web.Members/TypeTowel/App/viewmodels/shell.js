define(["require", "exports", 'plugins/router', 'services/logger', 'durandal/system'], function (require, exports, m_router, m_logger, m_system) {
    var Shell = (function () {
        function Shell() {
            this.router = m_router;
        }
        //#region Internal Methods
        Shell.prototype.activate = function () {
            return this.boot();
        };
        Shell.prototype.boot = function () {
            //this.log('SPA Loaded!', null, true);
            m_router.on('router:route:not-found', function (fragment) {
                this.logError('No Route Found', fragment, true);
            });
            var routes = [
                { route: '', moduleId: 'home', title: 'Home', nav: 1 },
                {
                    route: 'admin',
                    moduleRootId: 'admin',
                    moduleId: 'admin/index',
                    title: 'Administration',
                    nav: 2,
                    childRoutes: [
                        { route: 'calendar', moduleId: 'calendar/index', title: 'Calendar', nav: true },
                        { route: 'documents', moduleId: 'documents/index', title: 'Documents', nav: true },
                        { route: 'hours-bank', moduleId: 'hours-bank/index', title: 'Membership Hours Bank', nav: true },
                        { route: 'members', moduleId: 'members/index', title: 'Members', nav: true },
                        { route: 'service-hours', moduleId: 'service-hours/index', title: 'Service Hours', nav: true }
                    ]
                },
                {
                    route: 'reports',
                    moduleRootId: 'reports',
                    moduleId: 'reports/index',
                    title: 'Reports',
                    nav: 3,
                    childRoutes: [
                        { route: 'active-roster', moduleId: 'active-roster/index', title: 'Active Roster', nav: true },
                        { route: 'alumni-roster', moduleId: 'alumni-roster/index', title: 'Alumni Roster', nav: true },
                        { route: 'birthday-list', moduleId: 'birthday-list/index', title: 'Birthday List', nav: true },
                        { route: 'events', moduleId: 'events/index', title: 'Event List', nav: true },
                        { route: 'service-hours', moduleId: 'service-hours/index', title: 'Service Hours', nav: true },
                        { route: 'service-hours-by-committee', moduleId: 'service-hours-by-committee/index', title: 'Service Hours By Committee List', nav: true },
                        { route: 'telephone-tree', moduleId: 'telephone-tree/index', title: 'Telephone Tree', nav: true }
                    ]
                }
            ];
            $.each(routes, function (index, route) {
                if (route.childRoutes === undefined)
                    return;
                $.each(route.childRoutes, function (index, childRoute) {
                    childRoute.route = route.route + '/' + childRoute.route;
                    childRoute.moduleId = route.moduleRootId + '/' + childRoute.moduleId;
                    childRoute.title = childRoute.title;
                    //childRoute.hash = route.hash + '/' + childRoute.hash;
                    childRoute.parent = route.moduleRootId;
                });
                routes = routes.concat(route.childRoutes);
            });
            return m_router.makeRelative({ moduleId: 'viewmodels' }).map(routes).buildNavigationModel().activate(); // Activate the router
        };
        Shell.prototype.log = function (msg, data, showToast) {
            m_logger.logger.log(msg, data, m_system.getModuleId(this), showToast);
        };
        Shell.prototype.logError = function (msg, data, showToast) {
            m_logger.logger.logError(msg, data, m_system.getModuleId(this), showToast);
        };
        return Shell;
    })();
    return Shell;
});
//#endregion 
//# sourceMappingURL=shell.js.map