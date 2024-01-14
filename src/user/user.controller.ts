import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ConnectUserDTO } from "./dto/connect-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<any> {
    return await this.userService.create(user);
  }

  @Get(":from/distance/:to")
  async calculateDistance(
    @Param("from") from: string,
    @Param("to") to: string,
  ): Promise<any> {
    return await this.userService.calculateDistance(from, to);
  }

  @Put(":name")
  async update(
    @Param("name") name: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return await this.userService.update(name, updateUserDto);
  }

  @Put(":name/connect")
  async connect(
    @Param("name") name: string,
    @Body() usersToConnect: ConnectUserDTO,
  ): Promise<any> {
    return await this.userService.connect(name, usersToConnect);
  }

  @Delete(":name")
  async remove(@Param("name") name: string): Promise<any> {
    return await this.userService.remove(name);
  }
}
