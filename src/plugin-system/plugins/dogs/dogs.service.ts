import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    getDogs(): string[] {
        return ['Dog1', 'Dog2', 'Dog3'];
    }
}
