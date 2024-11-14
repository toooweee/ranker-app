import { Controller, Post, Logger, Body } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { JoinPollDto } from './dto/join-poll.dto';

@Controller('polls')
export class PollsController {
  constructor() {}
  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    Logger.log('create poll');
    return createPollDto;
  }

  @Post('join')
  async join(@Body() joinPollDto: JoinPollDto) {
    Logger.log('join poll');
    return joinPollDto;
  }

  @Post('rejoin')
  async rejoin() {}
}
