---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# PWM instructies (software)

PWM kan worden ingeschakeld op alle uitgangspinnen. De basisfrequentie kan variëren van 1 Hz tot 40 MHz, maar er is een afweging; naarmate de basisfrequentie toeneemt, neemt de duty-resolutie af. Zie LED-bediening voor meer details. Bijvoorbeeld:

```python
from machine import Pin, PWM

pwm0 = PWM(Pin(0), freq=5000, duty_u16=32768) # create PWM object from a pin
freq = pwm0.freq()         # get current frequency
pwm0.freq(1000)            # set PWM frequency from 1Hz to 40MHz

duty = pwm0.duty()         # get current duty cycle, range 0-1023 (default 512, 50%)
pwm0.duty(256)             # set duty cycle from 0 to 1023 as a ratio duty/1023, (now 25%)

duty_u16 = pwm0.duty_u16() # get current duty cycle, range 0-65535
pwm0.duty_u16(2**16*3//4)  # set duty cycle from 0 to 65535 as a ratio duty_u16/65535, (now 75%)

duty_ns = pwm0.duty_ns()   # get current pulse width in ns
pwm0.duty_ns(250_000)      # set pulse width in nanoseconds from 0 to 1_000_000_000/freq, (now 25%)

pwm0.deinit()              # turn off PWM on the pin

pwm2 = PWM(Pin(2), freq=20000, duty=512)  # create and configure in one go
print(pwm2)                               # view PWM settings
```

| Hardware specification | ESP32 |
| ----------- |:------------:|
| Number of groups (speed modes)        | 2    | 
| Number of timers per group    | 4           | 
| Number of channels per group  | 8   |
| Different PWM frequencies (groups * timers)  | 8   |
| Total PWM channels (Pins, duties) (groups * channels)  | 16   |


Op de ESP32 is een maximaal aantal PWM-kanalen (Pins) beschikbaar - 16 kanalen, maar er zijn slechts 8 verschillende PWM-frequenties beschikbaar, de overige 8 kanalen moeten dezelfde frequentie hebben. Aan de andere kant zijn er 16 onafhankelijke PWM-werkcycli mogelijk op dezelfde frequentie.
