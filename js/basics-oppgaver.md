# JS Basics oppgaver

## 1. Sum av liste

Gitt en liste `let tall = [1,6,3,9,8]`.

Lag en funksjon som tar inn tallene og skriver summen til konsollen med `console.log`.

## 2. Utlisting av persondata

Lag et par person-objekt med navn og alder og legg dem til i en liste. Bruk en for løkke for å iterere over og skrive ut hva personene heter og deres alder i en setning.

## 3. Kondisjonell utlisting

Endre utlisting i oppgave 2 til å kun skrive ut personer over en gitt alder.

## 4. Finn personer etter personnummer

Legg til et nytt felt med fiktive personnumer på personene i oppgave 2. Lag en ny funksjon som gitt et personnummer returnerer navnet på en person.

Merk: "Felt" eller "property" er et begrep for navn-verdi-parene som finnes i objekter. F.eks er `name` og `age` felter i person-objektet i oppgave 2.

## 5. Hente ut personer fra objekt i stedet for en array

Dersom listen over personer etterhvert blir veldig lang og/eller vi trenger å finne personer ut i fra personnummer ofte kan det være lurt å lagre personene i en struktur som gjør at vi ikke trenger å gå gjennom hele listen med en for-løkke hver gang.
Ofte brukes unike id'er som "key" i et hashmap eller objekt.
I denne oppgaven skal du lagre personene dine i et objekt i stedet for en liste/array, slik at vi enkelt kan slå opp spesifikke personer gitt et personnummer.
Oppdater funksjonen fra oppgave 4 til å bruke dette objektet i stedet for en for-løkke.

