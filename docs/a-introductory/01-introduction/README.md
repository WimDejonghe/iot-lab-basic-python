---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# Introductie

Een microcontroller (afgekort μc of MCU) is een geïntegreerde schakeling met een microprocessor die gebruikt wordt om elektronische apparatuur te besturen. Om van een microcontroller te spreken moet het systeem minimaal bestaan uit een cpu, geheugen en I/O (=Ingangen/Uitgangen). De microcontroller is tegenwoordig niet meer weg te denken. Bijna alle moderne apparaten bevatten een microcontroller, denk aan wasmachines, telefoons, auto’s, robotgrasmaaiers, afstandsbedieningen, ... Microcontrollers worden gebruikt bij het automatiseren en controleren van apparaten.

![example image](./images/arduino.png "Voorbeeld van een microcontroller (Arduino Uno).")

:::tip
Een microcontroller is een IC (Integrated Circuit) waarop een programma draait dat door de ontwerper is geschreven. Het programma wordt regel per regel uitgevoerd.
:::

## Hardware

De microcontroller die hier wordt gebruikt is de ESP32-WROOM32 van de firma Espressif.

![example image](./images/esp1.png "De ESP32-WROOM32 van de firma Espressif.")

Er zijn verschillende versies van de ESP32 op de markt te verkrijgen. Verschillende fabrikanten hebben hun eigen versie op de markt gebracht. Het nadeel van dit aanbod is dat er naar pincompatibiliteit geen afspraken zijn gemaakt en er dus afwijkingen kunnen zijn op dat vlak tussen de verschillende types ESP32. In deze cursus wordt de focus gelegd op de Adafruit Feather HUZZAH32 ESP32 4Mb. Deze controller maakt gebruik van de WROOM32 module van Espressif.

![example image](./images/esp2.png "De Adafruit Feather huzzah32.")

De Huzzah32 heeft een ingebouwde USB-naar-serieel-converter, automatische bootloader-reset, lithium-ion-/polymeeroplader en alle GPIO’s (=General Purpose Input Output) zijn naar buiten gebracht.

***
De module heeft een 32 bit dual-core ESP32-chip, 4 MB SPI Flash, afgestemde antenne en alle passieve elementen die je nodig hebt om te profiteren van deze krachtige processor met een klokfrequentie tot 240MHz en 512kB RAM. De ESP32 heeft zowel WiFi als Bluetooth Classic/LE-ondersteuning. Dat betekent dat het perfect is voor vrijwel elk draadloos of internet-verbonden project.
***

De ESP32 is een perfecte upgrade van de ESP8266 die zo populair is geweest. Ter vergelijking: de ESP32 heeft veel meer GPIO, veel analoge ingangen, twee analoge uitgangen, meerdere extra randapparatuur (zoals een reserve UART), twee cores zodat je niet hoeft toe te geven aan de WiFi-manager, een veel snellere processor, … .

## Software

De ESP32 kan via verschillende platformen worden geprogrammeerd. Het is heel populair om deze te programmeren via de Arduino IDE. Echter zullen we hier Visual Studio Code gebruiken. IDE is de afkorting van Integrated Development Enveronment en kan vertaald worden als een geïntegreerde ontwikkelomgeving.

![example image](./images/ide.png "Links de Arduino IDE en rechts de Visual Studio Code IDE.")

Visual Studio Code, ook afgekort als VSC, is een IDE die voor verschillende ontwikkelingen kan worden gebruikt en wordt professioneel heel veel gebruikt. Je kan VSC gebruiken voor ontwikkelingen in verschillende talen zoals JAVA, Python, C, ....


De Arduino IDE is goed voor kleine, beperkte ontwikkelingen, voor gevorderde code (meer dan 200 lijnen code), meerdere bestanden, het gebruik van een intelisense, en andere functies biedt VSC een betere oplossing. VSC biedt voor de ESP32 niet alleen de mogelijkheid om code te schrijven, maar ook om die te compileren en die te downloaden in de ESP32 microcontroller.Tevens bezit VSC een Serial Terminal scherm die het mogelijk maakt om tijdens de run van de ESP32 serieëel data te kunnen uitwisselen. Dit kan een ondersteuning zijn voor het debuggen van uw code.

:::warning
Een echte debug-tool met breakpoints is zonder extra hardware echter niet mogelijk, maar het kan wel.
:::



![alt ](./images/hero.jpg)



:tada: :100: