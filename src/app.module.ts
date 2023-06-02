import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtpModule } from './otp/otp.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, OtpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
