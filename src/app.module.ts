import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PluginModules } from './plugin-system';

@Module({
  imports: [...PluginModules, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
