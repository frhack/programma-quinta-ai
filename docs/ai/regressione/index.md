# Regressione lineare

Il primo "modello che impara" del corso. Partendo da due esperimenti **reali fatti in classe** — le molle e la resistenza elettrica — troviamo i parametri della retta che meglio si adatta ai dati.

## Idea in tre passaggi

1. **Dati**: coppie $(x_i, y_i)$, per esempio (forza applicata, allungamento della molla).
2. **Modello**: $\hat y = w x + b$, una retta con due parametri $w$ (pendenza) e $b$ (intercetta).
3. **Funzione di costo**: l'errore quadratico medio fra previsioni e valori veri.

$$
L(w, b) = \frac{1}{N}\sum_{i=1}^{N} \big(y_i - (w x_i + b)\big)^2.
$$

Cerchiamo i valori di $w, b$ che **minimizzano** $L$. Per la regressione lineare esiste una **formula chiusa** (minimi quadrati): la ricaviamo per via analitica, partendo dai dati delle molle. Quando una formula chiusa non c'è — caso generale, reti neurali — usiamo invece il metodo numerico del *gradient descent*, trattato nella [sezione successiva](../gradient-descent/index.md).

## Materiali

<div class="material-grid">

<a class="material-card" href="dispensa-regressione-molle.pdf" target="_blank">
  <span class="kind">Dispensa</span>
  <div class="title">Dimostrazione delle formule della regressione lineare</div>
  <div class="desc">Derivazione formale dei minimi quadrati a partire dall'esperimento delle molle: come si ricavano <span class="arithmatex">\(w\)</span> e <span class="arithmatex">\(b\)</span> minimizzando l'errore quadratico.</div>
</a>

<a class="material-card" href="resistance-experiment.html" target="_blank">
  <span class="kind">Interattivo</span>
  <div class="title">Esperimento resistenza elettrica — perché serve la regressione</div>
  <div class="desc">Da una serie di misurazioni <span class="arithmatex">\((V_i, I_i)\)</span> vogliamo stimare la resistenza <span class="arithmatex">\(R\)</span>. Confrontiamo due strade: la <strong>media</strong> dei singoli rapporti <span class="arithmatex">\(V_i/I_i\)</span> e la <strong>regressione lineare</strong> (<span class="arithmatex">\(R\)</span> come pendenza della retta <span class="arithmatex">\(V = R\,I\)</span>). Risultato: la regressione ha varianza minore, è una stima più precisa.</div>
</a>

<a class="material-card" href="lr-loss-surface-explorer.html" target="_blank">
  <span class="kind">Interattivo</span>
  <div class="title">Loss surface explorer</div>
  <div class="desc">Visualizzazione interattiva della funzione di costo <span class="arithmatex">\(L(w, b)\)</span> della regressione lineare. Muovi <span class="arithmatex">\(w\)</span> e <span class="arithmatex">\(b\)</span> e guarda dove "cade" la retta sui dati, e dove ti trovi sulla superficie della loss. Utile per fissare l'idea che <em>"minimizzare la loss"</em> significa cercare il punto più basso di una superficie.</div>
</a>

</div>

> Per il concetto generale di **parametri**, **apprendimento** e **inferenza**, vedi la sezione [Cosa sono i parametri?](../parametri/index.md).
