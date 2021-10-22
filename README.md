# Examen Práctico - Segundo parcial
Carlos Martínez Rodríguez
A01375577

## Instrucciones de la actividad

Realizar un servicio para registrar ciudades o lugares de interés dentro de países para después almacenarlos dentro de una base de datos (relacional o no relacional). 

El servicio debe validar que no haya lugares o ciudades repetidas, 
sin embargo, cada vez que detecte un registro repetido deberá incrementar un contador de interés. Los datos que se necesitan registrar en la base son la ciudad o lugar de interés, el país, el atractivo del lugar (descripción pequeña) y el contador de interés.

Realizar el servicio para consultar las ciudades o lugares de interés por país. El desarrollo deberá considerar el patrón MVC y podrán utilizar bases de datos locales o en la instancia en la nube. Para la entrega de la sección práctica deberán crear un repositorio GIT y enviar el ZIP del último estado de actualización.# aw-examne-parcial-2


---

## Iniciar Servicios

Lo primero que debemos de hacer es arrancar el servicio de node, para eso utilizaremos el siguiente comando.



``` npm start ``` </br>


Una vez inicializado, debes de poder ver este mensaje en la consola.

> 🌎 Beautiful destinations is running on PORT: TU PUERTO 🌎


## Crear destino

Para crear un destino se debe de hacer una petición tipo **POST** en la siguiente ruta.

Ruta: *localhost:PORT/api/destination/*

El body debe ser en **JSON**:

``` 
{
    "country": "México",
    "name": "Los Cabos",
    "description": "Playa"
}
```

La respuesta del servicio debe de ser como el siguiente **JSON**
```
{
  "entity": {
    "_id": "6172acee0b88251e71e6aa4f",
    "country": "México",
    "name": "Los Cabos",
    "rating": 0,
    "description": "Playa",
    "__v": 0
  }
}
```
En dado caso que el destino junto con el país ya existand dentro de la base de datos el valor de rating incrementará en vez de crear un nuevo registo.


## Obtener destinos por país

Ruta: *localhost:PORT/api/destination/by/{nombre del país}*

La respuesta del servicio debe de ser como el siguiente **JSON**
```
{
  "destinations": [
    {
      "_id": "61724fa2fd906b510ab9ed88",
      "name": "Barrancas del cobre",
      "rating": 0,
      "description": "Cordillera"
    },
    {
      "_id": "6172acee0b88251e71e6aa4f",
      "name": "Los Cabos",
      "rating": 1,
      "description": "Playa"
    }
  ]
}
```

## Obtener destinos por id

Ruta:  *localhost:PORT/api/destination/{id del destino}}*

La respuesta del servicio debe de ser como el siguiente **JSON**
```
{
  "entity": {
    "_id": "61724fa2fd906b510ab9ed88",
    "country": "México",
    "name": "Barrancas del cobre",
    "description": "Cordillera",
    "__v": 0
  }
}
```

