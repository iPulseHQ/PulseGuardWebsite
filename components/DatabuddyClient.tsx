'use client';

import { Databuddy } from '@databuddy/sdk/react';

export default function DatabuddyClient() {
  return (
    <Databuddy
      clientId="r7_mZ0-zidaAxUAp4TJN0"
      trackHashChanges={true}
      trackAttributes={true}
      trackOutgoingLinks={true}
      trackInteractions={true}
      trackEngagement={true}
      trackScrollDepth={true}
      trackExitIntent={true}
      trackBounceRate={true}
      trackWebVitals={true}
      trackErrors={true}
      enableBatching={true}
    />
  );
}
