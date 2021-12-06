import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { TailsService } from './tails.service';
import { Response } from 'express'
interface Param {
  tail: string
}

@Controller('tail/:tail')
export class TailsController {

  constructor(private tailsService: TailsService) { }

  @Get()
  async getTailPage(@Param() tail: Param, @Res() res: Response) {

    this.tailsService.getHasuke(tail.tail).subscribe(async (item) => {
      if(!item.data.long_tails[0]) {
        return  res.render('404');
      }
      const paramData = await this.tailsService.getJsonData(item.data.long_tails[0].json_id);
      if(paramData) {
        return res.render('tail-page', { message: paramData.description, title: paramData.title })
      }
      res.render('404');
    });

  }
}
