# MARKET PRODUCT REST
## ENDPOINTS
- - -
- - -
### **ENDPOINTS USER CONTROLLER**
#### **POST** - https://market-product-rest.onrender.com/api/user/login
Permite recibir el token del usuario, luego de recibir los datos correctos.

#### **INPUT**
Es necesario insertar en el *body*:
- username: *string* - El nombre de usuario
- password: *string* - La contraseña

**OUPUT** : Retorna el token con el id necesario para usarlo en otros endpoints.


- - -
- - -


### ENDPOINTS PRODUCT CONTROLLER
#### **GET** - https://market-product-rest.onrender.com/api/product/
Permite obtener todas las categorias.

**INPUT** : Es necesario insertar el *token* en el header.    
**OUTPUT** : Retorna un array con objetos de la categoria.

- - -

#### **POST** - https://market-product-rest.onrender.com/api/product/
Crea una nueva categoria con los datos insertado en el body.

#### **INPUT**
Es necesario insertar el *token* en el header.    
Es necesario insertar en el *body*:
- barcode: *string* - El codigo de barra del nuevo producto
- brand: *string* - La marca del nuevo producto
- category: *string* - La categoria a la que pertenece el nuevo producto
- name: *string* - Es el nombre del nuevo producto
- price: *number* - Es el precio que posee el nuevo producto
- size: *string* - Es el tamaño que posee el nueve producto

**OUPUT**: Retorna el objeto del nuevo producto.

- - -

#### **PUT** - https://market-product-rest.onrender.com/api/product/:barcode
Modifica los datos del producto que posee el mismo barcode insertado en la ruta.

#### **INPUT**
Es necesario insertar el *token* en el header.  
Es necesario insertar en la ruta el *barcode* del producto.  
Es necesario insertar en el *body*:
- (*optional*) barcode: *string* - El codigo de barra del nuevo producto
- (*optional*) brand: *string* - La marca del nuevo producto
- (*optional*) category: *string* - La categoria a la que pertenece el nuevo producto
- (*optional*) name: *string* - Es el nombre del nuevo producto
- (*optional*) size: *string* - Es el tamaño que posee el nueve producto
- (*optional*) price: *number* - Es el precio que posee el nuevo producto

**OUPUT** : Retorna el objeto del producto con los cambios pertinentes.

- - -

#### **DELETE** - https://market-product-rest.onrender.com/api/product/:barcode
Elimina el producto que posee el mismo barcode insertado en la ruta.

#### **INPUT**
Es necesario insertar el *token* en el header.  
Es necesario insertar en la ruta el *barcode* del producto.  

**OUPUT** : Retorna el objeto del producto eliminado.


- - -
- - -


### **ENDPOINTS CATEGORY CONTROLLER**
#### **GET** - https://market-product-rest.onrender.com/api/category/
Permite obtener todas las categorias.

**INPUT** : Es necesario insertar el *token* en el header.    
**OUTPUT** : Retorna un array con los objetos de la categoria.

- - -

#### **POST** - https://market-product-rest.onrender.com/api/category/
Crea una nueva categoria con los datos insertado en el body.

#### **INPUT**
Es necesario insertar el *token* en el header.    
Es necesario insertar en el *body*:
- category: *string* - El nombre de la nueva categoria
- brands: *string [ ]* - optional - Es el array que posee todas las marcas

**OUPUT**: Retorna el objeto de la nueva categoria.

- - -

#### **PUT** - https://market-product-rest.onrender.com/api/category/:idCategory
Modifica los datos del producto que posee el mismo barcode insertado en la ruta.

#### **INPUT**
Es necesario insertar el *token* en el header.  
Es necesario insertar en la ruta el *id* de la categoria.  
Es necesario insertar en el *body*:
- category: *string* - optional - La categoria que se va a modificar
- brands: *string [ ]* - optional - Es el array que posee todas las marcas

**OUPUT** : Retorna el objeto de la categoria con los cambios pertinentes.

- - -

#### **DELETE** - https://market-product-rest.onrender.com/api/category/:idCategory
Elimina el producto que posee el mismo barcode insertado en la ruta.

#### **INPUT**
Es necesario insertar el *token* en el header.  
Es necesario insertar en la ruta el *id* de la categoria.  

**OUPUT** : Retorna la categoria eliminada.