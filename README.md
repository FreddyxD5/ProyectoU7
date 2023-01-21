Proyecto
Sobre el proyecto
Entregables:

URL de repositorio (18 de enero)

Video de youtube (24 de enero)

El día 18 de enero concretarán los avances realizados en la sesión de taller en una URL de github. Posteriormente aplicarán las mejoras respectivas a ese repositorio en los siguientes días.

Para su presentación final deberán crear un video en el cual expliquen el funcionamiento de su código en conjunto de una demo, tanto código como el video son necesarios para la calificación.

Tiempo máximo del video: 7 - 10 min. Video que supere el tiempo indicado no será revisado.

Equipo
Grupos de 1 a 3 personas como máximo

Objetivos
👉 Utilizar NodeJs y Express.

👉 Las rutas deberán seguir el patrón REST.

👉 Utilizar la librería Prisma.

👉 Utilizar Typescript.

👉 Utilizar SQLite.

👉 Manejar git como equipo.

Consideraciones
Todos los response deben ser de los que ofrece prisma al realizar la query a la base de datos.

Creación de usuarios
Creación con password hasheado
Ruta: /api/v1/users => POST

{
  "id": 1,
  "name": "Usuario 1",
  "email": "email@gmail.com",
  "password": "123456"
  "last_session": Date,
  "update_at": Date,
  "date_born": Date
}
Login de usuario
Ruta: /api/v1/users/login => POST

{
  "email": "email@gmail.com",
  "password": "123456"
}
Creación de canciones
Consideraciones
Hay un campo para indicar si la canción es pública o privada.

En el caso de las privadas, solo podrían verlas los usuarios que son autenticados.

Para la creación de canciones utilizar los siguientes campos:

Ruta: /api/v1/songs => POST

{
  "id": 1,
  "name": "Canción 1",
  "artist": "Artista 1",
  "album": "Album 1",
  "year": 2020,
  "genre": "Rock",
  "duration": 120
}

Leer todas las canciones

Ruta: /api/v1/songs => GET
Leer una canción por id

Ruta: /api/v1/songs/:id => GET
Creación de playlist
Tabla intermedia entre usuarios y canciones.

Si te gusta una canción la agregas a tu playlist (crear ruta para añadir canciones a la playlist)

La playlist debe contener los siguientes campos:

Ruta: /api/v1/playlist => POST
{
  "id": 1,
  "name": "Playlist 1",
  "user_id": 1,
  "songs": [
    {
      "id": 1,
      "name": "Canción 1",
      "artist": "Artista 1",
      "album": "Album 1",
      "year": 2020,
      "genre": "Rock",
      "duration": 120
    },
    {
      "id": 2,
      "name": "Canción 2",
      "artist": "Artista 2",
      "album": "Album 2",
      "year": 2020,
      "genre": "Rock",
      "duration": 120
    }
  ]
}
Añadir una canción a una playlist:

{
  "id_song": 2,
  "id_playlist": 3,
}
