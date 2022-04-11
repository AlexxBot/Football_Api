import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

const app = express();

const options = { graphiql: true, schema: schema };

app.use("/graphql", graphqlHTTP(options));

export default app