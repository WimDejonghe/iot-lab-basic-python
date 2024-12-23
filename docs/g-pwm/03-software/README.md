---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# PWM instructies (software)

PWM can be enabled on all output-enabled pins. The base frequency can range from 1Hz to 40MHz but there is a tradeoff; as the base frequency increases the duty resolution decreases. See LED Control for more details.Bijvoorbeeld:

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


A maximum number of PWM channels (Pins) are available on the ESP32 - 16 channels, but only 8 different PWM frequencies are available, the remaining 8 channels must have the same frequency. On the other hand, 16 independent PWM duty cycles are possible at the same frequency.
