import { Node } from "neo4j-driver";

export class User {
  constructor(private readonly node: Node) {}

  toJson(): Record<string, number> {
    const { name, nickname } = <Record<string, any>>this.node.properties;

    return { name, nickname };
  }
}
