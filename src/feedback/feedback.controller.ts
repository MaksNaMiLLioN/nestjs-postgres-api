import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateFeedbackDto, UpdateFeedbackDto } from "./dto";
import { FeedbackService } from "./feedback.service";

@Controller('feedbacks')
export class FeedbackController{
    constructor (private feedbackService: FeedbackService) {}

    @Get()
    getFeedbacks() {
        return this.feedbackService.getFeedbacks();
    }

    @Patch(':id')
    updateFeedbackbyId(@Param('id', ParseIntPipe) feedbackId: number, @Body() dto: UpdateFeedbackDto) {
        return this.feedbackService.updateFeedbackbyId(feedbackId, dto);
    }

    @Post()
    postFeedback(@Body() dto: CreateFeedbackDto) {
        return this.feedbackService.postFeedback(dto);
    }

    @Delete(':id')
    deleteFeedbackById(@Param('id', ParseIntPipe) feedbackId: number) {
        return this.feedbackService.deleteFeedbackById(
            feedbackId
        )
    }
}
