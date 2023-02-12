# MARKET PRODUCT REST
## ENDPOINTS
- - -
- - -
### ENDPOINTS USER CONTROLLER
#### GET - https://market-product-rest.onrender.com/api/user/
Permite obtener los datos del usuario insertado en el token.

##### INPUT
Es necesario insertar el token en el header

##### OUPUT
Retorna un array con objectos de los productos  

- - - 

#### POST - https://market-product-rest.onrender.com/api/user/login
Permite recibir el token del usuario, luego de recibir los datos correctos.

##### INPUT
Es necesario insertar en el body:
- username: string - El nombre de usuario
- password: string - La contraseña

##### OUPUT
Retorna el token con el id necesario para usarlo en otros endpoints

- - -

#### POST - https://market-product-rest.onrender.com/api/user/register
Crea un nuevo usuario con los datos insertado en el body.

##### INPUT
Es necesario insertar el token en el header.  
Es necesario insertar en el body:
- username: string - El nombre de usuario
- password: string - La contraseña

##### OUPUT
Retorna un objeto con el token y el objeto del usuario.

- - -

#### PUT - https://market-product-rest.onrender.com/api/user/
Modifica los datos del usuario insertado en el token.

##### INPUT
Es necesario insertar el token en el header.  
Es necesario insertar en el body:
- (optional) username: string - El nombre de usuario
- (optional) password: string - La contraseña

##### OUPUT
Retorna el objeto del usuario con sus modificaciones.

- - -

#### DELETE - https://market-product-rest.onrender.com/api/user/
Elimina la cuenta del usuario insertado en el token.  

##### INPUT
Es necesario insertar el token en el header.

##### OUPUT
No retorna nada ademas de un code 204.

- - -
- - -

### ENDPOINTS PRODUCT CONTROLLER
#### GET - https://market-product-rest.onrender.com/api/product/
Permite recibir array de todos los productos en la base da datos

##### INPUT
Es necesario insertar el token en el header.

##### OUPUT
Retorna un array con objetos de los productos.

- - -

#### GET - https://market-product-rest.onrender.com/api/product/:barcode
Permite recibir el producto que posee el mismo barcode insertado en la ruta.

##### INPUT
Es necesario insertar el token en el header.  
Es necesario insertar en la ruta el barcode del producto.

##### OUPUT
Retorna un objeto del producto al que pertenece el barcode.

- - -

#### POST - https://market-product-rest.onrender.com/api/product/
Crea un nuevo producto con los datos insertado en el body.

##### INPUT
Es necesario insertar el token en el header.    
Es necesario insertar en el body:
- barcode: string - El codigo de barra del nuevo producto
- brand: string - La marca del nuevo producto
- category: string - La categoria a la que pertenece el nuevo producto
- name: string - Es el nombre del nuevo producto
- price: number - Es el precio que posee el nuevo producto
- size: string - Es el tamaño que posee el nueve producto

##### OUPUT
Retorna el objeto del nuevo producto.

- - -

#### PUT - https://market-product-rest.onrender.com/api/product/:barcode
Modifica los datos del producto que posee el mismo barcode insertado en la ruta.

##### INPUT
Es necesario insertar el token en el header.  
Es necesario insertar en la ruta el barcode del producto.  
Es necesario insertar en el body:
- (optional) barcode: string - El codigo de barra del nuevo producto
- (optional) brand: string - La marca del nuevo producto
- (optional) category: string - La categoria a la que pertenece el nuevo producto
- (optional) name: string - Es el nombre del nuevo producto
- (optional) size: string - Es el tamaño que posee el nueve producto

##### OUPUT
Retorna el objeto del producto con los cambios pertinentes

- - -

#### PUT - https://market-product-rest.onrender.com/api/product/price/:barcode
Modifica el precio del producto que posee el mismo barcode insertado en la ruta.

##### INPUT
Es necesario insertar el token en el header.  
Es necesario insertar en la ruta el barcode del producto.  
Es necesario insertar en el body:
- price: number - Es el precio que posee el nuevo producto

##### OUPUT
Retorna el objeto del producto con el precio modificado.

- - -

#### DELETE - https://market-product-rest.onrender.com/api/product/:barcode
Elimina el producto que posee el mismo barcode insertado en la ruta.

##### INPUT
Es necesario insertar el token en el header.  
Es necesario insertar en la ruta el barcode del producto.  

##### OUPUT
No retorna nada ademas de un code 204.

- - -
