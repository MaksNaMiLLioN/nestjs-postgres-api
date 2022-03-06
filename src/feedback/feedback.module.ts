import { Global, Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { FeedbackController } from "./feedback.controller";
import { FeedbackService } from "./feedback.service";

@Module({
    imports: [PrismaModule],
    controllers: [FeedbackController],
    providers: [FeedbackService],
})
export class FeedbackModule{}
