import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateFeedbackDto {

    @IsString()
    @IsOptional()
    firstName?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    @MaxLength(100)
    message?: string;
}
