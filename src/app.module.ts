import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UserService } from './service/user.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MailService } from './service/mail.service';
import { TokenService } from './service/token.service';
import { userModule } from './module/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    userModule,
  ],
  controllers: [AppController],
  providers: [UserService, MailService, TokenService],
})
export class AppModule {}
