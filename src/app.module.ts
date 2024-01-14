import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Neo4jModule } from "nest-neo4j/dist";

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: "neo4j",
      host: "neo4j://localhost:7687",
      port: 7474,
      username: "neo4j",
      password: "abc12345678",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
