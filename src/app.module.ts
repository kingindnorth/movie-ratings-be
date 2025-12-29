import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, MoviesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
