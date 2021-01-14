import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}?retryWrites=true&w=majority`;

const client = new MongoClient(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(dbName);
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
