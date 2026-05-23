# Reti neurali

Dal **neurone biologico** al **neurone artificiale**, dalle **porte logiche** (il "Hello, world" delle reti) fino alla classificazione delle cifre **MNIST**.

## Idea

Un neurone artificiale calcola
$$y = \sigma(w_1 x_1 + w_2 x_2 + \dots + w_n x_n + b),$$
dove $\sigma$ è una funzione di attivazione (gradino, sigmoide, ReLU…). Mettiamo tanti neuroni in parallelo e otteniamo un **layer**. Impiliamo più layer e otteniamo una **rete neurale**.

L'addestramento è lo stesso schema della regressione: scegliamo una funzione di costo e usiamo il **gradient descent** per trovare i pesi.

## Riferimento teorico

<div class="material-grid">

<a class="material-card" href="neurone-biologico-artificiale.pdf" target="_blank">
  <span class="kind">Dispensa</span>
  <div class="title">Neurone biologico e artificiale</div>
  <div class="desc">Analogia col neurone biologico, schema del neurone artificiale, equazione, funzioni di attivazione. Il punto di partenza.</div>
</a>

</div>

## Il percorso in tre passi

Ogni "ingrediente" che aggiungiamo al neurone amplia la classe di funzioni che riesce a imparare. Tre notebook didattici, ognuno costruito sopra il precedente.

### 1. Neurone come prodotto scalare → AND, OR

Il neurone più semplice possibile: una somma pesata degli input — geometricamente, un **prodotto scalare** fra il vettore degli ingressi e il vettore dei pesi. Niente bias, niente non linearità.

Con i giusti pesi può rappresentare le funzioni logiche **linearmente separabili**: ovvero quelle in cui possiamo tracciare una retta nel piano $(x_1, x_2)$ che separa gli ingressi che restituiscono $0$ da quelli che restituiscono $1$. **AND** e **OR** appartengono a questa categoria.

<div class="material-grid">

<a class="material-card" href="https://github.com/frhack/oli_ai/blob/main/notebooks/oli_ai_porte_logiche_didattica.ipynb" target="_blank">
  <span class="kind">Notebook ↗</span>
  <div class="title">Porte logiche: AND, OR con un neurone</div>
  <div class="desc">Un singolo neurone come prodotto scalare. Si scelgono i pesi (a mano, poi imparati) per implementare AND e OR. Vediamo geometricamente la retta di separazione nel piano degli ingressi.</div>
</a>

</div>

### 2. + Bias → anche NOR

Aggiungiamo un **bias** $b$ alla somma pesata. Effetto geometrico: la retta di separazione non è più obbligata a passare per l'origine, può essere traslata ovunque nel piano.

Risultato: il neurone — sempre un solo neurone — adesso può implementare anche **NOR** (oltre a AND e OR già visti). Più in generale, qualsiasi funzione linearmente separabile.

<div class="material-grid">

<a class="material-card" href="https://github.com/frhack/oli_ai/blob/main/notebooks/oli_ai_porte_logiche_didattica_bias.ipynb" target="_blank">
  <span class="kind">Notebook ↗</span>
  <div class="title">Porte logiche con bias: anche NOR</div>
  <div class="desc">Si introduce il termine di bias. Si rivede AND/OR e si aggiunge NOR. Si vede chiaramente che il bias <em>sposta</em> la retta di separazione.</div>
</a>

</div>

### 3. + Funzione di attivazione e rete → anche XOR

C'è un muro che un singolo neurone non può attraversare: **XOR non è linearmente separabile**. Non esiste una retta nel piano che separi i suoi $1$ dai suoi $0$. Servono due ingredienti in più:

- una **funzione di attivazione** non lineare (sigmoide, ReLU, gradino…);
- più neuroni organizzati in una **rete** con almeno uno strato nascosto.

A questo punto la rete riesce a rappresentare anche XOR (e in linea di principio qualsiasi funzione).

<div class="material-grid">

<a class="material-card" href="https://github.com/frhack/oli_ai/blob/main/notebooks/oli_ai_porte_logiche_didattica_attivazione.ipynb" target="_blank">
  <span class="kind">Notebook ↗</span>
  <div class="title">Rete con attivazione: anche XOR</div>
  <div class="desc">Si aggiungono funzione di attivazione e strato nascosto. La piccola rete che ne risulta impara XOR, oltre a tutto quello che si poteva già fare con AND, OR, NOR.</div>
</a>

</div>

## Applicazione: classificare le cifre (MNIST)

Una volta capito il meccanismo "neurone → bias → rete con attivazione", l'applicazione realistica è classificare immagini di **cifre scritte a mano** (dataset MNIST). Ingresso: 784 pixel. Uscita: una delle 10 classi (0–9). Pesi appresi dai dati col gradient descent.

<div class="material-grid">

<a class="material-card" href="https://github.com/frhack/oli_ai/blob/main/notebooks/oli_ai_mnist_rete_neurale_didattica.ipynb" target="_blank">
  <span class="kind">Notebook ↗</span>
  <div class="title">MNIST con una rete neurale</div>
  <div class="desc">Architettura della rete, training su MNIST, valutazione dell'accuratezza. Da confrontare con l'approccio cosine similarity visto nella sezione <a href="../parametri/">Cosa sono i parametri?</a> — entrambi classificano cifre, ma uno "impara" davvero i pesi e l'altro no.</div>
</a>

</div>
