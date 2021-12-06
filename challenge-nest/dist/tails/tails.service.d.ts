import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
export declare class TailsService {
    private httpService;
    constructor(httpService: HttpService);
    getHasuke(tail: string): Observable<AxiosResponse>;
    getJsonData(param: string): Promise<any>;
}
