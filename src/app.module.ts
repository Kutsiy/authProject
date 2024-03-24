import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MailService } from './service/mail.service';
import { TokenService } from './service/token.service';
import { UserModule } from './module/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule,
  ],
  controllers: [AppController],
  providers: [MailService, TokenService, JwtService],
  exports: [MailService],
})
export class AppModule {}
