# `Air Quality` (HVAC) Monitoring Web App

<!-- <hr> -->

This repository contains the website created to display the content of <u>real-time</u> HVAC <i>(Heating, ventilation, and air conditioning)</i> data monitoring.

## Description
&nbsp; &nbsp; &nbsp;
This was created for the project under the course `(BCSE313L) Fog and Edge Computing` at VIT-Chennai.  
&nbsp; &nbsp; &nbsp;
Website provides a responsive dashboard for visual representation of the previously-recorded and real-time data collected using the sensors and other hardware components.  
&nbsp; &nbsp; &nbsp;
As a pre-requisite for the project under subject, ths project follows C2F2T and its reverse model as explained in subsequent section.


## Table of Contents

- [`Air Quality` (HVAC) Monitoring Web App](#air-quality-hvac-monitoring-web-app)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Links](#links)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech-Stack 💻](#tech-stack-)
  - [Team-mates](#team-mates)
  - [Contributions](#contributions)
    - [Contact](#contact)

## Links

1. Visit the deployed project on Vercel:  
    [Vercel Deployment Link](https://airqualitybbs.vercel.app/)

2. Clone the repository:
    ```bash
    git clone https://github.com/Bbs1412/air-quality-monitoring-system

    cd air-quality-monitoring-system
    ```

3. Preliminary Repository:  
    [Link to repository](https://github.com/Basilskar/air-quality-monitoring-system)

## Project Overview

   * **Data Collection:**  
        &nbsp; &nbsp; &nbsp;
        Data is collected by using various sensors such as MQ-series sensors, DHT-11, and flame sensors.  
        &nbsp; &nbsp; &nbsp;
        An Arduino periodically reads the data from these sensors.

   *  **Data Passage:**  
        &nbsp; &nbsp; &nbsp;
        Data collected from the sensors by Arduino is passed to the Raspberry-Pi using serial communication at appropriate baud-rate.

   * **Data Filtering and Display:**  
        &nbsp; &nbsp; &nbsp;
        The Raspberry Pi splits, filters, and processes the received data locally.  
        &nbsp; &nbsp; &nbsp;
        Weather predictions are fetched using an API for the day and night at the specified location.  
        &nbsp; &nbsp; &nbsp;
        Based on the latest locally received data and online predictions, display graphics are generated and updated on an the LCD-TFT display.  
        &nbsp; &nbsp; &nbsp;
        Further, the data is passed to the cloud for storage and further access.

   * **Data Storage:**  
        &nbsp; &nbsp; &nbsp;
        Firebase, a NoSQL database, is utilized to create, retrieve, and update data.  
        &nbsp; &nbsp; &nbsp;
        The data received in this series is stored under specific firebase nodes.

   * **Web Interface:**  
        &nbsp; &nbsp; &nbsp;
        A fully functional and responsive website is created and deployed on vercel.  
        &nbsp; &nbsp; &nbsp;
        The website fetches data from the cloud, and its components are updated periodically.  
        &nbsp; &nbsp; &nbsp;
        The website also features an Emergency Alert System, which can be a lifesaver in cases of fire or gas leakage in the monitored area.


## Features

   1. **Real-time Monitoring** ⏳  
      Continuously tracks air quality levels, providing instant data updates for timely analysis and response.

   1. **Low Latency Operations**   
      Ensures minimal delay in data processing and visualization, allowing for accurate real-time insights and decisions.
      
   1. **Emergency Alert System** ⚠️  
      Automatically sends immediate alerts for critical air quality levels, including fire or gas leakage detection, ensuring rapid response to potential hazards.

   1. **Comprehensive Data Collection**  
      Utilizes a variety of sensors to gather diverse and comprehensive environmental data.

   1. **Robust Data Storage** ☁️  
      Utilizes Firebase for reliable and scalable NoSQL database storage, ensuring data integrity and accessibility. Enabling robust data management and retrieval.

   1. **User-Friendly Web Interface**  
       Provides a fully functional and responsive website, featuring regular updates and a comprehensive view of air quality data anywhere.


## Tech-Stack 💻
   - Python
   - HTML
   - CSS
   - JavaScript
   - Firebase
   <!-- - NodeJS (partly) -->

## Team-mates 

   1. Bhushan Songire [(LinkedIn)](linkedin.co/in/bhushan-songire)
   2. Basil Skaria
   3. Vedant Choudhari
   4. Ujjawal Kumar
  
## Contributions  

   Any contributions or suggestions are welcome! 

### Contact

   - **Email** - [bhushanbsongire@gmail.com](bhushanbsongire@gmail.com)
   - **Git** - [Bbs1412](https://github.com/Bbs1412/)


<!-- ## Acknowledgments -->
   <!-- - Thanks to .. for ... -->

