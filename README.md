# MARKET PRODUCT REST
## ENDPOINTS
- - -
### ENDPOINTS USER CONTROLLER
#### GET - {BASEURL}/api/user/
##### INPUT
Es necesario insertar el token en el header
##### OUPUT
Retorna un array con objectos de los productos  

- - - 

#### GET - {BASEURL}/api/user/login
##### INPUT
Es necesario insertar en el body:
- username: string - El nombre de usuario
- password: string - La contraseña
##### OUPUT
- Retorna un objeto

- - -

#### POST - {BASEURL}/api/user/register
##### INPUT
- Es necesario insertar el token en el header
##### OUPUT
- Retorna un array con objectos de los productos

- - -

#### PUT - {BASEURL}/api/user/
##### INPUT
- Es necesario insertar el token en el header
##### OUPUT
- Retorna un array con objectos de los productos

- - -

#### DELETE - {BASEURL}/api/user/
##### INPUT
- Es necesario insertar el token en el header
##### OUPUT
- Retorna un array con objectos de los productos

- - -


#### GET - {BASEURL}/api/product/
#### GET - {BASEURL}/api/product/:barcode
#### POST - {BASEURL}/api/product/
#### PUT - {BASEURL}/api/product/:barcode
#### PUT - {BASEURL}/api/product/price/:barcode
#### DELETE - {BASEURL}/api/product/:barcode