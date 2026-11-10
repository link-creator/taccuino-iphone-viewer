# Taccuino Viewer (iPhone) – 1.0.0
App per iPhone per **leggere** (solo visualizzazione) i tuoi appunti di Taccuino Business o Personal.

## Come si usa
1. Sull'iPad apri Taccuino → ingranaggio → **Sincronizza con iPhone** (serve la versione 1.11.0 dell'app iPad).
2. Sull'iPhone apri Taccuino Viewer e inserisci lo **stesso codice di attivazione** usato sull'iPad.
3. Vedi cartelle, ricerca e taccuini; tocca un taccuino per scorrere le pagine, pizzica per ingrandire. "Aggiorna" scarica le novità; le pagine già viste restano disponibili offline.
Ogni volta che modifichi qualcosa sull'iPad ripremi "Sincronizza con iPhone".

## Creare il file .ipa (come per l'iPad)
Crea un nuovo repository GitHub (es. `taccuino-iphone`), carica **tutto il contenuto di questa cartella** (compresa la cartella nascosta `.github`), apri Actions → "Build IPA (non firmato)" → Run workflow. Al termine scarichi `TaccuinoiPhone-ipa` da "Artifacts" e lo installi come hai fatto per l'iPad.

## Note
- Sola lettura: non si può modificare nulla dall'iPhone.
- Le pagine sono immagini (non testo selezionabile).
- Chi conosce il codice può leggere gli appunti sincronizzati.
