import { Body, Controller, Get, Post } from "@nestjs/common";
import { FeedbackDto } from "./dto";
import { FeedbackService } from "./feedback.service";

@Controller()
export class FeedbackController{
    constructor (private feedbackService: FeedbackService) {}

    @Post('feedback')
    postFeedback(@Body() dto: FeedbackDto) {
        console.log({dto})
        return this.feedbackService.postFeedback(dto);
    }

}
