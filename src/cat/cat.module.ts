import { DynamicModule, Module } from '@nestjs/common';
import { CatController } from './controllers/cat/cat.controller';
import { CatService } from './services/cat/cat.service';

@Module({})
export class CatModule {
  static register(): DynamicModule {
    return {
      module: CatModule,
      providers: [CatService],
      exports: [CatService],
      controllers: [CatController]
    };
  }
}
