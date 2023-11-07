---
title: "IoT Weather Station"
date: "2019-10-13"
---

First things first, checkout my [repository](https://github.com/MaiLinhGroup/iot-weather-station) for this project at GitHub!

I just dug out my old board [Wemos D1 mini](https://wiki.wemos.cc/products:d1:d1_mini) and the absolute barometric pressure sensor breakout [GY BMP 280](https://components101.com/sensors/gy-bmp280-module). The board has a very small form factor, equipped with WiFi and is based on the popular because low-cost [ESP8266](https://en.wikipedia.org/wiki/ESP8266). Nowadays the ESP8266 is succeeded by the ESP32 from the same manufacturer [Espressif Systems](https://github.com/espressif), but due to its popularity you will still get a vast amount of support for it, from toolchain to tutorials to 3rd parties libraries.

The Wemos D1 mini is a beginner friendly development board because it comes with a bootloader installed so that you don't need any extra programmer but just an ordinary **micro USB cable** and the right driver for your OS to start right ahead with programming. How convenience is that, right? In my humble opinion this "trend" to ship development boards with bootloader installed was just right to lower the threshold for anyone interested in getting their hands and mind dirty with embedded programming!
