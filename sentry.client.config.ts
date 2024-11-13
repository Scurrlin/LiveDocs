// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://23f7f1f5110f2b015dc493251fac617a@o4507299894132736.ingest.us.sentry.io/4508292588371968",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
