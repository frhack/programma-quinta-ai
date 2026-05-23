# Intelligenza Artificiale

Il modulo parte da **cos'è l'AI** (definizioni di AGI e singolarità, il dibattito attuale), passa da **cos'è un programma** e dai **prerequisiti matematici** (vettori, matrici, gaussiana), arriva alla **regressione lineare** come primo modello da addestrare e al **gradient descent** come metodo numerico per addestrarlo, e infine al **neurone artificiale** e alle **reti neurali** applicate al riconoscimento delle cifre (MNIST).

## Percorso

<div class="material-grid">

<a class="material-card" href="introduzione/">
  <span class="kind">Sezione</span>
  <div class="title">Cos'è l'AI</div>
  <div class="desc">Definizioni di AGI e singolarità tecnologica. Il discorso di Geoffrey Hinton (Nobel per la Fisica 2024).</div>
</a>

<a class="material-card" href="programmazione/">
  <span class="kind">Sezione</span>
  <div class="title">Programmazione</div>
  <div class="desc">Cosa è un programma. Sequenze di istruzioni, algoritmi.</div>
</a>

<a class="material-card" href="prerequisiti/">
  <span class="kind">Sezione</span>
  <div class="title">Prerequisiti matematici</div>
  <div class="desc">Vettori, matrici, prodotto scalare, trasformazioni lineari, gaussiana.</div>
</a>

<a class="material-card" href="parametri/">
  <span class="kind">Sezione</span>
  <div class="title">Cosa sono i parametri?</div>
  <div class="desc">I "numeri regolabili" di un modello. Apprendimento (trovare i parametri dai dati) vs inferenza (usarli per fare previsioni).</div>
</a>

<a class="material-card" href="regressione/">
  <span class="kind">Sezione</span>
  <div class="title">Regressione lineare</div>
  <div class="desc">Dimostrazione delle formule (minimi quadrati) dai dati delle molle; perché regressione batte la media per stimare R nell'esperimento sulla resistenza.</div>
</a>

<a class="material-card" href="gradient-descent/">
  <span class="kind">Sezione</span>
  <div class="title">Gradient descent</div>
  <div class="desc">Metodo numerico generale per minimizzare la funzione di costo. Notebook didattico passo-passo.</div>
</a>

<a class="material-card" href="reti-neurali/">
  <span class="kind">Sezione</span>
  <div class="title">Reti neurali</div>
  <div class="desc">Neurone artificiale, porte logiche, MNIST con cosine similarity e rete neurale.</div>
</a>

</div>

## Filo conduttore

1. **Cos'è l'AI** e dove si pensa che stia andando: AGI, singolarità, il dibattito acceso da chi l'AI l'ha costruita (Hinton).
2. Cos'è un **programma**: una sequenza di istruzioni che un calcolatore esegue.
3. Servono **vettori, matrici, derivate parziali**: senza questi non c'è AI.
4. Un primo modello (la **retta di regressione**): dati, modello, funzione di costo. I parametri si ricavano con una **formula chiusa** (minimi quadrati).
5. Quando la formula chiusa non c'è, serve un metodo numerico: il **gradient descent**.
6. Generalizziamo: una somma pesata + non linearità = **neurone artificiale**.
7. Più neuroni in parallelo = **layer**. Più layer = **rete neurale**. La addestriamo su MNIST e capiamo cosa significa "imparare dai dati".
