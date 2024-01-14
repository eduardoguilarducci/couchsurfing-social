import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Neo4jService } from "nest-neo4j/dist";
import { User } from "./entities/user.entity";
import { ConnectUserDTO } from "./dto/connect-user.dto";

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
  async connect(name: string, usersToConnect: ConnectUserDTO): Promise<any> {
    try {
      for (const u of usersToConnect.users) {
        const updatedUser = await this.neo4jService.write(
          `MATCH
            (a:User {name: '${name}'}), (b:User {name: '${u}'})
            CREATE (a)-[:CONNECT_TO {type: 'friend'}]->(b)
        `,
        );
      }
    } catch (ex) {
      return new BadRequestException(ex);
    }
    const theUser = await this.neo4jService.write(
      `MATCH
        (u:User {name: '${name}'})
        RETURN u
    `,
    );
    const user = theUser.records[0].get("u");
    return new User(user).toJson();
  }
  async update(name: string, updateUserDto: UpdateUserDto): Promise<any> {
    try {
      const updatedUser = await this.neo4jService.write(
        `MATCH
        (u:User {name: '${name}'})
        SET u.nickname ='${updateUserDto.nickname}'
        RETURN  u
        `,
      );
      const user = updatedUser.records[0].get("u");
      return new User(user).toJson();
    } catch (ex) {
      return new BadRequestException(ex);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
