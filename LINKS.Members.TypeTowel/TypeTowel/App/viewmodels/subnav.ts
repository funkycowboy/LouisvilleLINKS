import m_router = require('plugins/router');
import m_logger = require('services/logger');
import m_system = require('durandal/system');

export class ViewModel {

    router = m_router;

    //#region Internal Methods
    public activate() {
        return this.boot();
    }
    public boot() {
        var childRouter = this.router.createChildRouter()
            .makeRelative({
            moduleId: 'ko',
            fromParent: true
        }).map([{ route: 'simpleList', moduleId: 'simpleList/index', title: 'Simple List', type: 'intro', nav: true },
            { route: 'betterList', moduleId: 'betterList/index', title: 'Better List', type: 'intro', nav: true },
            { route: 'controlTypes', moduleId: 'controlTypes/index', title: 'Control Types', type: 'intro', nav: true }
            ]).buildNavigationModel();

        return {
            router: childRouter
        };
    }
}

export var vm = new ViewModel();
export var activate = function () { return vm.activate(); };
