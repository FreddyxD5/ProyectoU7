# **:gem::gem::gem:ProyectoU7:gem::gem::gem:**
# **API Playlist Creator馃幍馃攰馃幎 馃幖**



## Integrantes :pushpin:

- Jesus Freddy Zapata More :wave:
- Luis Fernando Leon Machaca :wave:
- Stefani Camila Gonzales Le贸n :wave:


## Sobre el proyecto :pushpin:

![diagrama entidad-relaci贸n](https://github.com/FreddyxD5/ProyectoU7/blob/new-branch-two/documentaci%C3%B3n/esquema%20inicial.png?raw=true)

## Entregables: :pushpin:
URL de repositorio (18 de enero)

Video de youtube (24 de enero)

-El d铆a 18 de enero concretar谩n los avances realizados en la sesi贸n de taller en una URL de github. Posteriormente aplicar谩n las mejoras respectivas a ese repositorio en los siguientes d铆as.

-Para su presentaci贸n final deber谩n crear un video en el cual expliquen el funcionamiento de su c贸digo en conjunto de una demo, tanto c贸digo como el video son necesarios para la calificaci贸n.

Tiempo m谩ximo del video: 7 - 10 min. Video que supere el tiempo indicado no ser谩 revisado.

Equipo
Grupos de 1 a 3 personas como m谩ximo

## Objetivos :pushpin:

馃憠 Utilizar NodeJs y Express.

馃憠 Las rutas deber谩n seguir el patr贸n REST.

馃憠 Utilizar la librer铆a Prisma.

馃憠 Utilizar Typescript.

馃憠 Utilizar SQLite.

馃憠 Manejar git como equipo.

## Consideraciones :pushpin:

- Todos los response deben ser de los que ofrece prisma al realizar la query a la base de datos.

## Creaci贸n de usuarios :pushpin:

- [x] Creaci贸n con password hasheado
- [x] Ruta: /api/v1/users => POST

```
{
  "id": 1,
  "name": "Usuario 1",
  "email": "email@gmail.com",
  "password": "123456"
  "last_session": Date,
  "update_at": Date,
  "date_born": Date
}

```

- [x] Login de usuario
- [x] Ruta: /api/v1/users/login => POST

```
{
  "email": "email@gmail.com",
  "password": "123456"
}
```
## Creaci贸n de canciones :pushpin:

### Consideraciones :rocket:

- [x] Hay un campo para indicar si la canci贸n es p煤blica o privada.

- [x] En el caso de las privadas, solo podr铆an verlas los usuarios que son autenticados.

- [x] Para la creaci贸n de canciones utilizar los siguientes campos: Ruta: /api/v1/songs => POST

```
{
  "id": 1,
  "name": "Canci贸n 1",
  "artist": "Artista 1",
  "album": "Album 1",
  "year": 2020,
  "gener": "Rock",
  "duration": 120
}
```

- [x] Leer todas las canciones Ruta: /api/v1/songs => GET
- [x] Leer una canci贸n por id Ruta: /api/v1/songs/:id => GET
- [x] Creaci贸n de playlist
- [x] Tabla intermedia entre usuarios y canciones.

## Creaci贸n de Playlist :pushpin:

- [x] Si te gusta una canci贸n la agregas a tu playlist
- [x] (crear ruta para a帽adir canciones a la playlist)
- [x] La playlist debe contener los siguientes campos: Ruta: /api/v1/playlist => POST

```

{
  "id": 1,
  "name": "Playlist 1",
  "user_id": 1,
  "songs": [
    {
      "id": 1,
      "name": "Canci贸n 1",
      "artist": "Artista 1",
      "album": "Album 1",
      "year": 2020,
      "genre": "Rock",
      "duration": 120
    },
    {
      "id": 2,
      "name": "Canci贸n 2",
      "artist": "Artista 2",
      "album": "Album 2",
      "year": 2020,
      "genre": "Rock",
      "duration": 120
    }
  ]
}

```

- [x] A帽adir una canci贸n a una playlist:

```
{
  "id_song": 2,
  "id_playlist": 3,
}
```
