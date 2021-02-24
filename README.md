## Summary
The purpose of this project is to analyze historic census data and use the analysis to predict the next "It City". The model will use the historic population and employments data from cities we know to be popular as the model for the machine learning prediction. 


**Team members: Stephanie Paul, Patrick Enlow, McKenzie Kilburn, Andrej Arsovski, Josh Severin, and Cat de Rohan**


## Project Background
The idea of our project started with the question if the next "It City" can be predicted by the number of new business formations. After looking at different data sources and scope of work we altered our project to look at population and unemployment data to decide which cities would be the "trending" cities to move to in the next few years.


## Data Exploration
We researched several datasets to find a dataset we could use to rank top cities to live in. 

The datasets we will be using are:

**Population** Metro Census Data of population change from 2010 to 2019
- https://www.census.gov/data/datasets/time-series/demo/popest/2010s-total-metro-and-micro-statistical-areas.htm

**Unemployment Rate** Bureau of Labor and Statistics
- https://www.bls.gov/lau/#tables

**GDP and Total Employment** Bureau of Economic Analysis
- https://www.bea.gov/


We also looked at several other databases and resources when formalizing our project. Some of these included:


We decided not to use this dataset because we needed to keep data on the same granularity scale. When looking to rank cities we want to keep dataset just to cities for scale and easibility in preparing the data. 

- https://www.census.gov/library/visualizations/interactive/bfs-annual-state-county.html

Originally we wanted to use this resource that had statistics for new business application at the state and county level to use as a feature in our dataset to measure growth. For the same reason as above we decided to keep all data on the same granularity scale and continued digging for city data. 

Lastly we researched various ranking methodologies and how we could best implement a ranking methodology to dataset. Some research links include

* How to calculate Z Scores
- https://stackoverflow.com/questions/24761998/pandas-compute-z-score-for-all-columns 

* Research on weighted ranking
- https://www.countyhealthrankings.org/explore-health-rankings/our-methods/calculating-ranks

* Example of how we are looking to rank cities
- https://www.niche.com/places-to-live/rankings/methodology/


## Technology
Our technology plan includes:

**Preparing Data:** 
Python/Pandas

**ETL:**
Mongo

**Visualization:** 
Flask and Plotly

**Web App:**
Heroku

**Presentation:**
https://docs.google.com/presentation/d/1hDRkBLbo_e6D-0roOfvdUls_1-utlWcHfgddTy63qJM/edit


## Communication 
Our team will be using Discord to communication and Zoom for meetings and collaboration. We will also be using [Trello](https://trello.com/metrognomes) to organize and prioritize our tasks.

We also have a google doc for additional note taking, project updates, and status for each time we meet.
https://docs.google.com/spreadsheets/d/11tBE4anY_8wx0iDraOMmek-0PlKdWVXFqECHaIlFleM/edit#gid=0

