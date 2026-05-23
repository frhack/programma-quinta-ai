# Cosa sono i parametri?

I **parametri** sono i "numeri regolabili" di un modello: i valori che possiamo modificare per far sì che il modello si adatti ai dati.

Qualche esempio per ordine di grandezza:

| Modello | Numero di parametri |
|---|---|
| Retta $y = wx + b$ | 2 ($w$, $b$) |
| Polinomio di grado 3 | 4 |
| Piccola rete neurale | qualche centinaio / migliaio |
| Modelli alla base di ChatGPT, Claude, Gemini | da centinaia di miliardi a oltre un trilione |

Ogni problema di AI si svolge sempre in **due fasi distinte**: prima si addestra (apprendimento), poi si usa (inferenza).

---

## 1. Apprendimento (training)

**Trovare i valori dei parametri a partire dai dati.**

Servono quattro ingredienti:

1. **Dati di esempio**: coppie input → output corretto (oppure solo input, nei modelli non supervisionati).
2. Un **modello** con dei parametri liberi (es. la retta $\hat y = wx + b$).
3. Una **funzione di costo** che misura quanto le previsioni del modello sono sbagliate rispetto agli esempi.
4. Una **procedura di ottimizzazione** che cambia i parametri in modo che la funzione di costo diminuisca: una formula chiusa (minimi quadrati) o un metodo numerico (gradient descent).

Quando la procedura termina, i parametri hanno valori specifici: il modello è "addestrato".

L'apprendimento è la fase **lenta e costosa**. Per modelli grandi richiede grandi quantità di dati, hardware specializzato (GPU) e ore o settimane di calcolo. Si fa una volta sola, o poche volte.

---

## 2. Inferenza (predizione)

**Usare i parametri trovati per fare previsioni su dati nuovi, senza più modificarli.**

Esempio concreto: dopo aver addestrato la retta sui dati delle molle ottengo, mettiamo, $w = 0{,}42$ e $b = 0{,}1$. Per un nuovo peso applicato $x = 5\text{ kg}$, calcolo

$$\hat y = 0{,}42 \cdot 5 + 0{,}1 = 2{,}2 \text{ cm}.$$

Questa è inferenza: i parametri restano fissi, cambia solo l'input.

L'inferenza è la fase **veloce ed economica**: una volta che il modello è pronto, si esegue tantissime volte. Quando interroghi ChatGPT, ogni risposta è un'inferenza che utilizza parametri addestrati mesi prima.

---

## Riassunto in una riga

> **Apprendimento** = trovare i parametri dai dati. **Inferenza** = usare i parametri per fare previsioni.

## Materiali

<div class="material-grid">

<a class="material-card" href="presentazione-parametri.pdf" target="_blank">
  <span class="kind">Slide</span>
  <div class="title">Parametri di un modello</div>
  <div class="desc">Cosa sono i parametri, come si trovano, intuizione che apre la strada al gradient descent.</div>
</a>

</div>
