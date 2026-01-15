export default function PulseGuardDashboardMockup() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-background">
      {/* Header */}
      <div className="bg-muted px-4 sm:px-6 py-3 sm:py-4 border-b border-border/30">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">Dashboard</h2>
        <p className="text-xs text-muted-foreground">Overzicht</p>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Uptime */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground tracking-wider mb-2">UPTIME</p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-500 mb-1">100%</h3>
                <p className="text-xs text-muted-foreground">Afgelopen 30 dagen</p>
              </div>
              <div className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Active Incidents */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground tracking-wider mb-2">ACTIEVE INCIDENTEN</p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-500 mb-1">0</h3>
                <p className="text-xs text-muted-foreground">0 critical</p>
              </div>
              <div className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground tracking-wider mb-2">RESPONSE TIJD</p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-500 mb-1">314ms</h3>
                <p className="text-xs text-muted-foreground">Laatste uur gemiddelde</p>
              </div>
              <div className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <p className="text-xs font-medium text-muted-foreground mb-1">DOMEINEN</p>
            <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">10</h4>
            <p className="text-xs text-muted-foreground">10 up</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
            </div>
            <p className="text-xs font-medium text-muted-foreground mb-1">SERVICES</p>
            <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">0</h4>
            <p className="text-xs text-muted-foreground">0 healthy</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="text-xs font-medium text-muted-foreground mb-1">DEVICES</p>
            <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">0</h4>
            <p className="text-xs text-muted-foreground">0 online</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <p className="text-xs font-medium text-muted-foreground mb-1">SSL VALID</p>
            <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">10</h4>
            <p className="text-xs text-muted-foreground">certificates</p>
          </div>
        </div>

        {/* Availability Section */}
        <div className="flex items-center gap-3 pt-4">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          </div>
          <h3 className="text-lg font-semibold text-foreground">Availability</h3>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Uptime Status */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h4 className="text-sm font-semibold text-foreground mb-1">Uptime Status</h4>
            <p className="text-xs text-muted-foreground mb-4 sm:mb-6">Huidige status van alle gemonitorde domeinen</p>
            <div className="flex flex-col items-center justify-center py-4 sm:py-8">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                  <circle cx="48" cy="48" r="42" fill="none" className="stroke-gray-200 dark:stroke-gray-800 sm:hidden" strokeWidth="10" />
                  <circle cx="48" cy="48" r="42" fill="none" stroke="#10B981" strokeWidth="10" strokeDasharray="264" strokeDashoffset="0" className="sm:hidden" />
                  <circle cx="64" cy="64" r="56" fill="none" className="stroke-gray-200 dark:stroke-gray-800 hidden sm:block" strokeWidth="12" />
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="352" strokeDashoffset="0" className="hidden sm:block" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">100%</span>
                  <span className="text-xs text-muted-foreground">Uptime</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs flex-wrap justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Down</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <span className="text-muted-foreground">Unknown</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-muted-foreground">Up</span>
                </div>
              </div>
            </div>
          </div>

          {/* SSL Certificaten */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h4 className="text-sm font-semibold text-foreground mb-1">SSL Certificaten</h4>
            <p className="text-xs text-muted-foreground mb-4 sm:mb-6">SSL certificaat status overzicht</p>
            <div className="flex flex-col items-center justify-center py-4 sm:py-8">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                  <circle cx="48" cy="48" r="42" fill="none" className="stroke-gray-200 dark:stroke-gray-800 sm:hidden" strokeWidth="10" />
                  <circle cx="48" cy="48" r="42" fill="none" stroke="#10B981" strokeWidth="10" strokeDasharray="264" strokeDashoffset="0" className="sm:hidden" />
                  <circle cx="64" cy="64" r="56" fill="none" className="stroke-gray-200 dark:stroke-gray-800 hidden sm:block" strokeWidth="12" />
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="352" strokeDashoffset="0" className="hidden sm:block" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">10</span>
                  <span className="text-xs text-muted-foreground">Valid</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs flex-wrap justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-muted-foreground">Expiring</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Invalid</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-muted-foreground">Valid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Score */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h4 className="text-sm font-semibold text-foreground mb-1">Security Score</h4>
            <p className="text-xs text-muted-foreground mb-4 sm:mb-6">Average security score</p>
            <div className="flex flex-col items-center justify-center py-4 sm:py-8">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                  <circle cx="48" cy="48" r="42" fill="none" className="stroke-gray-200 dark:stroke-gray-800 sm:hidden" strokeWidth="10" />
                  <circle cx="48" cy="48" r="42" fill="none" stroke="#10B981" strokeWidth="10" strokeDasharray="264" strokeDashoffset="66" className="sm:hidden" />
                  <circle cx="64" cy="64" r="56" fill="none" className="stroke-gray-200 dark:stroke-gray-800 hidden sm:block" strokeWidth="12" />
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="352" strokeDashoffset="88" className="hidden sm:block" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">77</span>
                  <span className="text-xs text-muted-foreground">Score</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs flex-wrap justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-muted-foreground">Good</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <span className="text-muted-foreground">Remaining</span>
                </div>
              </div>
            </div>
          </div>

          {/* Incidenten */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h4 className="text-sm font-semibold text-foreground mb-1">Incidenten Overzicht</h4>
            <p className="text-xs text-muted-foreground mb-4 sm:mb-6">Laatste monitoring alerts</p>
            <div className="flex flex-col items-center justify-center py-4 sm:py-8">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                  <circle cx="48" cy="48" r="42" fill="none" className="stroke-gray-200 dark:stroke-gray-800 sm:hidden" strokeWidth="10" />
                  <circle cx="48" cy="48" r="42" fill="none" stroke="#10B981" strokeWidth="10" strokeDasharray="264" strokeDashoffset="0" className="sm:hidden" />
                  <circle cx="64" cy="64" r="56" fill="none" className="stroke-gray-200 dark:stroke-gray-800 hidden sm:block" strokeWidth="12" />
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="352" strokeDashoffset="0" className="hidden sm:block" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">20</span>
                  <span className="text-xs text-muted-foreground">Total</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs flex-wrap justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
