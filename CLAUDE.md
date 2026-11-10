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
- Ändra inte publiceringsinställningar (GitHub Pages, domän) utan att fråga.

## Git
- Varje ändring committas och pushas direkt till `main`. Ägaren av repot vill inte sköta git själv.
- Gör en commit per avgränsad ändring, så att det är lätt att backa.
- Korta commit-meddelanden på svenska, t.ex. "Lägg till behandlingssida".
- Den lokala kopian i C:\Guldkant\guldkant-web uppdateras med Fetch/Pull i GitHub Desktop. Skriv inte direkt i den lokala mappen, så att den inte hamnar i otakt med GitHub.
