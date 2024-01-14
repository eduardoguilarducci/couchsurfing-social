import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty } from "class-validator";

export class ConnectUserDTO {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  users: string[];
}
