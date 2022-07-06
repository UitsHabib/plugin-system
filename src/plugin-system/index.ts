import { pluginManager } from './plugin-manager';
import { HorseModule } from './plugins/horse/horse.module';
import { DogsModule } from './plugins/dogs/dogs.module';

pluginManager.register({ module: DogsModule, isLoadable: true });
pluginManager.register({ module: HorseModule, isLoadable: true });

export { pluginManager };
export const PluginModules = pluginManager.getPluginModuleList();

