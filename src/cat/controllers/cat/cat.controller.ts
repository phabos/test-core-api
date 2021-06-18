import { Controller, Get } from '@nestjs/common';
import { CatService } from 'src/cat/services/cat/cat.service';

@Controller('cat')
export class CatController {
constructor(private readonly catService: CatService) {}

  @Get()
  getCat(): string {
    return this.catService.meow();
  }
}
