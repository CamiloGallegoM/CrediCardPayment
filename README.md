This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).


# CrediCardPayment

Este proyecto es una aplicación móvil en React Native (TypeScript) que simula un proceso de pago con tarjeta de crédito. La app permite a los usuarios seleccionar productos, ingresar datos de tarjeta, realizar un pago simulado y mostrar el resultado de la transacción, para  este proyecto se utilizaron varias librerias:

* React-Redux
* React Navigation
* React Native Elements
* Faker Js 


## Requisitos
|  | Version | 
|:----------|:------: |
| Node js     | >= 20   |
| JDK     | openjdk17   |
| Android Studio     | koala 2024.1.1   |
| React Native     | 0.76.6   |

## Proceso de instalacion
Se utilizo como manejador de paquetes Yarn 
```bash
yarn install
cd android 
./gradlew clean
cd ..
yarn start --reset-cache
```
## Generacion de archivo APK

```bash

cd Android 
./gradlew clean
./gradlew assembleRelease
```