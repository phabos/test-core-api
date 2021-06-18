import { CatService } from 'src/cat/services/cat/cat.service';
export declare class CatController {
    private readonly catService;
    constructor(catService: CatService);
    getCat(): string;
}
