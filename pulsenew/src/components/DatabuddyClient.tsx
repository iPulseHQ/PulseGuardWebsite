'use client';

import { Databuddy } from '@databuddy/sdk';

export default function DatabuddyClient() {
  return (
    <Databuddy
      clientId="oV3hOzXVbw3jH01y0ObpL"
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


