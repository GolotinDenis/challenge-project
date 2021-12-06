import { Param } from '@nestjs/common';
import { TailsService } from './tails.service';
import { Response } from 'express';
interface Param {
    tail: string;
}
export declare class TailsController {
    private tailsService;
    constructor(tailsService: TailsService);
    getTailPage(tail: Param, res: Response): Promise<void>;
}
export {};
