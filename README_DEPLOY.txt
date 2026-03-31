Kingshot Planner Shared V2

Contenuto del progetto:
- index.html
- assets/hq.png
- assets/banner.png
- netlify/functions/layout.js
- netlify.toml
- package.json

Novita principali:
- Castelli a singola casella.
- Stendardi posizionabili.
- HQ posizionabile con icona dedicata.
- Bear Trap posizionabile e trascinabile.
- Drag libero con offset locale nella casella.
- Salvataggio online condiviso via Netlify Functions + Blobs.

Deploy rapido:
1. Crea un nuovo repository GitHub, per esempio mappa-kingshot-v2.
2. Carica nella root del repo tutti i file di questo pacchetto.
3. Su Netlify: Add new project > Import an existing project > GitHub.
4. Seleziona il repo nuovo.
5. Impostazioni:
   - Branch: main
   - Base directory: vuoto
   - Publish directory: .
   - Functions directory: netlify/functions
6. Se vuoi proteggere le modifiche, aggiungi la environment variable EDITOR_KEY.
7. Dopo il deploy prova:
   https://TUO-SITO.netlify.app/.netlify/functions/layout
   Deve rispondere con un JSON.
8. Poi apri la home del sito, modifica la mappa e premi Salva online.
