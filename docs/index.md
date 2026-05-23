# Intelligenza Artificiale — 5ª LSSA

Sito di supporto per la classe quinta del Liceo Scientifico — opzione Scienze Applicate. Raccoglie il **materiale didattico** (dispense, slide, notebook, pagine interattive) per il modulo di AI.

## Percorso

<div class="material-grid">

<a class="material-card" href="ai/introduzione/">
  <span class="kind">Sezione</span>
  <div class="title">Cos'è l'AI</div>
  <div class="desc">Definizioni di AGI e singolarità tecnologica. Il discorso di Geoffrey Hinton (Nobel per la Fisica 2024).</div>
</a>

<a class="material-card" href="ai/programmazione/">
  <span class="kind">Sezione</span>
  <div class="title">Programmazione</div>
  <div class="desc">Cosa è un programma. Sequenze di istruzioni, algoritmi.</div>
</a>

<a class="material-card" href="ai/prerequisiti/">
  <span class="kind">Sezione</span>
  <div class="title">Prerequisiti matematici</div>
  <div class="desc">Vettori, matrici, prodotto scalare, trasformazioni lineari, gaussiana.</div>
</a>

<a class="material-card" href="ai/parametri/">
  <span class="kind">Sezione</span>
  <div class="title">Cosa sono i parametri?</div>
  <div class="desc">I "numeri regolabili" di un modello. Apprendimento (trovare i parametri dai dati) vs inferenza (usarli per fare previsioni).</div>
</a>

<a class="material-card" href="ai/regressione/">
  <span class="kind">Sezione</span>
  <div class="title">Regressione lineare</div>
  <div class="desc">Dimostrazione delle formule (minimi quadrati) dai dati delle molle; perché regressione batte la media per stimare R nell'esperimento sulla resistenza.</div>
</a>

<a class="material-card" href="ai/gradient-descent/">
  <span class="kind">Sezione</span>
  <div class="title">Gradient descent</div>
  <div class="desc">Metodo numerico generale per minimizzare la funzione di costo. Derivate, gradienti, traiettorie sulla loss surface.</div>
</a>

<a class="material-card" href="ai/reti-neurali/">
  <span class="kind">Sezione</span>
  <div class="title">Reti neurali</div>
  <div class="desc">Neurone artificiale, porte logiche (AND, OR, NOR, XOR), MNIST con rete neurale.</div>
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

## Come usare il sito

- I **PDF** si aprono direttamente nel browser; puoi anche scaricarli.
- I **notebook Jupyter** sono linkati al repo GitHub `oli_ai`: si leggono online e si possono aprire in Colab.
- Le **pagine interattive** (Pyodide, esploratori della loss, visualizzazioni) girano direttamente nel browser, senza installazioni.

!!! tip "Suggerimento per l'elaborato"
    Prima di scegliere il tema, dai un'occhiata alla sezione [Elaborato finale](elaborato.md). Va benissimo partire da un argomento che ti ha incuriosito in classe e provare a spiegarlo *meglio* o a *guardarlo da un'altra angolazione*.

---

In fondo alla nav laterale trovi anche il [**programma svolto**](programma.md) come riferimento sintetico.
