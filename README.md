# Description #
Project opens a basic electron app on RaspberryPi registered on https://studio.iotway.net under user _sign_ with product id _1234_

## Iotway docs: ## 
https://studio.iotway.net/docs/#/ 

## Iotway install ##
```console
foo@bar:~$ sudo npm install -g iotway
```

## Iotway linux CLI login ##

```console
foo@bar:~$ iotway user login
username:
foo@bar:~$ yourUname
password:
foo@bar:~$ yourPasswd
host:
foo@bar:~$ https://studio.iotway.net
```

## Run project on RaspberryPi ##
(run cmd from project folder)

```console
foo@bar:~$ sudo iotway project run 1234
```
