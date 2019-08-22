# Projeto Tindev da RocketSeat

*Para executar a App mobile rode acesse o diretório do projeto e rode:*
```
yarn start
```

Caso, a linha de comando fique travada neste item
`Loading dependency graph, done.`

Rode o comando:
```
adb reverse tcp:8081 tcp:8081 ; adb reverse tcp:3333 tcp:3333
```

Para saber o id do seu device rode o comando:
```
adb devices
List of devices attached                                                    575a04e9        device 
```

Por fim, volte até a App, chaqualhe o celular até aparecer o menu e clique em `reload`.

## Instalar App

Rode o comando para instalar/reinstalar a App no Android:
```
yarn react-native run-android
```