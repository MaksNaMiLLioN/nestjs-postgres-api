import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FeedbackDto } from "./dto";

@Injectable()
export class FeedbackService {
    constructor(private prisma: PrismaService) {}
    async postFeedback(dto: FeedbackDto) {
        
        const feedback = await this.prisma.feedback.create({
            data: {
                firstName: dto.firstName,
                email: dto.email,
                message: dto.message
            }
        })
        return feedback;
    }
}