import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateFeedbackDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    firstName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    message: string;
}
