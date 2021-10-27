# Oppgaver i HTML og CSS

## 1. Lag en ny side (nytt HTML-dokument)
1. Legg til en knapp og et tall (`0`) som viser hvor mange ganger denne knappen har blitt trykket. Vi skal legge til logikken for dette etterpå.
2. Gi den det navnet du vil
3. Style siden som du vil

## 2. Lag en enkel navigasjonsmeny på fremsiden (`index.html`).
1. Denne skal ligge på samme nivå som `header` og `main` tagene (tags på samme nivå kalles ofte for "søsken"/"siblings")

```html
<header>...</header>
<!-- navigasjonsmeny -->
<main>...</main>
```
2. Finn ut hvilken tag som er naturlig å bruke rundt navigasjonsmenyen
3. Legg til lenker til både `about.html` og den nye siden du laget i oppgave 1. 

## 3. (Dersom tid) Lag en ny side
1. Kall gjerne siden `users.html`. Legg til link i navigasjonsmenyen
2. Siden skal vise en **punktliste** . Legg til noen personer, f.eks "Patrick Monslaup" og "Gøran Humlestøl". Finn ut hvilke tags som må brukes for å lage en punktliste.
3. Hva må gjøres for å få punktlisten til å bli en nummerert liste i stedet?

## 4. (Dersom tid) Mer om HTML og CSS

Her er noen eksempler på ting du kan finne ut av:

* Hvordan endre nettsidens tema basert på om brukeren foretrekker dark-mode eller light-mode (hint: [se media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media))
* Animasjoner / keyframes
* `display: flex` brukes for å lage en-dimensjonale layouts (plassere elemeneter horisontalt eller vertikalt). Finnes det en tilsvarende feature for to-dimensjonale layouts som f.eks et bildegalleri?
* Finn ut hvordan man kan definere variabler (custom properties) i CSS, f.eks for å gjenbruke de samme fargene på hele siden.
* Undersøk om siden(e) vi har laget så langt tilfredsstiller kravene for universell utforming / WCAG. [Les mer her](https://www.uutilsynet.no/wcag-standarden/wcag-20-standarden/86)
