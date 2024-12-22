---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# Variabelen bij de ESP

Soms kan het handig zijn als we een waarde (bv. een getal) kunnen bewaren zodat we die later terug kunnen gebruiken.
Het bewaren van een getal doen we in een variabele. Hiervoor moet een plaatsje gereserveerd worden in het geheugen van de processor (= declaratie van de variabele). We kunnen het getal in de variabele plaatsen en later kunnen we het getal er terug uit halen. Je kan de variabele zien als een doosje waar we het getal in kunnen bewaren. Nadien kan je het doosje terug openen en het getal eruit halen om te gebruiken. Het doosje krijgt ook een naam die we zelf kiezen (= naam van de variabele).
Bij dozen zijn er verschillende grootten van dozen. Zo zijn er ook verschillende grootten van variabelen. Dit noemen we variabelen van verschillende types.

![example image](./images/doos.png "Kleine en grote dozen.")

Variabelen worden in het RAM-geheugen van de ESP32 bewaard. Als men werkt met microcontrollers houd je best rekening met de grootte van de variabelen want het RAM geheugen is meestal beperkt. Als je weet dat een getal nooit groter zal worden dan 100 dan is het niet aan te raden om deze te bewaren in een 64bit variabele.

De basisvariabelen kan men indelen in drie grote groepen:
> - gehele getallen
> - komma getallen
> - karakters / tekst (ascii)

In python is het niet nodig om bij declaratie van een variabele het type van de variabele op te geven (in C wel). Python kiest zelf het type. 

:::warning
Typecasting is echter wel van groot belang. Typecasting is het converteren van een bepaald type variabele naar een ander type. Het is dus van groot belang dat de programmeur steeds weet met welk type een variabele werkt.
:::

## Getallen

```python
intTest = 0 #declaratie en toekenning van een variabele met naam intTest
pi = 3.1415
print(type(intTest)) #printen van het type van de variabele
print(intTest) #printen van de inhoud van de variabele
```

## Karakters en tekst

Er zijn characters die volgens ASCII binair kunnen worden voorgesteld. Strings is dan een lijst van characters. In python kan een char of een string aangegeven worden met enkele quotes of met dubbele quotes.

```python
strTest = "klein"
strNaam = 'Vives'
print(type(strTest))
print(strTest)
```

::: tip
Een string is een array van char types.
:::

