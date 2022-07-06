import { Injectable } from '@nestjs/common';

@Injectable()
export class HorseService {
    getHorses(): string[] {
        return ['horse1', 'horse2', 'horse3'];
    }
}
