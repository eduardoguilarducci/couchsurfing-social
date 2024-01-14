import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Neo4jService } from "nest-neo4j/dist";

@Injectable()
export class UserService {
  constructor(private readonly neo4jService: Neo4jService) {}
  async create(user: CreateUserDto): Promise<any> {
    try {
      const createUsers = await this.neo4jService.write(
        `CREATE (j:User {name: '${user.name}', nickname: '${user.nickname}'})`,
      );

      return createUsers;
    } catch (ex) {
      return new BadRequestException(ex);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
