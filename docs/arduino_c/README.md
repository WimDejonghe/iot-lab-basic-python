---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---



# Cursus: Arduino C Programmeren voor Beginners

---

## Inleiding

Deze cursus is ontworpen om beginners kennis te laten maken met de basisprincipes van programmeren in C voor de Arduino-microcontroller. De cursus begint met de basisconcepten van programmeren en gaat verder met meer geavanceerde technieken. Aan het einde van de cursus zul je in staat zijn om je eigen projecten te ontwikkelen en de Arduino-microcontroller effectief te gebruiken.

---

## 1: Introductie tot Arduino en de C Programmeertaal


### 1.1 Variabelen en Datatypes
- **Wat is een variabele?**
  - Een variabele is een opslagplaats in het geheugen van de Arduino waarin je gegevens kunt opslaan die je programma gebruikt of bewerkt. Bijvoorbeeld: het opslaan van een getal dat een sensorwaarde vertegenwoordigt.
- **Soorten variabelen:**
  - `int`: Geheel getal, bijvoorbeeld `int ledPin = 13;`
  - `float`: Kommagetal, bijvoorbeeld `float temperatuur = 23.5;`
  - `char`: Enkel karakter, bijvoorbeeld `char letter = 'A';`
  - `boolean`: Waar of niet waar (true of false), bijvoorbeeld `boolean isAan = true;`

### 1.2 Operators
- **Toewijzingsoperator (`=`):** Gebruikt om een waarde toe te wijzen aan een variabele, bijvoorbeeld `int x = 10;`
- **Wiskundige operators:** Optellen (`+`), aftrekken (`-`), vermenigvuldigen (`*`), delen (`/`), bijvoorbeeld `int resultaat = 5 + 3;`
- **Vergelijkingsoperators:** Groter dan (`>`), kleiner dan (`<`), gelijk aan (`==`), bijvoorbeeld `if (x > 5)`

---

## 2: Werken met Invoer en Uitvoer

### 2.1 Digitaal en Analoog Invoer/Output
- Verschil tussen digitale en analoge signalen
- Digitaal lezen en schrijven (`digitalRead()` en `digitalWrite()`)
- Analoog lezen en schrijven (`analogRead()` en `analogWrite()`)


---

## 3: Control Structures, Selecties en Iteraties

### 3.1 Control Structures

#### Selecties (Voorwaardelijke logica)
- **`if`-statement:**
  - Een `if`-statement voert code uit als een bepaalde voorwaarde waar is. Bijvoorbeeld:
    ```c
    if (temperatuur > 25) {
        digitalWrite(ledPin, HIGH); // Zet LED aan als temperatuur groter is dan 25 graden
    }
    ```
- **`else if` en `else`:**
  - Gebruik `else if` en `else` om alternatieve acties te definiëren als de eerste voorwaarde niet waar is.
    ```c
    if (temperatuur > 25) {
        digitalWrite(ledPin, HIGH);
    } else {
        digitalWrite(ledPin, LOW);
    }
    ```

### 3.2 Iteraties (Lussen)
- **`for`-lus:**
  - Wordt gebruikt om een blok code meerdere keren uit te voeren, met een controle over het aantal herhalingen. Bijvoorbeeld:
    ```c
    for (int i = 0; i < 10; i++) {
        digitalWrite(ledPin, HIGH);
        delay(500);
        digitalWrite(ledPin, LOW);
        delay(500);
    }
    ```
- **`while`-lus:**
  - Voert code uit zolang een bepaalde voorwaarde waar is. Bijvoorbeeld:
    ```c
    while (digitalRead(knopPin) == LOW) {
        digitalWrite(ledPin, HIGH);
    }
    ```
- **`do...while`-lus:**
  - Vergelijkbaar met de `while`-lus, maar de code wordt minstens één keer uitgevoerd, ongeacht de conditie:
    ```c
    do {
        digitalWrite(ledPin, HIGH);
    } while (digitalRead(knopPin) == LOW);
    ```

### 3.3 Functies
- **Wat zijn functies en waarom gebruiken we ze?**
  - Functies zijn herbruikbare blokken code die een specifieke taak uitvoeren. Ze maken je code overzichtelijker en makkelijker te onderhouden.
- **Functies definiëren en oproepen:**
  - Een eenvoudige functie:
    ```c
    void zetLEDaan() {
        digitalWrite(ledPin, HIGH);
    }
    ```

- **Overdracht van parameters en het teruggeven van waarden:**
  - Een functie met parameters:
    ```c
    void knipperLED(int keer) {
        for (int i = 0; i < keer; i++) {
            digitalWrite(ledPin, HIGH);
            delay(500);
            digitalWrite(ledPin, LOW);
            delay(500);
        }
    }
    ```


---

Deze cursus biedt een stevige basis om door te stromen naar meer geavanceerde Arduino-projecten en om de vaardigheden die je leert toe te passen in de echte wereld. Veel succes en vooral veel plezier met het ontdekken van de wereld van Arduino en elektronica!
