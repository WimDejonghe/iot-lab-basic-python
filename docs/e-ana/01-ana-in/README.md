---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# Analoge ingangen

Microcontrollers worden vaak gebruikt als interface om analoge signalen om te zetten naar een digitale waarde.
Zij moeten in staat zijn om analoge ingangssignalen, bijvoorbeeld van een microfoon of temperatuursensor, om te zetten in digitale gegevens.
In deze bundel wordt uitgelegd hoe een analoge ingang moet aangesloten worden bij de Adafruit ESP32 feather.

## Analoge ingangspinnen van de ESP32 feather van Adafruit

![example image](./images/vsc_28.png "De digitale IO-pinnen van de Adafruit Huzzah ESP32 feather")

![example image](./images/feather_pinouttop.jpg "De digitale IO-pinnen van de Adafruit Huzzah ESP32 feather")

![example image](./images/esp32_2.jpg "De digitale IO-pinnen van de Adafruit Huzzah ESP32 feather")

Enkel de pinnen met de groene labels zoals in de eerste figuur kunnen als analoge ingangen gebruikt worden. Behalve pin 13 is een analoge ingang die verbonden is met een weerstandsdeler die
verbonden is met VBAT. Deze wordt gebruikt om de batterijspanning te kunnen meten.
De benaming van de analoge ingangen gaat van A0 tot en met A12.
Als je gebruik maakt van wifi kan enkel de analoge ingangen gebruikt worden die gebruik maken van ADC2. Dit wil zeggen dat je enkel A0, A1, A5, A6, A8, A10, A11 en A12 kan gebruiken als men wifi gebruikt.

## Principe en werking van een ADC

Een analoog naar digitaal convertor (ADC) is een elektronische schakeling waarvan de waarde van de uitgang recht evenredig is met het analoge ingangssignaal.
De ADC meet de ingangsspanning en geeft een binaire waarde aan de uitgang evenredig met de ingangsspanning.
Het ingangsbereik van de ADC wordt bepaald door een referentie spanning (Vref). Bij de meeste controllers wordt hier de voedingsspanning gebruikt.

![example image](./images/adc1.png "Blokschema van een analoog naar digitaal converter.")

De conversie wordt gestart door de digitale ingang SC (Start conversion) hoog te maken.
De conversie duurt een tijdje. Als de conversie volbracht is wordt de digitale EOC (End of conversion) uitgang hoog gemaakt.
Vanaf dat de digitale ingang OE (Output Enable) hoog gemaakt wordt zal de digitale waarde op een data-bus worden geplaatst.

In de volgende figuur wordt er een 3 bit conversie gedaan van het analoog signaal. Men krijgt hier de typische trapfunctie met hier 8 treden. Met 3 bit verdeelt men het bereik in 23 = 8 stappen.

![example image](./images/adc2.png "Principe van een 3-bit ADC conversie.")

De hoogste digitale waarde aan de uitgang komt overeen met de referentiespanning, die de maximum spanning is aan de ingang.

### Resolutie en afwijking.

Door een analoog signaal om te zetten in een digitaal signaal benaderen we bijna het werkelijk verloop, aangezien elke digitale uitgangswaarde een zeer klein bereik van analoge ingangsspanningen moet vertegenwoordigen, d.w.z. de breedte van een van de treden op de ‘trap’ n.

Als we een analoog signaal met een bereik van 0V tot 3,3V willen omzetten naar een 8-bits digitaal
signaal, dan zijn er 256 (d.w.z. 2<sup>8</sup>) verschillende uitgangswaarden. Elke trap heeft een breedte van:

$$\frac{3,3V} {256} = 12,89mV$$

De grootste afwijking is de helft van één stap, dus: 

$$\frac{12,89mV} {2} = 6,45mV$$

De ESP32 feather van Adafruit gebruikt een 12 bits ADC. Dit leidt tot een stapbreedte van:

$$\frac{3,3V} {2^{12}} = 800µV$$

De grootste afwijking is de helft van één stap, dus: 

$$\frac{800µV} {2} = 400µV$$

### Sampling frequentie

Bij het omzetten van een analoog signaal naar digitaal signalen nemen we herhaaldelijk een 'sample' en kwantificeren dit tot de nauwkeurigheid die de resolutie van onze ADC aangeeft.
Hoe meer monsters er worden genomen, hoe nauwkeuriger de digitale gegevens zijn. Monsters of samples worden normaal gesproken op vaste tijdstippen genomen (d.w.z. bv. om de 0,2 ms) en bepalen de bemonsteringsfrequentie (het aantal monsters dat per seconde wordt genomen).
De bemonsteringsfrequentie moet worden gekozen in verhouding tot de snelheid waarmee de bemonsterde gegevens veranderen. Als de samplefrequentie te laag is, is het mogelijk dat snelle veranderingen in het analoge signaal niet duidelijk zijn in het resulterende digitale signaal.
Daarom stelt het Nyquist-bemonsteringscriterium dat de bemonsteringsfrequentie ten minste het dubbele moet zijn van de hoogste frequentie van het ingangssignaal.

