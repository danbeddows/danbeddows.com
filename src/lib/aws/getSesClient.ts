import { SESClient } from "@aws-sdk/client-ses";

const awsSesClient = new SESClient({
  region: process.env.AWS_APP_REGION ?? "",
  credentials: {
    accessKeyId: process.env.AWS_APP_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_APP_SECRET_ACCESS_KEY ?? "",
  },
});

export { awsSesClient };
