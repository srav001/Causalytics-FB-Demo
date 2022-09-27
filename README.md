# Causalytics-FB-Demo

This app is meant to serve as a MVP or demo for an analytics which fetches data from a poll in facebook and displays in graphical representation with help of Chart JS in Vue. 

## ui
The frontend is build with Vue. Made in Vue 2 simply because of Vuetify for Vue 3 being in beta. But can be updaed to Vue 3 easily once Vuetify is out of beta since no deprecated APIs of Vue 2 are used. 

## api
The backend is build with Nest JS and Typescript. Used to fetch data from `FB` API and tranform for easier consumption in the front-end. 

## Usage
> cd into `ui` & `api` folders, run the commands given below.

### Project Setup 

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

#