![example image](./images/adc3.png "Het sampelen van een analoog signaal.")

## ADC Read

Om een analoge ingang te gebruiken hoeft men niet zoals een digitale in -of uitgang te zeggen hoe men de pin wil gebruiken. Om een analoge spanning om te zetten naar een integer moet men enkel de methode ADC.read() gebruiken.
In volgende code wordt een variabele met de naam adc gemaakt op basis van de klasse ADC binnen de Machine library van MicoPython. Met ADC.read() wordt de spanning op de pin waar de POTENTIOMETER (=A0) mee verbonden is op de ESP32 die zich bevindt tussen 0V en 3,3V omgezet wordt naar een getal tussen 0 en 4095.
Dit getal wordt in de integer variabele adc geplaatst.

```python
import machine
adc = machine.ADC(26) #eenmalige declaratie var variabele adc van het type ADC
#De methode ADC bezit 1 parameter nl de pin van de ESP32

adc.read() #lezen van de analoge waarde
```

## Aansluiten van een analoge spanning aan een analoge ingang.

De meeste analoge sensoren zullen een voedingspanning nodig hebben. In de volgende figuur is dit Vcc met namelijk de waarde 3,3V. Natuurlijk niet te vergeten moet de GND aangesloten worden. Hoe een analoge senor moet aangesloten worden staat ook in de manual van de sensor.
De sensor heeft natuurlijk ook een uitgang waarop de sensor een spanning zal plaatsen die niet hoger mag zijn dan de 3,3V van de ESP32.

![example image](./images/adc4.png "Aansluiten van een analoge sensor aan de ESP32 feather van Adafruit.")

In de volgende figuur is een potentiometer aangesloten op de analoge ingang A0 van de ESP32. Bij een potentiometer wordt de loper aangesloten op de ingang. Aan de andere aansluitingen wordt de voedingsspanning (3,3V) en de GND aangesloten.

![example image](./images/adc5.png "Aansluiten van een potentiometer aan de ESP32 feather van Adafruit.")

::: warning
Let op de waarde van de potentiometer. Neem deze niet te klein!! Ergens tussen 4k7 en 15k is ok. Weet je ook waarom?
:::

> :bulb: **Andere methoden:** Er zijn nog enkele andere methoden die kunnen worden gebruikt bij het lezen van een analoge ingang.

```python
from machine import ADC

adc = ADC(pin)        # create an ADC object acting on a pin
val = adc.read_u16()  # read a raw analog value in the range 0-65535
val = adc.read_uv()   # read an analog value in microvolts
```

::: warning
Wanneer aan de potentiometer wordt gedraaid (van het ene uiterste naar het andere), zorgt dit voor een spanningsvariatie van 0V geleidelijkaan tot 3,3V. Dit zou op de ADC moeten worden verwerkt met een getal variërend van 0 tot 4095 (ADC bezit een resolutie van 12bit). Echter kan een verzwakking (attenuation) worden ingesteld op de ADC. Hiermee worden de uiterste limieten van de spanning ingesteld. Zo kan een de ADC ingesteld worden dat de maximum spanning niet 3,3V is maar 1,2V (resulteert dan in een waarde van 4095).
:::

Bij de potentiometer op de shield van de ESP32 willen we een bereik hebben van 0V-3,3V (0-4095).
Dit betekent dat we een spanning willen lezen van 0 tot 3,3V. Dit komt overeen met het instellen van de dempingsverhouding op 11dB. Daarvoor gebruiken we de `atten()`-methode en geven als argument mee: `ADC.ATTN_11DB`.

De `atten()`-methode kan de volgende argumenten aannemen:

- `ADC.ATTN_0DB` — de volledige bereikspanning: 1,2V  
- `ADC.ATTN_2_5DB` — de volledige bereikspanning: 1,5V  
- `ADC.ATTN_6DB` — de volledige bereikspanning: 2,0V  
- `ADC.ATTN_11DB` — de volledige bereikspanning: 3,3V  

```python
from machine import ADC

adc = ADC(pin)        # create an ADC object acting on a pin
adc.atten(ADC.ATTN_11DB)
val = adc.read()  

```
