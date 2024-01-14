import { Injectable } from "@nestjs/common";
import { Neo4jService } from "nest-neo4j/dist";

@Injectable()
export class AppService {
  constructor(private readonly neo4jService: Neo4jService) {}
  async getHello(): Promise<any> {
    const res = await this.neo4jService.read(
      `MATCH
      (u:User {name: 'eduardo'})
      RETURN u`,
    );
    const user = res.records[0].get("u");
    return user;
  }

  async setup(): Promise<any> {
    // 0- reset
    // 1- unique constraint
    // 2- users
    // 3- relationships

    const del = await this.neo4jService.write(
      `MATCH (n)
      DETACH DELETE n`,
    );

    const drop = await this.neo4jService.write(
      `DROP CONSTRAINT unique_user_name IF EXISTS`,
    );

    const createConstraint = await this.neo4jService.write(
      `CREATE CONSTRAINT unique_user_name
      FOR (u:User) REQUIRE u.name IS UNIQUE`,
    );

    const createUsers = await this.neo4jService.write(
      `CREATE (j:User {name: 'joao', age: 30}), (c:User {name: 'carol', age: 24}), (g:User {name: 'guerreiro', age: 30}),
      (a:User {name: 'adv', age: 31}),  (e:User {name: 'eduardo', age: 42}),  (s:User {name: 'samantha', age: 43}),
      (m:User {name: 'maria', age: 6}),  (t:User {name: 'tamaki', age: 40}), (h:User {name: 'hugo', age: 26}),(l:User {name: 'lasse', age: 35})`,
    );

    const createConnections = await this.neo4jService.write(
      `MATCH (j:User {name: 'joao'}), (c:User {name: 'carol'}), (g:User {name: 'guerreiro'}),
      (a:User {name: 'adv'}),  (e:User {name: 'eduardo'}),  (s:User {name: 'samantha'}),
      (m:User {name: 'maria'}),  (t:User {name: 'tamaki'}), (h:User {name: 'hugo'}), (l:User {name: 'lasse'})
      CREATE (j)-[:CONNECT_TO {type: 'friend'}]->(g)
      CREATE (j)-[:CONNECT_TO {type: 'friend'}]->(a)
      CREATE (g)-[:CONNECT_TO {type: 'friend'}]->(a)
      CREATE (e)-[:CONNECT_TO {type: 'friend'}]->(g)
      CREATE (e)-[:CONNECT_TO {type: 'friend'}]->(j)
      CREATE (e)-[:CONNECT_TO {type: 'friend'}]->(s)
      CREATE (e)-[:CONNECT_TO {type: 'friend'}]->(m)
      CREATE (e)-[:CONNECT_TO {type: 'friend'}]->(h)
      CREATE (e)-[:CONNECT_TO {type: 'friend'}]->(t)
      CREATE (e)-[:CONNECT_TO {type: 'friend'}]->(c)
      CREATE (s)-[:CONNECT_TO {type: 'friend'}]->(m)
      CREATE (s)-[:CONNECT_TO {type: 'friend'}]->(h)
      CREATE (c)-[:CONNECT_TO {type: 'friend'}]->(l)
      `,
    );

    return null;
  }
}
