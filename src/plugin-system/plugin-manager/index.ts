import * as Plugins from '../plugins'; 

interface Plugin {
    module: string;
    load: boolean;
}

class PluginManager {
    private readonly pluginList: Plugin[];
    private readonly pluginModuleList: any[];
    private readonly configFilePath: string;

    constructor(configFilePath: string = './src/plugin-system/plugin-manager/plugins.json') {
        this.pluginList = [];
        this.pluginModuleList = [];
        this.configFilePath = configFilePath;
    }

    loadPluginsFromConfig(): void {
        const path = require('path');
        const plugins = require(path.resolve(this.configFilePath));
        
        for(const plugin in plugins) {
            this.pluginList.push(plugins[plugin]);
        }
    }

    loadPluginModules(): void {
        for(const plugin of this.pluginList) {
            if(plugin.load) this.pluginModuleList.push(Plugins[plugin.module]);
        }
    }

    getPluginModuleList() {
        return this.pluginModuleList;
    }
}

const pluginManager = new PluginManager();
pluginManager.loadPluginsFromConfig();
pluginManager.loadPluginModules();
export const PluginModules = pluginManager.getPluginModuleList();