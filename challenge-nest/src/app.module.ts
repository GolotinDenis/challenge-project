import { Module } from '@nestjs/common';
import { TailsController } from './tails/tails.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TailsService } from './tails/tails.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [TailsController],
  providers: [TailsService],
})
export class AppModule { }
