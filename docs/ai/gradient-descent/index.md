# Gradient descent

Per la regressione lineare possiamo trovare i parametri $w, b$ in modo **analitico**, con la formula chiusa dei minimi quadrati (vedi [Regressione lineare](../regressione/index.md)). Ma quando il modello diventa più complesso — un neurone, una rete neurale — quella formula chiusa **non esiste più**. Serve un metodo che funzioni in tutti i casi: il *gradient descent*.

## Idea

La funzione di costo $L(w, b)$ è una "superficie" che dipende dai parametri del modello. I parametri ottimi stanno nel punto più basso di questa superficie.

Il **gradiente** $\nabla L$ è un vettore che, in ogni punto, indica la **direzione di massima salita**. Il gradient descent procede così:

1. parto da una stima qualsiasi $w_0, b_0$;
2. calcolo il gradiente nel punto corrente;
3. faccio un piccolo passo nella **direzione opposta** al gradiente (cioè in discesa):
   $$w \leftarrow w - \eta \,\frac{\partial L}{\partial w}, \qquad b \leftarrow b - \eta \,\frac{\partial L}{\partial b};$$
4. ripeto finché la loss non smette di scendere.

Il numero $\eta$ è il **learning rate**: troppo grande e si rimbalza fuori dal minimo; troppo piccolo e l'algoritmo è lentissimo.

## Materiali

<div class="material-grid">

<a class="material-card" href="gradient-descent.ipynb">
  <span class="kind">Notebook</span>
  <div class="title">Gradient descent didattico</div>
  <div class="desc">Implementazione passo-passo in Python: dai dati delle molle alla loss che scende, con grafici di ogni iterazione.</div>
</a>

</div>
