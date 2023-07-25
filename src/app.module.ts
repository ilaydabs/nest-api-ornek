import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
  /*prisma module doyasında @Global dekoratörü sayesinde bütün module'lerimiz burada olmalı*/ 
})
export class AppModule {}
