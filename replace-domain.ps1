# PowerShell script om alle pulseguard.nl links te vervangen naar pulseguard.pro
# Script to replace all pulseguard.nl links with pulseguard.pro

Write-Host "Starting domain replacement: pulseguard.nl -> pulseguard.pro" -ForegroundColor Green

# Lijst van bestanden die pulseguard.nl bevatten
$filesToUpdate = @(
    "src\pages\Home.tsx",
    "src\pages\Features.tsx",
    "src\components\layout\Header.tsx",
    "src\components\ui\Hero.tsx",
    "public\.htaccess",
    "public\index.html",
    "src\pages\DetailedFeatures.tsx",
    "src\components\ui\InternalLinks.tsx",
    "seo-report.json",
    "src\components\layout\PreloadResources.tsx",
    "src\pages\PulseFiles.tsx",
    "src\components\ui\Pricing.tsx",
    "src\components\ui\Breadcrumb.tsx",
    "src\components\layout\Footer.tsx",
    "netlify.toml",
    "src\utils\translations.ts",
    "src\components\ui\FAQ.tsx",
    "src\pages\NotFound.tsx",
    "src\pages\Error.tsx",
    "src\pages\BlogPost.tsx",
    "public\blogs.json",
    "src\pages\Team.tsx",
    "src\components\ui\Mockups.tsx",
    "src\components\layout\SEOHead.tsx",
    "public\robots.txt",
    "public\sitemap.xml",
    "src\pages\Pricing.tsx",
    "public\llms.txt",
    "src\pages\Status.tsx",
    "public\.well-known\security.txt"
)

$totalFiles = $filesToUpdate.Count
$processedFiles = 0
$modifiedFiles = 0

foreach ($file in $filesToUpdate) {
    $fullPath = Join-Path $PWD $file
    
    if (Test-Path $fullPath) {
        Write-Host "Processing: $file" -ForegroundColor Yellow
        
        # Lees de inhoud van het bestand
        $content = Get-Content $fullPath -Raw -Encoding UTF8
        
        # Vervang pulseguard.nl met pulseguard.pro
        $newContent = $content -replace "pulseguard\.nl", "pulseguard.pro"
        
        # Controleer of er wijzigingen zijn
        if ($content -ne $newContent) {
            # Schrijf de nieuwe inhoud terug naar het bestand
            Set-Content $fullPath -Value $newContent -Encoding UTF8 -NoNewline
            Write-Host "  Updated: $file" -ForegroundColor Cyan
            $modifiedFiles++
        } else {
            Write-Host "  No changes needed: $file" -ForegroundColor Gray
        }
    } else {
        Write-Host "  File not found: $file" -ForegroundColor Red
    }
    
    $processedFiles++
    $percentage = [math]::Round(($processedFiles / $totalFiles) * 100, 1)
    Write-Progress -Activity "Replacing domain links" -Status "$processedFiles of $totalFiles files processed" -PercentComplete $percentage
}

Write-Progress -Activity "Replacing domain links" -Completed

Write-Host ""
Write-Host "Summary:" -ForegroundColor Green
Write-Host "- Total files processed: $processedFiles" -ForegroundColor White
Write-Host "- Files modified: $modifiedFiles" -ForegroundColor Cyan
Write-Host "- Domain replacement completed successfully!" -ForegroundColor Green

# Optioneel: toon git status om te zien welke bestanden zijn gewijzigd
if (Get-Command git -ErrorAction SilentlyContinue) {
    Write-Host ""
    Write-Host "Git status:" -ForegroundColor Yellow
    git status --short
}