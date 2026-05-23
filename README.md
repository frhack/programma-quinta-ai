# Sito 5ª — Intelligenza Artificiale

Sito statico (MkDocs Material) con programma svolto e materiale didattico per il modulo di Intelligenza Artificiale della classe quinta del Liceo Scientifico — Scienze Applicate.

## Anteprima locale

Servono Python 3.10+ e un ambiente virtuale.

```bash
python3 -m venv .venv
source .venv/bin/activate           # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Apri http://127.0.0.1:8000

## Pubblicazione su GitHub Pages

Il workflow `.github/workflows/deploy.yml` builda e pubblica automaticamente a ogni push su `main`. Per attivarlo la prima volta:

1. Crea un repo su GitHub (es. `programma-quinta-ai`) e fai push.
2. In `Settings → Pages` scegli **Source: GitHub Actions**.
3. Aggiorna `site_url:` in `mkdocs.yml` con l'URL definitivo (es. `https://utente.github.io/programma-quinta-ai/`).

## Struttura

```
docs/
├── index.md              # Home
├── programma.md          # Programma svolto
├── elaborato.md          # Consegna elaborato AI
└── ai/                   # Modulo AI
    ├── introduzione/      # Cos'è l'AI: AGI, singolarità, Hinton
    ├── programmazione/    # Cos'è un programma (+ PDF)
    ├── prerequisiti/
    ├── parametri/         # Apprendimento vs inferenza
    ├── regressione/       # Regressione lineare (minimi quadrati)
    ├── gradient-descent/  # Metodo numerico (notebook)
    └── reti-neurali/
```

## Licenza materiali

I materiali didattici (dispense, slide, notebook) sono dell'autore del corso. I contributi degli studenti che dovessero entrare nel sito vanno aggiunti citando l'autore.
