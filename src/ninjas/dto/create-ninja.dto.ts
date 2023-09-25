import { IsEnum, MinLength } from "class-validator"

// Providing additional metadata to this class @MinLength
export class CreateNinjaDto {
    @MinLength(3)
    name: string

    @IsEnum(['stars', 'nunchucks'], { message: 'Use correct weapon!'})
    weapon: 'stars' | 'nunchucks'
}
