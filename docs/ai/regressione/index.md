# Regressione e gradient descent

Il primo "modello che impara" del corso. Partiamo da due esperimenti **reali fatti in classe** — le molle e la resistenza elettrica — e troviamo i parametri della retta che meglio si adatta ai dati.

## Idea in tre passaggi

1. **Dati**: coppie $(x_i, y_i)$, per esempio (forza applicata, allungamento della molla).
2. **Modello**: $\hat y = w x + b$, una retta con due parametri $w$ (pendenza) e $b$ (intercetta).
3. **Funzione di costo**: l'errore quadratico medio
   $$L(w, b) = \frac{1}{N}\sum_{i=1}^{N} \big(y_i - (w x_i + b)\big)^2.$$

Cerchiamo $w, b$ che **minimizzano** $L$. Due strade:

- **Analitica** (minimi quadrati): formule chiuse.
- **Numerica** (gradient descent): si parte da una stima qualsiasi e si "scende lungo la pendenza" della funzione di costo. Sarà questa la strada generale per le reti neurali.

## Materiali

<div class="material-grid">

<a class="material-card" href="dispensa-regressione-molle.pdf" target="_blank">
  <span class="kind">Dispensa</span>
  <div class="title">Regressione lineare — esperimento molle</div>
  <div class="desc">Raccolta dati in classe, fit della retta, interpretazione fisica dei parametri.</div>
</a>

<a class="material-card" href="resistance-experiment.html" target="_blank">
  <span class="kind">Interattivo</span>
  <div class="title">Esperimento resistenza elettrica</div>
  <div class="desc">Visualizzazione interattiva dei dati e del fit.</div>
</a>

<a class="material-card" href="presentazione-parametri.pdf" target="_blank">
  <span class="kind">Slide</span>
  <div class="title">Parametri di un modello</div>
  <div class="desc">Cosa sono i parametri, come si trovano, intuizione del gradient descent.</div>
</a>

<a class="material-card" href="gradient-descent.ipynb">
  <span class="kind">Notebook</span>
  <div class="title">Gradient descent didattico</div>
  <div class="desc">Implementazione passo-passo in Python con grafici della loss che scende.</div>
</a>

</div>
