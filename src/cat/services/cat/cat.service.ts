import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    meow() {
        return 'meow from catModule !!';
    }
}
