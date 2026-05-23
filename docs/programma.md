# Programma svolto — Secondo quadrimestre

## Reti

- Architettura a livelli, modello TCP/IP e ISO/OSI
- Indirizzamento IPv4: classi, netmask, indirizzo di rete e di broadcast
- Subnetting: calcolo sottoreti, VLSM, esercizi
- Protocolli principali: IP, TCP/UDP, DNS, DHCP, HTTP
- Laboratorio di rete: configurazione, comandi diagnostici (`ping`, `ipconfig`/`ifconfig`, `tracert`), analisi traffico
- Verifica scritta su reti e Internet

**Materiali:** Tibone cap. 3, dispensa IPv4 subnetting, esercizi subnetting svolti, laboratorio di rete. → [Vai alla sezione Reti](reti/index.md)

## Intelligenza Artificiale

### Prerequisiti matematici

- Ripasso vettori e matrici, prodotto scalare, prodotto matrice–vettore
- Trasformazioni lineari (visualizzazione interattiva)
- Distribuzione gaussiana

### Apprendimento supervisionato

- Regressione lineare: esperimento delle molle, fit dei dati
- Esperimento sulla resistenza elettrica (raccolta e analisi dati)
- Funzione di costo, parametri del modello
- Discesa del gradiente (notebook didattico)

### Reti neurali

- Modello del neurone artificiale
- Porte logiche con Keras
- Classificazione MNIST: approccio cosine similarity e rete neurale base
- Parametri, iperparametri, training

**Materiali:** dispensa matrici, ripasso vettori, dispensa regressione molle, lezione gaussiana, neurone completo, presentazione parametri, notebook (gradient descent, MNIST, porte logiche), pagine HTML (esperimento resistenza, trasformazioni lineari, esploratore loss). → [Vai alla sezione AI](ai/index.md)

## Verifiche

- Verifica reti e Internet → [PDF](reti/verifica-reti-internet.pdf){:target="_blank"}
- Verifica vettori e matrici → [PDF](ai/prerequisiti/verifica-vettori-matrici.pdf){:target="_blank"}

## Obiettivi per competenze

### Conoscenze

- Architettura delle reti: stack TCP/IP, protocolli applicativi e di trasporto, indirizzamento IPv4 e subnetting
- Fondamenti matematici dell'AI: vettori, matrici, prodotto scalare, derivate parziali, distribuzione gaussiana
- Modelli di apprendimento supervisionato: regressione lineare, neurone artificiale, reti neurali a singolo strato
- Algoritmi di addestramento: funzione di costo, gradient descent
- Implicazioni etiche, sociali ed economiche dell'AI

### Abilità

- Configurare una rete locale e usare i principali strumenti diagnostici (`ping`, `traceroute`, `ipconfig`)
- Calcolare sottoreti e indirizzi di broadcast a partire da CIDR/netmask
- Leggere, modificare ed eseguire notebook Python per esperimenti di machine learning
- Interpretare grafici di loss, predizioni di un modello e confini di decisione
- Distinguere fra ciò che un modello AI può apprendere e ciò che è fuori dalla sua portata
- Usare il linguaggio specifico della disciplina (peso, bias, gradiente, epoca, attivazione, separabilità)

### Competenze

- Affrontare un problema computazionale scomponendolo in dati, modello, funzione di costo e procedura di ottimizzazione
- Validare sperimentalmente un modello: confrontare predizioni con bersagli, riconoscere i limiti
- Usare strumenti di AI generativa in modo critico, documentando il proprio processo (prompt, iterazioni, contributo personale)
- Orientarsi nel dibattito attuale su AI e tecnologia: distinguere fatti, hype e implicazioni
- Lavorare in autonomia su un elaborato originale, scegliendo formato e profondità in base agli obiettivi
