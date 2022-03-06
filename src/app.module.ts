import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeedbackModule } from './feedback/feedback.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FeedbackModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true})],
})
export class AppModule {}
