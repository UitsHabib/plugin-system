import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PluginModules } from './plugin-system/plugin-manager';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [...PluginModules, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
