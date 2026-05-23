# Gradient descent

Per la regressione lineare possiamo trovare i parametri $w, b$ in modo **analitico**, con la formula chiusa dei minimi quadrati (vedi [Regressione lineare](../regressione/index.md)). Ma quando il modello diventa più complesso — un neurone, una rete neurale — quella formula chiusa **non esiste più**. Serve un metodo numerico che funzioni in tutti i casi: il *gradient descent*.

## Idea

La funzione di costo $L(w, b)$ è una "superficie" che dipende dai parametri del modello. I parametri ottimi stanno nel punto più basso di questa superficie.

Il **gradiente** $\nabla L$ è un vettore che, in ogni punto, indica la **direzione di massima salita**. Il gradient descent procede così:

1. parto da una stima qualsiasi $w_0, b_0$;
2. calcolo il gradiente nel punto corrente;
3. faccio un piccolo passo nella **direzione opposta** al gradiente, cioè in discesa;
4. ripeto finché la loss non smette di scendere.

La regola di aggiornamento dei parametri è:

$$
w \leftarrow w - \eta \,\frac{\partial L}{\partial w}, \qquad b \leftarrow b - \eta \,\frac{\partial L}{\partial b}.
$$

Il numero $\eta$ è il **learning rate**: troppo grande e si rimbalza fuori dal minimo; troppo piccolo e l'algoritmo è lentissimo.

## Materiali

### Costruire l'intuizione

<div class="material-grid">

<a class="material-card" href="derivative.html" target="_blank">
  <span class="kind">Interattivo</span>
  <div class="title">Gradiente in una dimensione</div>
  <div class="desc">Funzione di una variabile: vedi come la derivata (pendenza della tangente) cambia muovendoti lungo la curva. Il "gradiente 1D" è la derivata.</div>
</a>

<a class="material-card" href="grad.html" target="_blank">
  <span class="kind">Interattivo</span>
  <div class="title">Gradiente in due dimensioni</div>
  <div class="desc">Funzione di due variabili: il gradiente è un vettore con due componenti (derivate parziali) che punta nella direzione di massima salita.</div>
</a>

</div>

### Vedere il gradient descent al lavoro

<div class="material-grid">

<a class="material-card" href="https://frhack.github.io/CORSO_AI/gd_live.html" target="_blank">
  <span class="kind">Interattivo ↗</span>
  <div class="title">Gradient descent — vista 2D</div>
  <div class="desc">L'algoritmo che scende lungo una funzione di costo, visualizzato sulle curve di livello (2D). Modifica learning rate e punto di partenza.</div>
</a>

<a class="material-card" href="https://frhack.github.io/CORSO_AI/gd_live_3d.html" target="_blank">
  <span class="kind">Interattivo ↗</span>
  <div class="title">Gradient descent — vista 3D</div>
  <div class="desc">La stessa discesa, vista come "una pallina che rotola" sulla superficie tridimensionale della loss.</div>
</a>

</div>

### Applicazione: regressione lineare

<div class="material-grid">

<a class="material-card" href="https://github.com/frhack/oli_ai/blob/main/notebooks/oli_ai_gradient_descent_didattica.ipynb" target="_blank">
  <span class="kind">Notebook ↗</span>
  <div class="title">Trovare la retta che minimizza il costo (gradient descent)</div>
  <div class="desc">Notebook didattico su GitHub: si applica il gradient descent ai dati delle molle per trovare $w, b$ che minimizzano la funzione di costo. Stesso problema della formula chiusa, risolto numericamente.</div>
</a>

<a class="material-card" href="https://frhack.github.io/CORSO_AI/demo_lr_loss.html" target="_blank">
  <span class="kind">Interattivo ↗</span>
  <div class="title">Demo: superficie della loss + traiettoria del GD</div>
  <div class="desc">Visualizzazione real-time per la regressione lineare. A sinistra: i dati con la retta che si aggiusta epoca per epoca. A destra: la superficie della loss in $(w, b)$ con curve di livello e la traiettoria del gradient descent che scivola verso il minimo. Il modo più diretto per "vedere" cosa fa l'algoritmo che il notebook qui sopra implementa.</div>
</a>

</div>
