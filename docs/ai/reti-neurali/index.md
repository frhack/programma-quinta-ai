# Reti neurali

Dal **neurone biologico** al **neurone artificiale**, dalle **porte logiche** (il "Hello, world" delle reti) fino alla classificazione delle cifre **MNIST**.

## Idea

Un neurone artificiale calcola
$$y = \sigma(w_1 x_1 + w_2 x_2 + \dots + w_n x_n + b),$$
dove $\sigma$ è una funzione di attivazione (gradino, sigmoide, ReLU…). Mettiamo tanti neuroni in parallelo e otteniamo un **layer**. Impiliamo più layer e otteniamo una **rete neurale**.

L'addestramento è lo stesso schema della regressione: scegliamo una funzione di costo e usiamo il **gradient descent** per trovare i pesi.

## Materiali

<div class="material-grid">

<a class="material-card" href="neurone-biologico-artificiale.pdf" target="_blank">
  <span class="kind">Dispensa</span>
  <div class="title" markdown="span">Neurone biologico e artificiale</div>
  <div class="desc" markdown="span">Analogia, schema, equazione del neurone, funzioni di attivazione.</div>
</a>

<a class="material-card" href="porte-logiche.ipynb">
  <span class="kind">Notebook</span>
  <div class="title" markdown="span">Porte logiche — didattico</div>
  <div class="desc" markdown="span">AND, OR, NOT con un neurone: scelta dei pesi a mano.</div>
</a>

<a class="material-card" href="porte-logiche-bias.ipynb">
  <span class="kind">Notebook</span>
  <div class="title" markdown="span">Porte logiche con bias</div>
  <div class="desc" markdown="span">Perché serve il bias, effetto sulla retta di separazione.</div>
</a>

<a class="material-card" href="porte-logiche-keras.ipynb">
  <span class="kind">Notebook</span>
  <div class="title" markdown="span">Porte logiche con Keras</div>
  <div class="desc" markdown="span">Lo stesso problema, ora addestrato automaticamente con Keras.</div>
</a>

<a class="material-card" href="mnist-cosine-similarity.ipynb">
  <span class="kind">Notebook</span>
  <div class="title" markdown="span">MNIST — cosine similarity</div>
  <div class="desc" markdown="span">Classificare le cifre confrontandole con le "cifre medie". Niente training: solo vettori e prodotti scalari.</div>
</a>

<a class="material-card" href="mnist-rete-neurale.ipynb">
  <span class="kind">Notebook</span>
  <div class="title" markdown="span">MNIST — rete neurale</div>
  <div class="desc" markdown="span">Rete neurale base addestrata su MNIST. Confronto con l'approccio cosine similarity.</div>
</a>

<a class="material-card" href="loss-surface-explorer.html" target="_blank">
  <span class="kind">Interattivo</span>
  <div class="title" markdown="span">Esploratore della loss surface</div>
  <div class="desc" markdown="span">Cammina sulla superficie della funzione di costo e guarda come la rete impara.</div>
</a>

</div>
