import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFeedbackDto, UpdateFeedbackDto } from "./dto";
import { Prisma } from ".prisma/client";

@Injectable()
export class FeedbackService {
    constructor(private prisma: PrismaService) {}

    getFeedbacks() {
        return this.prisma.feedback.findMany()
    }

    async postFeedback(dto: CreateFeedbackDto) {
        const feedback = await this.prisma.feedback.create({
            data: {
                firstName: dto.firstName,
                email: dto.email,
                message: dto.message
            }
        })
        return feedback;
    }

    updateFeedbackbyId(feedbackId: number, dto: UpdateFeedbackDto) {
        return this.prisma.feedback.update({
            where: {
              id: feedbackId,
            },
            data: {
              ...dto,
            },
          });
    }

    async deleteFeedbackById(feedbackId: number) {
        const feedback =

        await this.prisma.feedback.delete({
            where: {
                id: feedbackId
            }
        });
    }
}