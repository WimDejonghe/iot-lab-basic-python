---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---



# Cursus: python voor MicroPython

---

## Inleiding

Deze cursus is ontworpen om beginners kennis te laten maken met de basisprincipes van programmeren in python voor de MicroPython-microcontroller. De cursus begint met de basisconcepten van programmeren en gaat verder met meer geavanceerde technieken. Aan het einde van de cursus zul je in staat zijn om je eigen projecten te ontwikkelen en de MicroPython-microcontroller effectief te gebruiken.

---

## 1: Introductie tot python


### 1.1 Variabelen en Datatypes
- **Wat is een variabele?**
  - Een variabele is een opslagplaats in het geheugen van de processor waarin je gegevens kunt opslaan die je programma gebruikt of bewerkt. Bijvoorbeeld: het opslaan van een getal dat een sensorwaarde vertegenwoordigt.
- **Soorten variabelen:**
  - `int`: Geheel getal, bijvoorbeeld `ledPin = 13`
  - `float`: Kommagetal, bijvoorbeeld `temperatuur = 23.5`
  - `char`: Enkel karakter, bijvoorbeeld `letter = 'A'`
  - `boolean`: Waar of niet waar (true of false), bijvoorbeeld `isAan = true`
  - `string`: Is een lijst (array) van char's `school = 'VIVES'`

### 1.2 Operators
- **Toewijzingsoperator (`=`):** Gebruikt om een waarde toe te wijzen aan een variabele, bijvoorbeeld `x = 10`
- **Wiskundige operators:** Optellen (`+`), aftrekken (`-`), vermenigvuldigen (`*`), delen (`/`), bijvoorbeeld `resultaat = 5 + 3`
- **Vergelijkingsoperators:** Groter dan (`>`), kleiner dan (`<`), gelijk aan (`==`), bijvoorbeeld `if (x > 5)`

---

## 2: Werken met Invoer en Uitvoer

### 2.1 Digitaal en Analoog Invoer/Output
- Verschil tussen digitale en analoge signalen
- Digitaal lezen en schrijven (`Pin.value()` en `Pin.value(True/False)`)
- Analoog lezen en schrijven (`adc.read()` en `dac.write(INTEGER)`)


---

## 3: Control Structures, Selecties en Iteraties

### 3.1 Control Structures

#### Selecties (Voorwaardelijke logica)
- **`if`-statement:**
  - Een `if`-statement voert code uit als een bepaalde voorwaarde waar is. Bijvoorbeeld:
    ```python
    if (temperatuur > 25):
        Pin.value(HIGH) # Zet LED aan als temperatuur groter is dan 25 graden
    
    ```
- **`else if` en `else`:**
  - Gebruik `else if` en `else` om alternatieve acties te definiëren als de eerste voorwaarde niet waar is.
    ```python
    if (temperatuur > 25):
        Pin.value(HIGH)
    else:
        Pin.value(LOW)
    
    ```

### 3.2 Iteraties (Lussen)
- **`for`-lus:**
  - Wordt gebruikt om een blok code meerdere keren uit te voeren, met een controle over het aantal herhalingen. Bijvoorbeeld:
    ```python
    for x in range(10):
        Pin.value(HIGH)
        sleep(0.5)
        Pin.value(LOW)
        sleep(0.5)    
    ```
- **`while`-lus:**
  - Voert code uit zolang een bepaalde voorwaarde waar is. Bijvoorbeeld:
    ```python
    while (Pin_drukknop.value() == LOW):
        Pin_LED.value(HIGH)
    Pin_LED.value(LOW)
    ```

### 3.3 Functies
- **Wat zijn functies en waarom gebruiken we ze?**
  - Functies zijn herbruikbare blokken code die een specifieke taak uitvoeren. Ze maken je code overzichtelijker en makkelijker te onderhouden.
- **Functies definiëren en oproepen:**
  - Een eenvoudige functie:
    ```python
    def zetLEDaan():
        Pin.value(HIGH)
    
    ```

- **Overdracht van parameters en het teruggeven van waarden:**
  - Een functie met parameters:
    ```python
    def knipperLED(aantalkeer): 
        for x in range(aantalkeer):
          Pin.value(HIGH)
          sleep(0.5)
          Pin.value(LOW)
          sleep(0.5)    
        
    
    ```
  - Een functie met parameters en teruggeef waarde:
    ```python
    def optelling(getal1, getal2): 
        som=getal1+getal2
        return (som) 
        
    
    ```

---

Deze cursus biedt een stevige basis om door te stromen naar meer geavanceerde projecten en om de vaardigheden die je leert toe te passen in de echte wereld. Veel succes en vooral veel plezier met het ontdekken van de wereld van elektronica!
