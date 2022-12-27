---
title: "Contact Tracing using Bluetooth Low Energy (BLE)"
date: "2020-06-21"
---

### Preface

2020 was and is definitely not a boring year with the virus Covid19 pandemic currently affecting the private and professional lifes of so many. One of the biggest problems besides not having a cure yet, is that the symptoms appear several days after the initial contagion and even worse most infected people show no symptoms at all. Therefore the virus can spread unnoticed several days before an infected person can quarantine themselves. After an infection is detected, it's important to track and notify all the people who were in contact with the infected person and to break the transmission chain. The manual tracking process can be very time consuming and to some degree erroneous. There is the idea to leverage technology to speed up the process and reducing the error.

One popular sentence these days is *"I'm not a doctor but \<insert your unscientific opinion here\>"*. I admit I'm neither a medical doctor nor an expert in manual or automatic contact tracing so everything I write about is nothing but a **personal opinion** and things I heard or read about (mostly on the internet). I include the [sources](#sources) at the end for anyone to look it up themselves.
My motivation for this article was that I was curious about what and how technology can be used to do contact tracing and where the limitations are. I want to find some answers to and a better understanding about:

- what is RSSI and how stable is it as a measure of how far (speaking in distance) the devices are away from each other
- what is BLE and how can we derive from the RSSI of BLE how far two devices and therefore people are
- how accurately can we determine a risk level for contacts of “Disease Carrier” (DC) by just looking at the distance and the time spent, this would be affected by the fact of how accurate we can measure the distance using RSSI
- what alternatives or additional measurements can we leverage next to BLE RSSI

### RSSI

#### What is RSSI

- Received Signal Strength (RSS) is the actual signal power received on the Rx and is measured in dBm or mW and noted with as a negative number, the closer to 0 dBm the better the signal because no power is lost while transmitting from Tx to Rx, everything received between 0 and -50 dBm is very good and -75 to -80 dBm can already be too bad to work with the signal
- RSS can be used to estimate the distance between Tx and Rx, because the value increases when the distance between Tx and Rx decreases and vice versa (but it follows the law of inverse square)
- RSSI, the RSS indicator, is a relative measurement of RSS and has arbitrary units defined by other parties (e.g. chip vendors etc.), can be 0 to 60 or 0 to 100, the higher the RSSI value the better the signal
- Together with the factory-calibrated constant Measured Power A which can be translated to as RSSI at a reference distance (often something like the 1m RSSI) the distance d can be estimated (d = 10^(A - RSSI/ 10n))
- It is easy to implement and cost-effective and therefore widely available on BLE devices

#### What affects RSSI

- It’s only an indicator of RSS and tends to fluctuate a lot, therefore most systems using RSSI to locate entities either using additional methods like fingerprinting or process the raw RSSI with filters and apply algorithms like kNN etc. or measure the fluctuation and adjust the RSSI accordingly
- Actually not the RSSI itself is affected but the RSS which it should be an indicator for is subjected to various noises/disturbance
    - Static factors which can be already addressed by the manufacturer of BLE devices are the transmission power of Tx, the sensitivity of Rx or the antenna design
    - Dynamic factors are environmental ones like obstacles and other transmitting devices that lead to absorption, interference and diffraction of the emitting radio signal
- The RSS follows the law of inverse square, that means if the distance doubles, the intensity of the signal is attenuated four-fold
- As a thumb of rule, the signal gets weaker with increasing distance from its source (Tx) and therefore the RSSI is more unstable the further away the Rx is from Tx
- If using RSSI, it’s better to sample the data to reduce the noise and observe the trend of the RSSI values instead of using the values themselves

#### Alternatives to RSSI

- RSSI raw and/or only for localisation is highly inaccurate, so other techniques like ToF, TDoA, acoustic and visual ones are being used to improve or enable indoor positioning
- But for proximity-based services (PBS) using RSSI with additional processing to derive the trend can be a good and cheap mean to trigger events or actions

### BLE

#### Range

- LoS up to 400 m and free field perfect condition max 1000 m
- Indoor between 50m and 5m, this huge spread is due to the fact that indoor we have a lot of external factors that can contribute to the range 
- A good estimation is everything less than 10 m should work, always taking the worst-case scenario as the working environment to achieve resilient services and tests
- PBS with RSSI can achieve an accuracy of 1 to 2m median, other sources say 10 cm accuracy should be the reference when localisation is necessary

BLE is available since Bluetooth v4.0 (around 2010), BLE v5.0 doubles the max data rate from 1 to 2Mbps and more output power to increase the range and BLE v5.1 (released to developers around January 2019) will have localisation built-in which will improve IPS with BLE (hopefully).


#### GATT and GAP roles

- Generic Access Profile (GAP) is a base profile available on all Bluetooth devices and defines the basic requirements of a Bluetooth device, for BLE there are four roles:
    - Observer and Broadcaster: optimised for transmitter/receiver only applications with no support for connections and data is exchanged via advertising messages
    - Peripheral and Central: optimised for connection where the Central decides to whom to connect to and is, therefore, more complex than the Peripheral which just passively waits for a connection to be established and advertising that it has data to exchange
- Generic Attribute Profile (GATT) is mandatory in LE (using for discovering services) and has two roles and is not tied to one of the four GAP roles:
    - Server: has the data that the Client may want to obtain 
    - Client: once connected can request data from the Server
- Two BLE devices may both act as Client and Server for each other at the same time

Detecting if someone is too close to the DC: There is the Proximity Profile (PXP) which requires the GATT and enables proximity monitoring between two devices. It can be used to define the behaviour (like alerting) when two devices come close enough that a connection could be made or the path loss decreases below a threshold.


### Contact Tracing using BLE RSSI

#### The Google and Apple (aka Goople) Approach

- CT framework that handles the contact tracing and reporting via BLE for iOS and Android devices so that interoperable Contact Tracing Solutions (e.g. our app) can be built on top
- If using this framework our solution needs a Backend (cloud) to store and send self-reported affected user contacts and an App for affected users to report themselves and check if they have been exposed to affected users
- Roll-out in two phases:
  - Phase 1 beginning of May 2020 release of the Framework API to enable interoperability between Contact Tracing Solutions developed by others 
  - Phase 2 following phase 1 is the integration of the functionality in the respective platforms iOS and Android to enable a bigger ecosystem of Contact Tracing Solutions
- Open Question for now:
- How to adjust the sensitivity of exposure? In the preview specs one get only the proximity values of a matched observed contact after passing the params duration and timestamp, it’s unclear whether the params (especially duration) are adjustable → Sensitivity
- How is the self-report authenticated/checked against to avoid the scenario that someone downloads the app and appears in as many observable user contact lists as possible and then reports an infection? After the affected user reports their infection, all metadata must be deleted by the server to protect the reporting user’s privacy → False Positives
- Is the RSSI captured per advertisement available by the CT framework and if so is it already sampled and or in any sense processed or raw? On iPhone devices, the captured RSSI can be similar but on Android devices, due to the heterogeneity of hardware the RSSI can be very different

**Sources**

- [Survey of Indoor Localisation Systems](https://arxiv.org/pdf/1709.01015.pdf)
- [Range of BLE](https://blog.nordicsemi.com/getconnected/things-you-should-know-about-bluetooth-range)
- [What can have an effect on the BLE range](https://electronics.stackexchange.com/questions/441104/whats-the-ble-range)
- [Distance calculator for 2 BLE enabled devices](https://www.bluetooth.com/learn-about-bluetooth/bluetooth-technology/range/#estimator)
- [Proximity and RSSI](https://www.bluetooth.com/blog/proximity-and-rssi/)
- [Goople's White Paper BT Specs](https://covid19-static.cdn-apple.com/applications/covid19/current/static/contact-tracing/pdf/ContactTracing-BluetoothSpecificationv1.1.pdf)
- [Goople's White Paper Cryptography](https://covid19-static.cdn-apple.com/applications/covid19/current/static/contact-tracing/pdf/ContactTracing-CryptographySpecification.pdf)
- [Goople's White Paper Framework API](https://covid19-static.cdn-apple.com/applications/covid19/current/static/contact-tracing/pdf/ContactTracing-FrameworkDocumentation.pdf)
