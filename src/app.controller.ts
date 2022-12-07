import { Response} from 'express';
import {Controller,Body,Post,Get,Param,Query,Res,HttpStatus, HttpException, StreamableFile} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateUserDto} from './dto/create-user.dto';
import { createReadStream} from 'fs';
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get('user/:id')
  // getHello(@Param('id') id: string, @Query('key') query, @Res() res: Response) {
  // if (query == null) {
  // // res.status(HttpStatus.BAD_REQUEST).send({message: "Invalid Request"});
  // throw new HttpException('Forbidden', HttpStatus.SERVICE_UNAVAILABLE);
  // }
  // else {
  // return this.appService.getData();
  // }
  // }
  // @Post('register')
  // register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
  // res.status(HttpStatus.SERVICE_UNAVAILABLE).send(createUserDto);
  // }

  @Get('show-image')
  async getRemoveImageBackground(@Query('url') imageUrl, @Res() response: Response) {

    if (imageUrl == null) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }

    const resImageBgRemoved = await this.appService.removeImageBackground(imageUrl);

    response.send({
      message: "success"
    })
  }
  @Post('send')
  async send(
    @Body("app_id") app_id: string,
    @Body("user_id") user_id: string,
    @Body("organization_id") organization_id: string,
    @Body("others") others: string,
    @Body("dp_image_url") dp_image_url: string,
  ) {
    // "image_url": "<image https downloadable url>",
    // "image_base64": "<base64 image string>"
    // const user = await this.appService.create({
    // app_id,
    // user_id,
    // organization_id,
    // others
    // });
    const payload = {
      app_id,
      user_id,
      organization_id,
      others,
      dp_image_url
    }
    const resImageBgRemoved = await this.appService.removeImageBackground(payload);
    return resImageBgRemoved;
  }
}