import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {HttpModule} from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    UserModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api',
      synchronize: true,
    }),



  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}