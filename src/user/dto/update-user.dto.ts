import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nickname: string;
}
