import { Module } from '@nestjs/common';
import { CatController } from './controllers/cat/cat.controller';
import { CatService } from './services/cat/cat.service';

@Module({
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule {}
