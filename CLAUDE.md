# Guldkant – hemsida

Hemsida för Guldkant, en skönhetssalong. Ägaren bestämmer stil och innehåll. Planering och texter sker i Claude-projektet "Guldkant". Det här repot innehåller bara koden.

## Teknik
- Statisk sajt: HTML, CSS och minimal vanilla JavaScript. Inga ramverk eller byggsteg om det inte uttryckligen bestäms.
- Publiceras med GitHub Pages från grenen `main`.

## Struktur
```
index.html          Startsida
behandlingar.html   Behandlingar och priser
om.html             Om salongen / ägaren
kontakt.html        Kontakt, karta, öppettider
css/style.css       All styling, färger som CSS-variabler i :root
js/                 Små skript vid behov
bilder/             Optimerade bilder (webp/jpg, max ~300 kB styck)
```

## Regler
- Allt innehåll på svenska. Sätt `lang="sv"`.
- Mobil först: sidan ska fungera bra på mobil, sedan större skärmar.
- Tillgänglighet: alt-texter på bilder, tillräcklig kontrast, semantisk HTML.
- Hitta inte på priser, öppettider eller kontaktuppgifter. Använd `[FYLL I]` och fråga.
- Bokningsknappar länkar till den externa bokningstjänsten. Bygg inget eget bokningssystem.
- Kör inte `git push` och ändra inte publiceringsinställningar utan att fråga.

## Git
- En gren per uppgift, t.ex. `feature/kontaktsida`. Slå ihop till `main` när ägaren godkänt.
- Korta commit-meddelanden på svenska, t.ex. "Lägg till behandlingssida".
