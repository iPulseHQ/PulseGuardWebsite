export default function PulseQRDashboardMockup() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-[#0A0A0A]">
      {/* Header */}
      <div className="bg-[#0F0F0F] px-6 py-4 border-b border-border/30">
        <h2 className="text-xl font-bold text-foreground">Nieuwe QR-code</h2>
        <p className="text-xs text-muted-foreground">Maak in een paar seconden een gratis QR-code die niet verloopt. Alles wordt lokaal opgeslagen in jouw browser – geen account nodig.</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Type QR-code Section */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-foreground mb-2">Type QR-code</h3>
          <p className="text-xs text-muted-foreground mb-4">Kies wat je met deze QR-code wilt doen.</p>

          {/* QR Type Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Tekst / notitie - Selected */}
            <div className="bg-[#111111] border-2 border-primary rounded-xl p-4 cursor-pointer hover:bg-[#151515] transition-colors">
              <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Tekst / notitie</h4>
              <p className="text-xs text-muted-foreground">Korte instructies, huisregels, uitleg...</p>
            </div>

            {/* Link / URL */}
            <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl p-4 cursor-pointer hover:bg-[#151515] transition-colors">
              <div className="bg-muted/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Link / URL</h4>
              <p className="text-xs text-muted-foreground">Verwijs naar een pagina of document.</p>
            </div>

            {/* WiFi */}
            <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl p-4 cursor-pointer hover:bg-[#151515] transition-colors">
              <div className="bg-muted/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Wifi</h4>
              <p className="text-xs text-muted-foreground">SSID en wachtwoord delen.</p>
            </div>

            {/* V-card */}
            <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl p-4 cursor-pointer hover:bg-[#151515] transition-colors">
              <div className="bg-muted/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1">V-card</h4>
              <p className="text-xs text-muted-foreground">Contactkaart met naam, bedrijf en telefoon.</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Label Input */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Label</label>
              <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-lg p-3">
                <input
                  type="text"
                  placeholder="Bijv. 'Wifi kantoor', 'Menu zomer 2025'"
                  className="w-full bg-transparent text-sm text-muted-foreground outline-none"
                  disabled
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Handige naam voor in je overzicht. Niet verplicht.</p>
            </div>

            {/* Text/Notitie Input */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Tekst / notitie</label>
              <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-lg p-3">
                <textarea
                  placeholder="Bijv. huisregels, instructies, uitleg..."
                  className="w-full bg-transparent text-sm text-muted-foreground outline-none resize-none"
                  rows={6}
                  disabled
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button type="button" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                QR-code maken
              </button>
              <button type="button" aria-label="Reset formulier" className="px-4 bg-[#111111] hover:bg-[#151515] border border-[#1A1A1A] text-foreground text-sm font-semibold rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - QR Code Preview */}
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-xl p-6 flex flex-col">
            <div className="w-64 h-64 mx-auto bg-white rounded-lg flex items-center justify-center mb-4">
              {/* QR Code Placeholder */}
              <div className="w-full h-full p-8">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* QR Code pattern simulation */}
                  <rect x="0" y="0" width="30" height="30" fill="black"/>
                  <rect x="5" y="5" width="20" height="20" fill="white"/>
                  <rect x="10" y="10" width="10" height="10" fill="black"/>

                  <rect x="70" y="0" width="30" height="30" fill="black"/>
                  <rect x="75" y="5" width="20" height="20" fill="white"/>
                  <rect x="80" y="10" width="10" height="10" fill="black"/>

                  <rect x="0" y="70" width="30" height="30" fill="black"/>
                  <rect x="5" y="75" width="20" height="20" fill="white"/>
                  <rect x="10" y="80" width="10" height="10" fill="black"/>

                  {/* Data pattern */}
                  <rect x="40" y="15" width="5" height="5" fill="black"/>
                  <rect x="50" y="15" width="5" height="5" fill="black"/>
                  <rect x="45" y="25" width="5" height="5" fill="black"/>
                  <rect x="40" y="35" width="5" height="5" fill="black"/>
                  <rect x="55" y="35" width="5" height="5" fill="black"/>
                  <rect x="35" y="45" width="5" height="5" fill="black"/>
                  <rect x="50" y="45" width="5" height="5" fill="black"/>
                  <rect x="65" y="45" width="5" height="5" fill="black"/>
                  <rect x="40" y="55" width="5" height="5" fill="black"/>
                  <rect x="55" y="55" width="5" height="5" fill="black"/>
                  <rect x="45" y="65" width="5" height="5" fill="black"/>
                  <rect x="60" y="65" width="5" height="5" fill="black"/>
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Preview</span>
                <div className="flex gap-2">
                  <button type="button" aria-label="Download QR-code" className="p-1.5 bg-[#111111] hover:bg-[#151515] border border-[#1A1A1A] rounded transition-colors">
                    <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button type="button" aria-label="Deel QR-code" className="p-1.5 bg-[#111111] hover:bg-[#151515] border border-[#1A1A1A] rounded transition-colors">
                    <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Privacy First</p>
                <p className="text-sm font-semibold text-foreground">Lokaal opgeslagen</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Onbeperkt geldig</p>
                <p className="text-sm font-semibold text-foreground">Verloopt nooit</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Snelheid</p>
                <p className="text-sm font-semibold text-foreground">Direct beschikbaar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
