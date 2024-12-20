---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# PWM instructies (software)

Er zijn twee manieren om een PWM signaal te genereren met een vast frequentie een instelbare duty-cycle. Hierbij worden twee verschillende statements gebruikt.
> - analogWrite(PIN, 255); //value range 0-255 so 255=100%
> - ledcWrite(channel, dutycycle)

We bespreken hier enkel de tweede methode.

De EPS32 heeft 16 onafhankelijke kanalen die ingesteld kunnen worden om PWM signalen te genereren met verschillende eigenschappen.

De verschillende stappen die je moet doorlopen worden zijn:
> - PWM-kanaal kiezen: <br> Kies een PWM kanaal om te gebruiken. Er zijn er 16 met een nummer van 0 tot en met 15. Om het gemakkelijk te maken, gebruik een constante en geef deze een duidelijke naam. Bijvoorbeeld:
```cpp
#define LED_KANAAL 2
```
> - PWM-frequentie bepalen: <br> Vervolgens stel je de frequentie in van het PWM signaal. Voor een LED te dimmen is een frequentie van 500Hz zeker voldoende. Om het gemakkelijk te maken gebruik een constante die een duidelijke naam krijgt. Bijvoorbeeld:
```cpp
#define LED_FREQUENTIE 500
```
> - PWM-resolutie kiezen: <br> Stel dan de resolutie van de duty-cycle (=δ) van het PWM signaal in. Dit kan je instellen met een resolutie van 1 tot 16 bits. Voor het dimmen van een LED is 8 bit voldoende. Dit wil zeggen dat er 2<sup>8</sup> = 256 verschillende stappen zijn. Om het gemakkelijk te maken maak je gebruik van een constante die je een duidelijke naam geeft. Bijvoorbeeld:
```cpp
#define LED_RESOLUTIE 8
```
> - PWM-frequentie en -resolutie aan het kanaal toewijzen: <br> De gekozen frequentie en de resolutie moeten aan het gekozen kanaal toegewezen worden. Daarvoor gebruik je de methode:

```cpp
ledcSetup(channel, freq, resolution_bits);
```

De eerste parameter is het te gebruiken kanaal. De tweede parameter de frequentie en de laatste parameter de resolutie. In het voorbeeld van de led wordt dit:

```cpp
ledcSetup(LED_KANAAL, LED_FREQUENTIE, LED_RESOLUTIE);
```

> - Toewijzen uitgangspin aan het kanaal: <br> Als voorlaatste stel je in aan welke GPIO-pin je wil gebruiken om het PWM signaal naar buiten te brengen. Dit gebeurt met de methode:
```cpp
ledcAttachPin(pin, channel);
```
De eerste parameter is de GPIO uitgangspin waarop het PWM signaal komt te staan en de tweede parameter is het kanaal die je er aan toewijst. Bij het voorbeeld van de LED is dit:

```cpp
#define LED 13
ledcAttachPin(LED, channel);
```
> - Duty-cycle van het kanaal instellen: <br> Om vervolgens de duty-cycle te wijzigen wordt volgende methode gebruikt.
```cpp
uint32_t duty = 6;
ledcWrite(channel, duty);
```
De eerste parameter is het kanaal waarvan je de duty-cycle wil instellen. De volgende parameter is de duty-cycle. De waarde is afhankelijk van de ingestelde resolutie. Bij het voorbeeld van de led is de resolutie 8 bit. Dit wil zeggen dat er 2<sup>8</sup> =256 mogelijkheden zijn. De minimumwaarde is 0 en de maximumwaarde is 255.
```cpp
uint32_t duty_cycle = 127;
ledcWrite(LED_KANAAL, duty_cycle);
```
