# Evaluate News NLP

Submiting URL for any article and recieve data about it.

## Description

We have server side ,client side and tests.

### Server side

the server works on port 8081 and use [Sentiment Analysis API version 2.1](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc).

### Client side

the client side has simple form and scss style.
the functions used in client side are checkURL ,handleForm and postData.

### Tests

there are two __test__ files one for client and the other for server.
I used jest test to test function in client side and check url for server side.

## Getting Started

### Dependencies

* webpack@4.46.0
* webpack-cli@^3.3.12

### Installing

* ```npm install```
* ```npm start``` to start the app
* ```npm run build-dev``` to run the app in development mode
* ```npm run build-prod``` to run the app in production mode
* ```npm run start``` to run the server