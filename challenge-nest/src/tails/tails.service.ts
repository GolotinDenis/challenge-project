import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { promises } from 'fs'

const urlTest = /^http/ig;

interface JSONIntefece {
  id: string;
  title: string;
  description: string;
}

@Injectable()
export class TailsService {

  constructor(private httpService: HttpService) {}

  getHasuke(tail:string):Observable<AxiosResponse> {
    return this.httpService.get(`http://graphql:8080/api/rest/tail?tail=${tail}`);
  }

  async getJsonData(param: string): Promise<any> {
    if(process.env.FILE_NAME) {
      let file: JSONIntefece[];
      if(urlTest.test(process.env.FILE_NAME)) {
        const preResult = await this.httpService.get(`${process.env.FILE_NAME}`).toPromise();
        file = preResult.data;
      } else {
        const preResult  = await promises.readFile(`/file-dir/${process.env.FILE_NAME}`);
        file = JSON.parse((preResult as unknown) as string)
      }
      const data = file.find((item: JSONIntefece)=>item.id === param)
      return data;
    }
    return null;
    
  }
}
