# Blog Content Directory

Deze directory bevat alle blog posts in markdown formaat.

## Hoe een nieuwe blog post toe te voegen

1. Maak een nieuw `.md` bestand in deze directory
2. Gebruik de slug (filename zonder `.md`) als URL voor de post
3. Voeg frontmatter toe aan de top van het bestand

## Frontmatter Format

Elk blog post bestand moet beginnen met frontmatter in YAML formaat:

```markdown
---
title: "Je Blog Post Titel"
excerpt: "Een korte samenvatting van je blog post voor in de lijst"
category: "Tutorial"  # Opties: Tutorial, Best Practices, Security, Announcement, etc.
date: "2024-03-15"     # Format: YYYY-MM-DD
readTime: "5 min"      # Geschatte leestijd
image: "https://example.com/image.jpg"  # Featured image URL
author: "Auteur Naam"  # Optioneel
tags: ["tag1", "tag2", "tag3"]  # Optioneel
---

# Je content begint hier

Gebruik normale markdown syntax voor de rest van je content...
```

## Voorbeeld

Zie de bestaande blog posts voor voorbeelden:
- `getting-started-with-pulseguard.md`
- `5-best-practices-server-monitoring.md`
- `waarom-uptime-monitoring-essentieel-is.md`
- `nieuwe-features-maart-2024.md`

## Markdown Features

Je kunt alle standaard markdown features gebruiken:

- **Headers**: `#`, `##`, `###`, etc.
- **Bold/Italic**: `**bold**`, `*italic*`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Code blocks**: ` ```language` ... ` ``` `
- **Lists**: `-` of `1.`
- **Blockquotes**: `>`
- **Tables**: Markdown tables

## Bestandsnamen

De bestandsnaam wordt de URL slug:
- `my-awesome-post.md` → `/blog/my-awesome-post`
- Gebruik lowercase en hyphens `-` in plaats van spaties
- Geen speciale karakters

## Tips

1. **Goede titles**: Maak titles informatief en SEO-vriendelijk
2. **Goede excerpts**: De excerpt verschijnt in de blog lijst, maak deze aantrekkelijk
3. **Goede images**: Gebruik high-quality images (minimaal 800x400px)
4. **Categorieën**: Gebruik consistente categorieën voor betere filtering
5. **Tags**: Voeg relevante tags toe voor betere vindbaarheid
6. **Date format**: Gebruik altijd YYYY-MM-DD format voor dates

## Automatische Features

- Posts worden automatisch gesorteerd op datum (nieuwste eerst)
- Categorieën worden automatisch verzameld voor de filter
- De blog overview toont alle posts in een grid
- Individuele posts krijgen automatisch een mooie layout
- Code syntax highlighting werkt automatisch
