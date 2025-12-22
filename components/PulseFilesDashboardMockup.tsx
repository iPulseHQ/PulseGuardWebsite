export default function PulseFilesDashboardMockup() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-background">
      {/* Content */}
      <div className="p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Upload Area */}
          <div className="relative">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-2xl blur-xl animate-pulse"></div>

            <div className="relative bg-muted/30 border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center hover:border-primary/50 transition-all">
              <div className="flex flex-col items-center gap-6">
                <div className="bg-primary/10 p-6 rounded-full">
                  <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Upload je bestanden</h3>
                  <p className="text-sm text-muted-foreground">Sleep bestanden hierheen of klik om te bladeren</p>
                </div>

                <div className="flex items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Tot 2GB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Alle types</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Supersnel</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/30 w-full">
                  <p className="text-xs font-medium text-muted-foreground mb-3">Ondersteunde bestandstypes</p>
                  <div className="grid grid-cols-4 gap-3">
                    {['Documenten', 'Afbeeldingen', "Video's", 'Archieven'].map((type) => (
                      <div key={type} className="bg-card/50 rounded-lg p-3 text-center">
                        <div className="bg-primary/5 p-2 rounded-md mb-2 mx-auto w-fit">
                          <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-[10px] text-muted-foreground font-medium">{type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium mb-4">
                <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                PulseFiles
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Veilig bestanden delen</h2>
              <p className="text-muted-foreground">Upload tot 2GB gratis. Bestanden worden automatisch verwijderd na de vervaldatum</p>
            </div>

            <div className="grid gap-4">
              {/* Feature 1 */}
              <div className="bg-muted/30 border border-border/30 rounded-xl p-4 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Beveiligd</h4>
                    <p className="text-xs text-muted-foreground">End-to-end encryptie voor maximale veiligheid</p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-muted/30 border border-border/30 rounded-xl p-4 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Supersnel</h4>
                    <p className="text-xs text-muted-foreground">Razendsnel uploaden en downloaden</p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-muted/30 border border-border/30 rounded-xl p-4 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Privé</h4>
                    <p className="text-xs text-muted-foreground">Jouw bestanden blijven privé en veilig</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2GB</div>
                <div className="text-[10px] text-muted-foreground">Gratis opslag</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">256-bit</div>
                <div className="text-[10px] text-muted-foreground">Encryptie</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">∞</div>
                <div className="text-[10px] text-muted-foreground">Bestandstypes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
