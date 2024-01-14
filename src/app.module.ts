import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Neo4jModule } from "nest-neo4j/dist";
import { UserModule } from './user/user.module';

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: "neo4j",
      host: "neo4j://localhost:7687",
      port: 7474,
      username: "neo4j",
      password: "abc12345678",
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
