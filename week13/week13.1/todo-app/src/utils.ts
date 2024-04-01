import { Client } from "pg";

const CONNECTION_STRING =
  "postgresql://postgres-1_owner:Pu4g1MqNkLnd@ep-noisy-mountain-a51vsivi.us-east-2.aws.neon.tech/postgres-1?sslmode=require";

export async function getClient() {
  const client = new Client(CONNECTION_STRING);
  await client.connect();
  return client;
}
