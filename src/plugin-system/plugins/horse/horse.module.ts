import { Module } from "@nestjs/common";
import { HorseController } from './horse.controller';
import { HorseService } from './horse.service';

@Module({
  controllers: [HorseController],
  providers: [HorseService],
})
export class HorseModule {}
