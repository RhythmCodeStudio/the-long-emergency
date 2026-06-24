import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function saveSubscriptionToDB(sub: any) {
  await sql`
    INSERT INTO push_subscriptions (endpoint, expiration_time, keys)
    VALUES (
      ${sub.endpoint},
      ${sub.expirationTime ?? null},
      ${JSON.stringify(sub.keys)}
    )
    ON CONFLICT (endpoint) DO NOTHING
  `;
}

export async function getSubscriptionsFromDB() {
  return await sql`
    SELECT endpoint, expiration_time, keys
    FROM push_subscriptions
  `;
}

export async function removeSubscriptionFromDB(endpoint: string) {
  await sql`
    DELETE FROM push_subscriptions WHERE endpoint = ${endpoint}
  `;
}