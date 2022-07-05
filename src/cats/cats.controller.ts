import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('habib')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getHello(): string[] {
    return this.catsService.getCats();
  }
}
