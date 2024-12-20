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

## Gehele getallen of integers

De gehele getallen kan je opdelen in de signed (=negatieve en positieve getallen) en de unsigned (= enkel positieve getallen).

### Signed integers

> - 8 bit of 1 byte groot. Van -128 t.e.m. 127
```cpp
int8_t intTest = 0;
```
> - 16 bit of 2 byte groot. Van -32768 t.e.m. 32767
```cpp
int16_t intTest = 0; 
short shrTest = 76;
```
> - 32 bit of 4 byte groot. Van -2147483648 t.e.m. 2147483647
```cpp
int intTest = 0; 
int32_t intTest = -864; 
long lngTest = 8787777;
```
> - 64 bit of 8 byte groot.
```cpp
int64_t intTest = 0;
```

### Unsigned integers

> - 8 bit of 1 byte groot. Van 0 t.e.m. 255
```cpp
byte bytTest = 67; 
uint8_t intTest = 0;
```
> - 16 bit of 2 byte groot. Van 0 t.e.m. 65535
```cpp
uint16_t intTest = 0; 
short shrTest = 76;
```
> - 32 bit of 4 byte groot. Van 0 t.e.m. 4294967295
```cpp
uint intTest = 0; 
uint32_t intTest = 87623; 
ulong lngTest = 9;
```
> - 64 bit of 8 byte groot.
```cpp
uint64_t intTest = 0;
```

## Komma getallen

De kommagetallen kunnen zowel positief als negatief zijn. Men heeft twee types, namelijk:

> - Single precision of float (=32 bit groot)
```cpp
float fltTest = 3.5;
```
> - Double precision of double (64 bit groot)
```cpp
double dblTest = -6.8;
```

## Karakters en tekst

> - char: Een char is een karakter en is 1 byte groot (zie ascii tabel)
```cpp
char chrTest = 'e';
```
> - string: Een string bestaat uit meer dan 1 karakter.
```cpp
String strTest = "klein";
```

::: tip
Een string is een array van char types.
:::

